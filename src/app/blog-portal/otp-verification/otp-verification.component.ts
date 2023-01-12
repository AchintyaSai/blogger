import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {

  otpForm : FormGroup;
  constructor(private fb : FormBuilder) { 
    this.otpForm = this.fb.group({
      "otp-field" : [
        '',
        {
          validators : [
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(4)
          ]

        }
      ] 
    })
  }

  ngOnInit(): void {

  }

  verifyOtp()
  {

  }
}
