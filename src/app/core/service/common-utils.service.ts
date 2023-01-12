import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  constructor(private router : Router) { }

  navigateToPage(pageId : any)
  {
    this.router.navigateByUrl(pageId);
  }
}
