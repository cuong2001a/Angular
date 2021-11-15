import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { TrainsService } from 'src/app/pages/service/trains.service';
import { TypeTicketService } from 'src/app/pages/service/type-ticket.service';
import { Train } from '../../common/train';
import { TrainCar } from '../../common/trainCar';
import { TypeTicket } from '../../common/typeTicket';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css']
})
export class TicketEditComponent implements OnInit {
  public id_ticket: any;
  ticketForm: FormGroup;
  trainCar: TrainCar[] = [];
  typeTicket: TypeTicket[] = [];

  constructor(
    private ticketService: TypeTicketService,
    private trainCarService: TrainCarService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id_ticket = router.url.split('/')[3];
    // console.log(this.id_ticket);
    ticketService.read(this.id_ticket).subscribe((data) => {
      console.log(data)
      this.ticketForm.patchValue({
        name: data.name,
        price: data.price,
        trainCar: data.trainCar,
      })
      // for (const controlName in this.ticketForm.controls) {
      //   if (controlName) {
      //     this.ticketForm.controls[controlName].setValue(data[controlName]);
      //   }
      //   console.log(controlName)
      // }
    })
    this.ticketForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      trainCar: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.trainCarService.getList().subscribe(data => {
      this.trainCar = data;
      console.log(this.trainCar)
    });
    this.ticketService.getList().subscribe(data => {
      this.typeTicket = data;
      // console.log(this.typeTicket)
    });
  }

  edit(): void {
    this.ticketService.update(this.id_ticket, this.ticketForm.value).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['admin/type-ticket']);
    });
  }
}
