import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeskService } from 'src/app/pages/service/desk.service';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { Desk } from '../../common/desk';
import { TrainCar } from '../../common/trainCar';

@Component({
  selector: 'app-desk-edit',
  templateUrl: './desk-edit.component.html',
  styleUrls: ['./desk-edit.component.css']
})
export class DeskEditComponent implements OnInit {
  public id_desk: any;
  deskForm: FormGroup;
  trainCar: TrainCar[] = [];
  desk: Desk[] = [];

  constructor(
    private trainCarService: TrainCarService,
    private deskService: DeskService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id_desk = router.url.split('/')[3];
    console.log(this.id_desk);
    deskService.read(this.id_desk).subscribe((data) => {
      // console.log(data)
      // this.deskForm.setValue({
      //   name: ["", Validators.required],
      //   status: ["", Validators.required],
      //   toaTau: ["", Validators.required],
      // })
      for (const controlName in this.deskForm.controls) {
        if (controlName) {
          this.deskForm.controls[controlName].setValue(data[controlName]);
        }
        // console.log(controlName)
      }
    })
    this.deskForm = this.fb.group({
      name: ["", Validators.required],
      status: ["", Validators.required],
      toaTau: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.trainCarService.getList().subscribe(data => {
      this.trainCar = data;
    });
    this.deskService.getList().subscribe(data => {
      this.desk = data;
    });
  }

  edit(): void {
    this.deskService.update(this.id_desk, this.deskForm.value).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['admin/desk']);
    });
  }

  backTolist() {
    this.router.navigate(['/admin/desk'])
  }

}
