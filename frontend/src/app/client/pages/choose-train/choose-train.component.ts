import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Train } from 'src/app/pages/admin/common/train';

@Component({
  selector: 'app-choose-train',
  templateUrl: './choose-train.component.html',
  styleUrls: ['./choose-train.component.css']
})
export class ChooseTrainComponent implements OnInit {
  data : any;
  dataTrain: any;
  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem("data")||'{}') ;
    this.dataTrain = JSON.parse(localStorage.getItem("trainCar")||'{}') ;
    console.log('this.dataTrain :', this.dataTrain);
  }

}
