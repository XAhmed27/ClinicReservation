import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import {RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomedoctorComponent } from './homedoctor/homedoctor.component';
import { MessagesComponent } from './Components/messages/messages.component';
import {AppointmentComponent} from "./Components/appointment/appointment.component";
import { HomepatientComponent } from './Components/homepatient/homepatient.component';
import { ChoosedoctorComponent } from './Components/homepatient/choosedoctor/choosedoctor.component';
import { ViewAppointmentComponent } from './Components/homepatient/view-appointment/view-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomedoctorComponent,
    AppointmentComponent,
    MessagesComponent,
    HomepatientComponent,
    ChoosedoctorComponent,
    ViewAppointmentComponent
  ],
  imports: [
    BrowserModule, RouterOutlet,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
