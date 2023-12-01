import {Component, OnInit} from '@angular/core';
import {Appointment} from "../../../Models/appointment";
import {Userappointments} from "./userappointments";
import {HttpClient} from "@angular/common/http";
import {User} from "../../../Models/user";
import {UserUtils} from "../../../user.utils";
import {GetAppointmentResponseBody, Result} from "../../../Models/get.appointments.response.body";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent {
  userAppointment: Result[] = [];
  appointments?: Userappointments;
  selectedAppointment: Appointment | null = null;

  constructor(private http: HttpClient) {
    // this.userAppointments = Userappointments.fakeAppointments;
    this.getAppointment();
  }

  getAppointment() {
    const token=localStorage.getItem('token');
    this.http.get<GetAppointmentResponseBody>(UserUtils.baseUrl + "/reserve/view", {
      params: {
        "Authorization": "hamada" + token
      }
    }).subscribe(
      (data) => {
        console.log(data)
        this.userAppointment = data.result;
        console.log(this.userAppointment)
      }
    );
  }

  cancelAppointment(appointment: Result): void {
    console.log(appointment.id);
    const token=localStorage.getItem('token');

    this.http.put(UserUtils.baseUrl+'/reserve/cancel?', {
      "id": appointment.id
    }, {
      params: {
        "Authorization": "hamada" +token
      }
    }).subscribe(
      (data)=>{
        console.log(data)
        this.getAppointment();
      }
    );

    // let index = this.userAppointments?.findIndex(app => app.id === appointment.id);
    //
    // if (index !== -1) {
    //   // Remove the appointment from the array
    //   if (index != null) {
    //     this.userAppointments?.splice(index, 1);
    //   }
    // }
  }

  editAppointment(appointment: Userappointments): void {
     this.selectedAppointment = appointment;
  }


}
