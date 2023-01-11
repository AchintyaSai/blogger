import { Injectable } from '@angular/core';
import { APIMethod } from 'src/app/shared/constants/api-enum-constants';
import { APIUrl } from 'src/app/shared/constants/api-url-constants';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private networkService : NetworkService) { 

  }

  postSignupDetails(bodyData : any)
  {
    let url = APIUrl.SignUpPageUrl.USER_DETAILS;
    return this.networkService.call<any,any>(url, APIMethod.POST, new Map<string,string>(), bodyData)
  }
}
