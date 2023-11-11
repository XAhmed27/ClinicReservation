import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Slot} from "../../Models/slots";

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent {
  getSlots(doctorId: number): Observable<Slot[]> {
    // Fake data for slots
    const slots: Slot[] = [
      { id: 1, doctorId:1, date: '2023-11-15', startTime: '09:00', endTime: '10:00',isReserved:false },
      { id: 2, doctorId: 2, date: '2023-11-15', startTime: '10:30', endTime: '11:30',isReserved:false },
      { id: 3, doctorId:1, date: '2023-12-15', startTime: '09:00', endTime: '10:00',isReserved:true },
      // Add more slots as needed
    ];

    // Filter slots based on the specified doctorId
    let doctorCurrentSlots = slots.filter((slot) => slot.doctorId === doctorId);

    return of(doctorCurrentSlots);
  }
}
