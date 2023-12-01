import {Component, Inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../Models/user";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user?: User;
  private apiUrl = 'http://localhost:3500/auth'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {
    this.user = new User();
    this.user.role = "patient";
  }

  onRoleChange(role: string) {
    this.user!.role = role;
    // console.log(this.user!.role);
  }

  signup() {
    return this.http.post(`${this.apiUrl}`, {
      'name': this.user!.name,
      'email': this.user!.email,
      'password': this.user!.password,
      'cpassword': this.user!.cpassword,
      'phone': this.user!.phone,
      'role': this.user!.role
    }).subscribe(
      (data)=>{
        console.log(data)
      }
    );
  }


}
