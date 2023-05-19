import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Train } from 'src/app/pages/admin/common/train';
import { DeskService } from 'src/app/pages/service/desk.service';
import { InfoTicketService } from 'src/app/pages/service/info-ticket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css'],
})
export class PayComponent implements OnInit {
  formTicket: FormGroup;
  code: any;
  desk: any;
  user: any;
  train!: Train;
  info: any;
  trainCar: any;
  chooseCar: any;
  typeTrip: any;
  payment: any;
  constructor(
    private fb: FormBuilder,
    private infoService: InfoTicketService,
    private deskService: DeskService,
    private route: Router
  ) {
    this.getInfo();
    this.makeid();
    this.formTicket = fb.group({
      train: new FormControl('', [Validators.required]),
      trainCar: new FormControl('', [Validators.required]),
      desk: new FormControl('', [Validators.required]),
      nameUser: new FormControl('', [Validators.required]),
      cmnd: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      people: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required]),
    });

    this.formTicket.setValue({
      train: this.train._id,
      trainCar: this.trainCar._id,
      desk: this.desk._id,
      nameUser: this.user.nameUser,
      cmnd: this.user.cmnd,
      phoneNumber: this.user.phoneNumber,
      email: this.user.email,
      people: 1,
      code: this.code,
    });
  }

  ngOnInit(): void {}

  getInfo() {
    this.desk = JSON.parse(localStorage.getItem('desk') || '{}');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.train = JSON.parse(localStorage.getItem('train') || '{}');
    this.trainCar = JSON.parse(localStorage.getItem('trainCar') || '{}');
    this.chooseCar = JSON.parse(localStorage.getItem('chooseCar') || '{}');
    this.typeTrip = JSON.parse(localStorage.getItem('typeTrips') || '{}');
  }

  addInfo() {
    const dataValue = {
      ...this.formTicket.value,
      price: this.chooseCar?.priceTrainCar,
      typeTrip: this.typeTrip?._id,
      payment: this.payment,
    };
    this.infoService.add(dataValue).subscribe(
      async (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tạo thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        await localStorage.clear();
        await localStorage.setItem('info', JSON.stringify(data));
        await this.route.navigate(['/client/success']);
        await this.deskService
          .update(this.desk._id, this.desk)
          .subscribe((data) => {});
      },
      (error) => {
        const { errors } = error.error;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Tạo thất bại',
          text: `${errors}`,
        });
      }
    );
  }

  makeid() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    var text = '';
    for (var i = 0; i < 5; i++) {
      text += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('text :', text);
    this.code = text;
  }
}
