import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentVariableService {

public env!: any
  constructor(private readonly http: HttpClient) { }

  public loadEnvironmentVariable() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<any>('assets/appSettings.json', httpOption).
    subscribe(config => {
      // console.log(config, 'loaded')
      this.env = config
  });
 }

 public getAppSettings(){
   return this.env
 }
}
