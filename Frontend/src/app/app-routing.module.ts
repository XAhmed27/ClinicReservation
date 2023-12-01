import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import {LoginComponent} from "./Components/login/login.component";
import {SignupComponent} from "./Components/signup/signup.component";
import {HomedoctorComponent} from "./homedoctor/homedoctor.component";
import {AppointmentComponent} from "./Components/appointment/appointment.component";
import {MessagesComponent} from "./Components/messages/messages.component";
import {HomepatientComponent} from "./Components/homepatient/homepatient.component";
import {ViewAppointmentComponent} from "./Components/homepatient/view-appointment/view-appointment.component";
import {ChoosedoctorComponent} from "./Components/homepatient/choosedoctor/choosedoctor.component";


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'', component:LoginComponent},
  {path:'doctor',component:HomedoctorComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'messages',component:MessagesComponent},
  {path:'patient',component:HomepatientComponent,
  children:[

  ]
  },
  {path:'choose-doctor',component:ChoosedoctorComponent},
  {path:'view-appointments',component:ViewAppointmentComponent}
 ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule {


}

