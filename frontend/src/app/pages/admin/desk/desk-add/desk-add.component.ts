import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeskService } from 'src/app/pages/service/desk.service';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { Desk } from '../../common/desk';
import { TrainCar } from '../../common/trainCar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-desk-add',
  templateUrl: './desk-add.component.html',
  styleUrls: ['./desk-add.component.css']
})
export class DeskAddComponent implements OnInit {
  trainCar: TrainCar[] = []
  desk: Desk[] = []
  deskForm: FormGroup
  constructor(private deskService: DeskService,
    private trainCarService: TrainCarService,
    private fb: FormBuilder,
    private router: Router) {
    this.deskForm = this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      toaTau: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.trainCarService.getList().subscribe(data => {
      this.trainCar = data
    })
  }

  get f() {
    return this.deskForm.controls
  }

  save() {
    this.deskService.add(this.deskForm.value).subscribe(data => {
      console.log(data)
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thêm địa điểm thành công!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admin/desk'])
  }
}
