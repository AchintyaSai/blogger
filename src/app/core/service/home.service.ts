import { Injectable } from '@angular/core';
import { APIMethod } from 'src/app/shared/constants/api-enum-constants';
import { APIUrl } from 'src/app/shared/constants/api-url-constants';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private networkService : NetworkService) { }

  getPosts()
  {
    return this.networkService.call<any>(APIUrl.HomePageUrl.GET_POST, APIMethod.GET,new Map<string,string>())
  }
}
