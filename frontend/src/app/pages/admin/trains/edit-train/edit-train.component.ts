import { Component, Input, OnInit } from '@angular/core';
import { Train } from '../../common/train';
import { TrainsService } from 'src/app/pages/service/trains.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Arrival } from '../../common/addressArrival';
import { Go } from '../../common/addressGo';
import { ArrivalService } from 'src/app/pages/service/arrival.service';
import { GoService } from 'src/app/pages/service/go.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.css']
})
export class EditTrainComponent implements OnInit {
  public id_train: any;
  trainForm: FormGroup;
  train: Train[] = [];
  arrival: Arrival[] = [];
  go: Go[] = [];

  constructor(
    private trainService: TrainsService,
    private arrivalService: ArrivalService,
    private goService: GoService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id_train = router.url.split('/')[3];
    // console.log(this.id_train);
    trainService.read(this.id_train).subscribe((data) => {
      console.log(data);
      // this.trainForm.patchValue({
      //   name: data.name,
      //   addressArrival: data.addressArrival,
      //   addressGo: data.addressGo,
      //   thoiGianDi: data.thoiGianDi,
      //   thoiGianVe: data.thoiGianVe,
      // })
      for (const controlName in this.trainForm.controls) {
        if (controlName) {
          this.trainForm.controls[controlName].setValue(data[controlName]);
        }
        console.log(controlName)
      }
    })
    this.trainForm = this.fb.group({
      name: [" ", Validators.required],
      addressArrival: [" ", Validators.required],
      addressGo: [" ", Validators.required],
      thoiGianDi: [" ", Validators.required],
      thoiGianVe: [" ", Validators.required],
    })
  }

  ngOnInit(): void {
    this.arrivalService.getList().subscribe(data => {
      this.arrival = data
      // console.log(this.arrival)
    })
    this.goService.getList().subscribe(data => {
      this.go = data;
      // console.log(this.go);
    })
    this.trainService.getList().subscribe(data => {
      this.train = data
      console.log(this.train)
    })
  }

  edit(): void {
    this.trainService.update(this.id_train, this.trainForm.value).subscribe((data) => {
      // console.log(data)
      this.router.navigate(['admin/train']);
    });
  }


}
