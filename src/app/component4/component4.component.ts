import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  numberOne: number = 0;
  number$: any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.number$ = interval(500);

    this.number$.subscribe((response:any) =>{
      this.numberOne = response;
      this.service.setSubject(response);
    });

  }

}
