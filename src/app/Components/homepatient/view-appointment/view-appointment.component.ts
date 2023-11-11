import { Component, OnInit } from '@angular/core';
import { Appointment } from "../../../Models/appointment";
import { Userappointments } from "./userappointments";

@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent {
  userAppointments?: Appointment[] = [];
  appointments?: Userappointments;

  constructor() {
    this.userAppointments = Userappointments.fakeAppointments;

  }

  cancelAppointment(appointment: Appointment): void {

    let index = this.userAppointments?.findIndex(app => app.id === appointment.id);

    if (index !== -1) {
      // Remove the appointment from the array
      if (index != null) {
        this.userAppointments?.splice(index, 1);
      }
    }
  }
}
