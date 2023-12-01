import {delay, Observable, of} from "rxjs";
import {Appointment} from "../../../Models/appointment";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

export class Userappointments {

  static fakeAppointments: Appointment[] = [
    {id: 1, userId: 1, date: '2023-01-15', time: '10:00 AM', doctor: 'Dr. Smith'},
    {id: 2, userId: 1, date: '2023-01-20', time: '02:30 PM', doctor: 'Dr. Johnson'},
  ];
}
