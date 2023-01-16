import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonUtilsService } from 'src/app/core/service/common-utils.service';
import { OtpService } from 'src/app/core/service/otp.service';
import { StorageService } from 'src/app/core/service/storage.service';
import { PageId } from 'src/app/shared/constants/app-constants';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss']
})
export class OtpVerificationComponent implements OnInit {

  otpForm : FormGroup;
  showErrorMessage : boolean = false;

  constructor(private fb : FormBuilder, private otpService : OtpService, private sessionStorage : StorageService, private commonUtils : CommonUtilsService) { 
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

  onOTPChange() {
    this.showErrorMessage = false;
  }

  verifyOtp()
  {
    let userInfo = this.sessionStorage.getItem("user_info");
    let otpData = 
      {
        "email" : userInfo.email,
        "otp" : this.otpForm.get('otp-field')?.value
    }
    
    this.otpService.sendOTP(otpData).subscribe(data => {
      console.log(data)
      if(data.errorCode == "0000")
        this.commonUtils.navigateToPage(PageId.HOME_PAGE);
    }, err => {
      this.otpForm.get('otp-field')?.setValue("")
      this.showErrorMessage = true;
    })
  }
}
