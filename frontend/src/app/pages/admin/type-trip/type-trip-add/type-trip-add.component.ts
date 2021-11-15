import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { TypeTripService } from '../../../service/type-trip.service';
import { TrainCar } from '../../common/trainCar';
import { TrainCarService } from 'src/app/pages/service/train-car.service';

@Component({
  selector: 'app-type-trip-add',
  templateUrl: './type-trip-add.component.html',
  styleUrls: ['./type-trip-add.component.css']
})
export class TypeTripAddComponent implements OnInit {
  typeTripForm: FormGroup;
  trainCar: TrainCar[] = []

  constructor(
    private trainCarService: TrainCarService,
    private typeTripService: TypeTripService,
    private fb: FormBuilder,
    private router: Router) {
    this.typeTripForm = this.fb.group({
      name: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.trainCarService.getList().subscribe(data => {
      this.trainCar = data
      console.log(this.trainCar)
    })
  }

  save() {
    this.typeTripService.addList(this.typeTripForm.value).subscribe(data => {
      console.log(data)
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thêm loại chuyến thành công!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admin/type-trip'])
    // console.log(this.trainForm)
  }

  backTolist() {
    this.router.navigate(['/admin/type-trip'])
  }
}
