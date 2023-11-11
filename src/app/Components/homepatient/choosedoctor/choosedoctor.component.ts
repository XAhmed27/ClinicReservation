import {Component} from '@angular/core';
import {SlotComponent} from "../../slot/slot.component";
import {Doctor} from "../../../Models/doctor";
import {Observable} from "rxjs";
import {Reservedappointment} from "../reservedappointment/reservedappointment";
import {HttpClient} from "@angular/common/http";
import {GetAllDoctorsResponseBody, Result} from "../../../Models/GetAllDoctorsResponseBody";
import {UserUtils} from "../../../user.utils";
import {DoctorSlotBody, Slot} from "../../../Models/get.doctors.slots.response.body";

const appointments = [];

@Component({
  selector: 'app-choosedoctor',
  templateUrl: './choosedoctor.component.html',
  styleUrls: ['./choosedoctor.component.css']
})


export class ChoosedoctorComponent {
  doctors?: Result[];
  selectedDoctor?: Doctor;
  slots: Slot[] = [];
  slotService?: SlotComponent;
  reservationStatus: boolean = false;

  constructor(private http: HttpClient) {
    this.slotService = new SlotComponent();
    this.loadDoctors();
  }


  loadDoctors(): void {
    this.http.get<GetAllDoctorsResponseBody>('http://localhost:3000/user/doctors').subscribe(
      (data) => {
        console.log(data);
        this.doctors = data.result;
      }
    );
  }

  onSelectDoctor(doctor: Doctor): void {
    this.selectedDoctor = doctor;
    this.loadSlots(doctor.id);
  }

  loadSlots(doctorId: number): void {
    console.log(doctorId)
    this.http.get<DoctorSlotBody>(UserUtils.baseUrl + "/slot/doctorslots/" + doctorId, {
      params: {
        "Authorization": "hamadaeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImVtYWlsIjoia2Vrb0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3MjUxMDIsImV4cCI6MTczMTI4MjcwMn0.Wq44REY-m0kE6Ku2Fs3g_ADnkfImihYBZ-NliuMopEQ"
      }
    }).subscribe(
      (data) => {
        console.log(data)
        this.slots = data;
      }
    );
  }

  reserveSlot(slot: Slot) {

    this.http.post(UserUtils.baseUrl + "/reserve", {
      "keys": slot.key
    },{
      params:{
        "Authorization":"hamadaeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImVtYWlsIjoia2Vrb0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3MjUxMDIsImV4cCI6MTczMTI4MjcwMn0.Wq44REY-m0kE6Ku2Fs3g_ADnkfImihYBZ-NliuMopEQ"
      }
    }).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

}
