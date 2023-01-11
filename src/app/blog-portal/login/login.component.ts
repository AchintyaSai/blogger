import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from 'src/app/core/service/signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private signupService : SignupService, private fb : FormBuilder) { 
    this.loginForm = this.fb.group({
      name: [
        '',
        {
          validators: [
            Validators.required
          ],
        },
      ],
      email : [
        '',
        {
          validators: [
            Validators.required
          ],
        },
      ],
      mobile : [
        '',
        {
          validators: [
            Validators.required
          ],
        },
      ],
      country : [
        '',
        {
          validators: [
            Validators.required
          ],
        },
      ],
    })
  }

  ngOnInit(): void {

  }


  postSignupDetails()
  {
    if(!this.loginForm.valid)
      return;
    
    let bodyData = {
      "full_name": this.loginForm.get('name')?.value,
      "email": this.loginForm.get('email')?.value,
      "phone": this.loginForm.get('mobile')?.value,
      "country": this.loginForm.get('country')?.value
    }
    this.signupService.postSignupDetails(bodyData).subscribe(resp => {
      console.log(resp)
    }, error => {
      console.log(error);
    })
  }
}
