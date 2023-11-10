import { Component } from '@angular/core';
import {ListofdoctorsComponent} from "../listofdoctors/listofdoctors.component";
import {SlotComponent} from "../../slot/slot.component";
import {Doctor} from "../../../Models/doctor";
import {Slot} from "../../../Models/slots";
import {Observable} from "rxjs";
const appointments = [];
@Component({
  selector: 'app-choosedoctor',
  templateUrl: './choosedoctor.component.html',
  styleUrls: ['./choosedoctor.component.css']
})


export class ChoosedoctorComponent {
  doctors?: Doctor[] ;
  selectedDoctor?: Doctor;
  slots?: Slot[];
  doctorService?:ListofdoctorsComponent;
  slotService?:SlotComponent;
  reservationStatus: boolean = false;


  constructor( ) {
    this.doctorService =new  ListofdoctorsComponent();
    this.slotService = new SlotComponent();
    this.loadDoctors();
  }



  loadDoctors(): void {
    this.doctorService!.getDoctors().subscribe((doctors) => {
      this.doctors = doctors;
    });
  }

  onSelectDoctor(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    this.loadSlots(doctor.id);
  }

  loadSlots(doctorId: number): void {
    this.slotService!.getSlots(doctorId).subscribe((slots) => {
      this.slots = slots;
    });
  }
  reserveSlot(slot: any) {
    if (!slot.isReserved) {
      // Assuming 'selectedDoctor' and 'loggedInPatient' are properties in your component
      const doctorAppointment = {
        date: slot.date,
        startTime: slot.startTime,
        endTime: slot.endTime,
        doctor: this.selectedDoctor, // Assuming 'selectedDoctor' is set elsewhere// Assuming 'loggedInPatient' is set elsewhere
      };


      // Assuming 'appointmentService' is a service managing patient's appointments\
    } else {
      this.reservationStatus = false;
      console.log("Slot is already reserved");
    }
  }

}
