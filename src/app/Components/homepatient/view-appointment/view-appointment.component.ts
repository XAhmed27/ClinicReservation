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
    this.http.get<GetAppointmentResponseBody>(UserUtils.baseUrl + "/reserve/view", {
      params: {
        "Authorization": "hamadaeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImVtYWlsIjoia2Vrb0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3MjA1NjQsImV4cCI6MTczMTI3ODE2NH0.yv5g0335bJpPf5zGO3e0iYwgktUBOhkhEEKpto87Cu4"
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

    this.http.put(UserUtils.baseUrl+'/reserve/cancel?', {
      "id": appointment.id
    }, {
      params: {
        "Authorization": "hamadaeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsImVtYWlsIjoia2Vrb0BnbWFpbC5jb20iLCJpYXQiOjE2OTk3MjM1MzksImV4cCI6MTczMTI4MTEzOX0.P-Tnz2ZVx7Z7Q3jlro894hd3GlQOevNuhkXTdTf-l94",
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
