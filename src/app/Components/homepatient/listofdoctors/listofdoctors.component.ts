import { Component } from '@angular/core';
import {Observable, of} from "rxjs";
import {Doctor} from "../../../Models/doctor";

@Component({
  selector: 'app-listofdoctors',
  templateUrl: './listofdoctors.component.html',
  styleUrls: ['./listofdoctors.component.css']
})
export class ListofdoctorsComponent {
  getDoctors(): Observable<Doctor[]> {
    // Fake data for doctors
     let doctors: Doctor[] = [
      { id: 1, name: 'amr mustfa' },
      { id: 2, name: 'mohamed anas' },
    ];

    return of(doctors);
  }

}
