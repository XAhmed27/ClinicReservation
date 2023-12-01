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
    this.http.get<GetAllDoctorsResponseBody>('http://localhost:3500/user/doctors').subscribe(
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
    const token=localStorage.getItem('token');
    console.log(doctorId)
    this.http.get<DoctorSlotBody>(UserUtils.baseUrl + "/slot/doctorslots/" + doctorId, {
      params: {
        "Authorization": "hamada" + token
      }
    }).subscribe(
      (data) => {
        console.log(data)
        this.slots = data;
      }
    );
  }

  reserveSlot(slot: Slot) {
    const token=localStorage.getItem('token');



    this.http.post(UserUtils.baseUrl + "/reserve", {
      "keys": slot.key
    },{
      params:{
        "Authorization":"hamada" + token
      }
    }).subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }

}
