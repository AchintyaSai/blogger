import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtpVerificationRoutingModule } from './otp-verification-routing.module';
import { OtpVerificationComponent } from './otp-verification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OtpVerificationComponent
  ],
  imports: [
    CommonModule,
    OtpVerificationRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class OtpVerificationModule { }
