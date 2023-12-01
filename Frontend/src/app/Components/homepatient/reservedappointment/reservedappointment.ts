import {Patient} from "../../../Models/patient";
import {Observable, of} from "rxjs";
import {Doctor} from "../../../Models/doctor";


export class Reservedappointment {
  id?: number;
  doctorId?: number;
  date?: string; // Format: 'YYYY-MM-DD'
  startTime?: string; // Format: 'HH:mm'
  endTime?: string;
  isReserved?:boolean;
  patient?:Patient;
  doctor?:Doctor;
  appointments?:Reservedappointment[];
  reserveSlot(appointment: Reservedappointment): Observable<boolean> {
    this.appointments!.push(appointment);
    return of(true);
  }

}
