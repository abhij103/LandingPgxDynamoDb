import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollUpdateService {
  navFixed = new BehaviorSubject<boolean>(false);
  constructor() { }
  navbarFixed(status:boolean){
    this.navFixed.next(status);
  }
}
