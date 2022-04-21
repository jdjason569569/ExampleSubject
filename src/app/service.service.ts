import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

   subject = new Subject();

  constructor() { }


  setSubject(val: number){
      this.subject.next(val);
  }

  getSubject(){
    return this.subject;
  }


}
