import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { TrainsService } from 'src/app/pages/service/trains.service';
import { Train } from '../../common/train';
import { TrainCar } from '../../common/trainCar';

@Component({
  selector: 'app-train-car-edit',
  templateUrl: './train-car-edit.component.html',
  styleUrls: ['./train-car-edit.component.css']
})
export class TrainCarEditComponent implements OnInit {
  public id_car: any;
  carForm: FormGroup;
  train: Train[] = [];
  trainCar: TrainCar[] = [];

  constructor(
    private trainCarService: TrainCarService,
    private trainService: TrainsService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id_car = router.url.split('/')[3];
    // console.log(this.id_car);
    trainCarService.read(this.id_car).subscribe((data) => {
      console.log(data)
      this.carForm.setValue({
        name: ["", Validators.required],
        train: ["", Validators.required],
      })
      for (const controlName in this.carForm.controls) {
        if (controlName) {
          this.carForm.controls[controlName].setValue(data[controlName]);
        }
        console.log(controlName)
      }
    })
    this.carForm = this.fb.group({
      name: ["", Validators.required],
      train: ["", Validators.required],
    })
  }
  
  ngOnInit(): void {
    this.trainCarService.getList().subscribe(data => {
      this.trainCar = data;
    });
    this.trainService.getList().subscribe(data => {
    console.log('data :', data);
      this.train = data;
      console.log(data)
    });
  }

  edit(): void {
    this.trainCarService.update(this.id_car, this.carForm.value).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['admin/trainCar']);
    });
  }
}
