import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  formUser: FormGroup;
  dataDesks: any;
  a: any;
  getDesk: any;
  chooseTrainCar: any;
  train: any;
  trainCar: any;
  typeTrip: any;
  desk: any;
  constructor(
    private fb: FormBuilder,
    private route: Router
  ) {
    this.formUser = fb.group({
      nameUser: new FormControl('', [Validators.required]),
      cmnd: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.chooseTrainCar = JSON.parse(localStorage.getItem('chooseCar') || '{}');
    this.train = JSON.parse(localStorage.getItem('train') || '{}');
    this.typeTrip = JSON.parse(localStorage.getItem('typeTrips') || '{}');
    this.trainCar = JSON.parse(localStorage.getItem('trainCar') || '{}');
    this.desk = JSON.parse(localStorage.getItem("desk")|| '{}')
  }
  async getUser() {
    await localStorage.setItem('user', JSON.stringify(this.formUser.value));
    await this.route.navigate(['/client/pay']);
  }
}
