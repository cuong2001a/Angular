import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Desk } from 'src/app/pages/admin/common/desk';
import { DeskService } from 'src/app/pages/service/desk.service';
import { TrainCarService } from 'src/app/pages/service/train-car.service';

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.css'],
})
export class ChooseSeatComponent implements OnInit {
  dataDesks: any;
  a: any;
  getDesk: any;
  isGetDesk: boolean = false;
  chooseTrainCar: any ;
  train: any;
  trainCar: any;
  typeTrip: any;
  constructor(
    private route: ActivatedRoute,
    private deskService: DeskService,
    private trainCarService: TrainCarService,
    private router: Router
  ) {
    this.getDeskById();
  }

  ngOnInit(): void {
    this.getTrainCar();
    this.chooseTrainCar = JSON.parse(localStorage.getItem("chooseCar")||'{}') ;
    this.train = JSON.parse(localStorage.getItem("train")||'{}') ;
    this.typeTrip = JSON.parse(localStorage.getItem("typeTrips")||'{}') ;

  }
  getDeskById() {
    this.a = this.route.snapshot.paramMap.get('id');
    this.deskService.getDeskById(this.a).subscribe((data) => {
      this.dataDesks = data;
    });
  }

  getId(a: any) {
    this.isGetDesk = true;
    this.deskService.findbyId(a).subscribe((data) => {
      if (data != undefined) {
        this.getDesk = data;
      }
    });
  }
 
  async changeStatusDesk(id: any) {
    let newGetDesk = {
      _id:id,
      ...this.getDesk,
      status: true,
    };
    await localStorage.setItem('desk', JSON.stringify(newGetDesk));
    await this.router.navigate(['/client/information']);
  }
  async changReturnChooseCar(){
    let data: any = localStorage.getItem('train');
    const result = JSON.parse(data);
    await this.router.navigate([`/client/car/${result._id}`]);
  }
  getTrainCar() {
    this.a = this.route.snapshot.paramMap.get('id');
    this.trainCarService.findById(this.a).subscribe((data) => {
      this.trainCar = data;
      localStorage.setItem('trainCar', JSON.stringify(data));
    });
  }
}
