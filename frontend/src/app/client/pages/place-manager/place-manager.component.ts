import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-manager',
  templateUrl: './place-manager.component.html',
  styleUrls: ['./place-manager.component.css']
})
export class PlaceManagerComponent implements OnInit {
  isShowHide : Boolean = false
  data :any
  constructor() { }

  ngOnInit(): void {
  }
  listData(a:any){
    this.isShowHide = true
    this.data =a
      console.log(this.data)
  
    
  }
}
