import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  formUser: FormGroup
  constructor(private fb: FormBuilder,
              private route : Router) {
    this.formUser = fb.group({
      nameUser: new FormControl('',[Validators.required]),
      cmnd: new FormControl('',[Validators.required]),
      phoneNumber: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
    })
   }

  ngOnInit(): void {
  }
  async getUser(){
    await localStorage.setItem("user",JSON.stringify(this.formUser.value))
    await this.route.navigate(['/client/pay'])
  }
}
