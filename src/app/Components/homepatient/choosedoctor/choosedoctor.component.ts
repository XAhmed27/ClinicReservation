import { Component } from '@angular/core';
import {ListofdoctorsComponent} from "../listofdoctors/listofdoctors.component";
import {SlotComponent} from "../../slot/slot.component";
import {Doctor} from "../../../Models/doctor";
import {Slot} from "../../../Models/slots";
import {Observable} from "rxjs";
import {Reservedappointment} from "../reservedappointment/reservedappointment";
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
      const doctorAppointment = {
        date: slot.date,
        startTime: slot.startTime,
        endTime: slot.endTime,
        doctor: this.selectedDoctor,
      };

      console.log("Slot is  reserved succussfully");



    } else {
      this.reservationStatus = false;
      console.log("Slot is already reserved");
    }
  }

}
