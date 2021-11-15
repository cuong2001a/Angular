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
  constructor() { }

  ngOnInit(): void {
    this.data = JSON.parse(localStorage.getItem("data")||'{}') ;
    console.log(this.data)
  }

}
