import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any){
      sessionStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string){
    const item = sessionStorage.getItem(key);
      return (item) ? JSON.parse(item) : null;
    }
}
