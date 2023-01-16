import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'
declare var require: any

const crypto = require('crypto-js');
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.body);

    let stringifiedObj = JSON.stringify(request.body);

    if(environment.encryptionEnabled)
      request = request.clone({ body : { "encryptedBody" : crypto.AES.encrypt( stringifiedObj, '999999999').toString() } });
    
    return next.handle(request).pipe(map((event : HttpEvent<any>)=>{
      if(event instanceof HttpResponse)
      {
        if(environment.encryptionEnabled)
        event = event.clone({
          body : JSON.parse(crypto.AES.decrypt(event.body.encryptedResponse, '999999999').toString(crypto.enc.Utf8))
        })
      }
      return event;
    })).pipe(
      catchError((err : HttpErrorResponse) => {
        if(environment.encryptionEnabled)
          return throwError(JSON.parse(crypto.AES.decrypt(err.error.encryptedResponse, '999999999').toString(crypto.enc.Utf8)));
        else
          return throwError(err)
    }));
  }
}
