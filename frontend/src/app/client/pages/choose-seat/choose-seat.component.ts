import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Desk } from 'src/app/pages/admin/common/desk';
import { DeskService } from 'src/app/pages/service/desk.service';
import { TrainCarService } from 'src/app/pages/service/train-car.service';

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.css']
})
export class ChooseSeatComponent implements OnInit {
  dataDesks: any
  a: any
  getDesk: any
  isGetDesk: boolean = false
  constructor(private route: ActivatedRoute,
    private deskService: DeskService,
    private trainCarService: TrainCarService,
    private router: Router) {
    this.getDeskById();
  }

  ngOnInit(): void {
    this.getTrainCar()
  }
  getDeskById() {
    this.a = this.route.snapshot.paramMap.get('id');
    console.log(this.a)
    this.deskService.getDeskById(this.a).subscribe(data => {
      this.dataDesks = data;
      console.log(this.dataDesks);
    })
  }

  getId(a: any) {
    this.isGetDesk = true;
    this.deskService.findbyId(a).subscribe(data => {
      if (data != undefined) {
        this.getDesk = data;
        console.log(this.getDesk)
      }
    })
  }
 changeStatusDesk(id:any) {
    let newGetDesk = {
      ...this.getDesk,
      status: true
    }
    console.log(newGetDesk);

    this.deskService.update(id,newGetDesk).subscribe(async data=>{
      await localStorage.setItem("desk",JSON.stringify(data))
      await this.router.navigate(['/client/information'])
    })
  }
  getTrainCar(){
    this.a = this.route.snapshot.paramMap.get('id');
    this.trainCarService.findById(this.a).subscribe(data=>{
      localStorage.setItem("trainCar",JSON.stringify(data))
    })
  }
}
