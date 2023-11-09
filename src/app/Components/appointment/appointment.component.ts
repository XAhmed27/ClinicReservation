import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {currentAppointments: any[] = []; // Assuming you have an array for current appointments
  newAppointments: any[] = []; // Assuming you have an array for new appointments
  selectedAppointment: any;
  selectedDate?: string;
  selectedStartTime?: string;
  selectedEndTime?: string;
  i?:number;

  addAppointment() {
    // Implement the logic to add a new appointment with selected time
    const newAppointment = {
      date: this.selectedDate,
      startTime: this.selectedStartTime,
      endTime: this.selectedEndTime
    };
    this.newAppointments.push(newAppointment);

    // Reset the selected date and times after adding the appointment
    this.selectedDate = '';
    this.selectedStartTime = '';
    this.selectedEndTime = '';
  }
  EditAppointment(appointment: any) {
    // Check if required properties are set before editing the appointment
    if (this.selectedDate && this.selectedStartTime && this.selectedEndTime) {
      // Update the properties of the existing appointment
      appointment.date = this.selectedDate;
      appointment.startTime = this.selectedStartTime;
      appointment.endTime = this.selectedEndTime;


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
      this.selectedAppointment.startTime=this.selectedStartTime;
      this.selectedAppointment.endTime=this.selectedEndTime;
      // fix the confliction with the edit function
      const index = this.currentAppointments.indexOf(this.selectedAppointment);
      if (index !== -1) {
        this.currentAppointments.splice(index, 1);
      }
      this.currentAppointments.push(this.selectedAppointment);
      //reset everything
      this.selectedDate = '';
      this.selectedStartTime = '';
      this.selectedEndTime = '';
    }
  }
}
