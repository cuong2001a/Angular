import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Train } from 'src/app/pages/admin/common/train';
import { TrainCar } from 'src/app/pages/admin/common/trainCar';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { TrainsService } from 'src/app/pages/service/trains.service';
import { TypeTripService } from 'src/app/pages/service/type-trip.service';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styleUrls: ['./choose-car.component.css'],
})
export class ChooseCarComponent implements OnInit {
  positionTrainCar: string = '';
  a: any;
  dataTrainCar: any;
  dataTrain!: Train;
  hintTrainCarChoose!: TrainCar;
  priceTrainCar: number = 0;
  typeTripId: any;
  typeTrip: any;

  constructor(
    private route: ActivatedRoute,
    private trainCarServcie: TrainCarService,
    private trainService: TrainsService,
    private typeTripService: TypeTripService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTrainCarById();
    this.getTrainById();
    this.getTypeTripById();
  }
  getTrainCarById() {
    this.a = this.route.snapshot.paramMap.get('id');
    this.trainCarServcie.findTrainCarByTrain(this.a).subscribe((data) => {
      this.dataTrainCar = data;
    });
  }
  getTrainById() {
    this.a = this.route.snapshot.paramMap.get('id');
    this.trainService.findOneTrain(this.a).subscribe((data) => {
      this.dataTrain = data;
      localStorage.setItem('train', JSON.stringify(this.dataTrain));
    });
  }
  getTypeTripById() {
    this.typeTripId = JSON.parse(localStorage.getItem('typeTrip') || '');
    this.typeTripService.read(this.typeTripId).subscribe(async(data) => {
      await localStorage.setItem("typeTrips",JSON.stringify(data))
      this.typeTrip = data;
    });
  }
  chooseTrainCar(a: any, index: number) {
    this.trainCarServcie.findById(a).subscribe((data) => {
      this.hintTrainCarChoose = data;
      if (index == 0 || index == 1) {
        this.positionTrainCar = 'Giường nằm';
        this.priceTrainCar = 500000;
      } else if (index == 2 || index == 3) {
        this.positionTrainCar = 'Ghế mềm';
        this.priceTrainCar = 400000;
      } else {
        this.positionTrainCar = 'Ghế cứng';
        this.priceTrainCar = 300000;
      }
    });
  }
  submitNextChooseSeat() {
    let data = {
      positionTrainCar: this.positionTrainCar,
      priceTrainCar: this.priceTrainCar,
    };
    localStorage.setItem('chooseCar', JSON.stringify(data));
    this.router.navigate([`/client/seat/${this.hintTrainCarChoose._id}`]);
  }
}
