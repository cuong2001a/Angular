import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Train } from 'src/app/pages/admin/common/train';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Output() data = new EventEmitter()
  constructor() {
     }
  // train(a:any){
  //   this.data.emit(a)
  // }
  ngOnInit(): void {
  }
  
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }

  customHome: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    autoplayTimeout: 4000,
    margin: 20,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }
}
