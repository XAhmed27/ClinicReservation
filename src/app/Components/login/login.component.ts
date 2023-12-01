import { Component } from '@angular/core';
import {User} from "../../Models/user";
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';


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
  private apiUrl = 'http://localhost:8000/auth/login';
  static token:string= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksImVtYWlsIjoiYWhtZWRlbHRvbnkyNUBnbWFpbC5jb20iLCJpYXQiOjE2OTk1OTUyNjIsImV4cCI6MTczMTE1Mjg2Mn0.xn_OLPLQCfqdlgTu-hkcPAnbAaQC1agqzgg2xH5031c";
  constructor(private http: HttpClient,private route:Router) {
    this.role = "patient";
  }
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
      (data:any)=>{
        console.log(data);
        localStorage.setItem('token',data.token);

        if(this.role=="doctor"){
           this.route.navigate(["/doctor"]);
        }else {
          this.route.navigate(['/patient'])
        }

      }
    );
    }


}
