import { Component } from '@angular/core';
import {User} from "../../Models/user";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?:string;
  password?:string;
  role?:string;
  user?: User;
  private apiUrl = 'http://localhost:3000/auth/login';
  static token:string= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImVtYWlsIjoiYWhtZWRlbHRvbnkyNUBnbWFpbC5jb20iLCJpYXQiOjE2OTk1OTUyNjIsImV4cCI6MTczMTE1Mjg2Mn0.xn_OLPLQCfqdlgTu-hkcPAnbAaQC1agqzgg2xH5031c";
  constructor(private http: HttpClient) {
    this.role = "patient";
  }// Replace with your actual API endpoint
  onRoleChange(role: string) {
    this.role = role;
    // console.log(this.user!.role);
  }
  login(){
    return this.http.post(`${this.apiUrl}`, {
      'email': this.email,
      'password': this.password,
      'role':this.role
    }).subscribe(
      (data)=>{
        console.log(data)
      }
    );
    }

}
