import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Train } from 'src/app/pages/admin/common/train';
import { InfoTicketService } from 'src/app/pages/service/info-ticket.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  formTicket: FormGroup
  code: any
  desk: any
  user: any
  train!: Train
  info: any
  trainCar: any
  constructor(private fb: FormBuilder,
    private infoService: InfoTicketService,
    private route :Router) {

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

    console.log(this.desk);
    console.log(this.user);
    console.log(this.train);

    this.formTicket.setValue({
      train: this.train._id,
      trainCar: this.trainCar._id,
      desk: this.desk._id,
      nameUser: this.user.nameUser,
      cmnd: this.user.cmnd,
      phoneNumber: this.user.phoneNumber,
      email: this.user.email,
      people: 1,
      code: this.code
    });
    console.log(this.formTicket.value);
  }

  ngOnInit(): void {
    // this.getInfo();
    // this.makeid();
    // console.log(this.formTicket);
  }

  getInfo() {
    this.desk = JSON.parse(localStorage.getItem("desk") || '{}')
    this.user = JSON.parse(localStorage.getItem("user") || '{}')
    this.train = JSON.parse(localStorage.getItem("train") || '{}')
    this.trainCar = JSON.parse(localStorage.getItem('trainCar')||'{}')
  }


  addInfo() {
    this.infoService.add(this.formTicket.value).subscribe( async data=>{
      console.log("okkkk", data)
      await localStorage.clear();
      await  localStorage.setItem("info", JSON.stringify(data));
      await this.route.navigate(['/client/success',])
    })
  }

  makeid() {
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < 5; i++) {
      this.code += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }
    // console.log(this.code)
    return this.code
  }

}
