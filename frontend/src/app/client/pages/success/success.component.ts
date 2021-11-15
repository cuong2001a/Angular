import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  infoTicket: any
  constructor() { }

  ngOnInit(): void {
    this.getInfo();
  }
  getInfo(){
    this.infoTicket=JSON.parse(localStorage.getItem('info')||'{}') 
  }
}
