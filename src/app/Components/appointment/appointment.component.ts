import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {DoctorSlotResponse} from "../../Models/doctorSlotResponse";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  currentAppointments: DoctorSlotResponse[] = []; // Assuming you have an array for current appointments
  newAppointments: DoctorSlotResponse[] = []; // Assuming you have an array for new appointments
  selectedAppointment: any;
  selectedDate?: string;
  selectedHours?: string;
/*
  selectedEndTime?: string;
*/
  i?:number;
  private apiUrl = 'http://localhost:3000/slot';
  date?:string;
  hours?:string;
  time?:string;
  body: any = {};

  constructor(private http: HttpClient) {
  }

  addAppointment() {

    // Implement the logic to add a new appointment with selected time
    const newAppointment = {
      date: this.selectedDate,
      Hours: this.selectedHours,

    };
    this.newAppointments.push(newAppointment);

    this.selectedDate = '';
    this.selectedHours = '';
  }
  EditAppointment(appointment: any) {
    // Check if required properties are set before editing the appointment
    if (this.selectedDate && this.selectedHours) {
      // Update the properties of the existing appointment
      appointment.date = this.selectedDate;
      appointment.Hours = this.selectedHours;



    }
  }

  selectAppointment(appointment: any) {
    this.selectedAppointment = appointment;
  }

  deleteAppointment(i: number) {
    // Check if the index is valid
    if ( i < this.currentAppointments.length) {
      // Remove the appointment from the array
      this.currentAppointments.splice(i, 1);
    }
  }
  confirmAppointment() {


    // update the selected appointment with the selected date
    if (this.selectedDate) {
      this.selectedAppointment.date = this.selectedDate;
      this.selectedAppointment.startTime=this.selectedHours;
/*
      this.selectedAppointment.endTime=this.selectedEndTime;
*/
      // fix the confliction with the edit function
      const index = this.currentAppointments.indexOf(this.selectedAppointment);
      if (index !== -1) {
        this.currentAppointments.splice(index, 1);
      }
      this.currentAppointments.push(this.selectedAppointment);
      //reset everything
      this.selectedDate = '';
      this.selectedHours = '';
    }
  }
  addSlot() {



    // Get the token from localStorage or any other secure storage
    const token = localStorage.getItem('token');

    // Check if the token is available
    if (token) {
      // Set the Authorization header with the token
      const headers = new HttpHeaders().set('Authorization', token);


      console.log(this.selectedDate);
      console.log(this.selectedHours);
      console.log(this.selectedAppointment);
      // Make the HTTP request with headers
      this.http.post(this.apiUrl, {
        "date":this.selectedDate,
        "hours": this.selectedHours,
      }, {
        params:{
          "Authorization":"hamadaeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDQsImVtYWlsIjoia2VrbzExQGdtYWlsLmNvbSIsImlhdCI6MTY5OTczNDA5MCwiZXhwIjoxNzMxMjkxNjkwfQ.aUu-MBLdwlsETJtQu0bMc98smHiAkPKgN0qlshHm2KI"
        }
      }).subscribe(
        (data: any) => {
          console.log(data);
          this.currentAppointments.push(data);
        },
        (error) => {
          console.error("Error:", error);
        }
      );
    } else {
      console.error("Token not available. Please log in.");
    }
  }
}
