import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { TrainsService } from 'src/app/pages/service/trains.service';
import { Train } from '../../common/train';
import { TrainCar } from '../../common/trainCar';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';


@Component({
  selector: 'app-train-car-add',
  templateUrl: './train-car-add.component.html',
  styleUrls: ['./train-car-add.component.css']
})
export class TrainCarAddComponent implements OnInit {
  train: Train[] = []
  trainCar: TrainCar[] = []
  trainCarForm: FormGroup
  constructor(private trainCarService: TrainCarService,
    private trainService: TrainsService,
    private fb: FormBuilder,
    private router: Router) {
    this.trainCarForm = this.fb.group({
      name: ["", Validators.required],
      train: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.trainService.getList().subscribe(data => {
      this.train = data
    })
  }

  get f() {
    return this.trainCarForm.controls
  }

  save() {
    this.trainCarService.add(this.trainCarForm.value).subscribe(data => {
      console.log(data)
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thêm toa thành công!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admin/trainCar'])
  }

}
