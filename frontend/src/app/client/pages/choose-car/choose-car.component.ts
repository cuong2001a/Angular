import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Train } from 'src/app/pages/admin/common/train';
import { TrainCar } from 'src/app/pages/admin/common/trainCar';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { TrainsService } from 'src/app/pages/service/trains.service';

@Component({
  selector: 'app-choose-car',
  templateUrl: './choose-car.component.html',
  styleUrls: ['./choose-car.component.css']
})
export class ChooseCarComponent implements OnInit {

  a: any
  dataTrainCar: any
  dataTrain!: Train
  hintTrainCarChoose!: TrainCar
  constructor(private route: ActivatedRoute,
              private trainCarServcie :TrainCarService,
              private trainService: TrainsService) {}

  ngOnInit(): void {
    this.getTrainCarById();
    this.getTrainById();
  }
  getTrainCarById(){
    this.a = this.route.snapshot.paramMap.get('id');
    console.log(this.a)
    this.trainCarServcie.findTrainCarByTrain(this.a).subscribe(data=>{
      this.dataTrainCar= data
      console.log(this.dataTrainCar);
    })
   
  }
  getTrainById(){
    this.a = this.route.snapshot.paramMap.get('id');
    this.trainService.findOneTrain(this.a).subscribe(data=>{
      this.dataTrain= data
      localStorage.setItem("train",JSON.stringify(this.dataTrain))
      console.log(data)
      // console.log(this.dataTrain)
    })
  }
  chooseTrainCar(a:any){
    this.trainCarServcie.findById(a).subscribe(data=>{
      this.hintTrainCarChoose= data
    })
    console.log(a)
  }
 
}
