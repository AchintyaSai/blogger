import { Injectable } from '@angular/core';
import { APIMethod } from 'src/app/shared/constants/api-enum-constants';
import { APIUrl } from 'src/app/shared/constants/api-url-constants';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class OtpService {

  constructor(private newtworkService : NetworkService) { 

  }

  sendOTP(bodyData : any)
  {
    return this.newtworkService.call<any,any>(APIUrl.OtpPageUrl.SEND_OTP, APIMethod.POST, new Map<string,string>(), bodyData);
  }
}
