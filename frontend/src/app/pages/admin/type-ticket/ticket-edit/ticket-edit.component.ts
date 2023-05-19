import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { TrainCar } from '../../common/trainCar';
import { InfoTicketService } from 'src/app/pages/service/info-ticket.service';
import { TypeTripService } from 'src/app/pages/service/type-trip.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.css'],
})
export class TicketEditComponent implements OnInit {
  public id_ticket: any;

  ticketForm: FormGroup;
  trainCar: TrainCar[] = [];
  dataInfoTicket: any;
  typeTrip: any;
  constructor(
    private ticketService: InfoTicketService,
    private trainCarService: TrainCarService,
    private typeTripService: TypeTripService,
    private fb: FormBuilder,
    public router: Router
  ) {
    this.ticketForm = this.fb.group({
      nameUser: ['', Validators.required],
      cmnd: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      typeTrip: ['', Validators.required],
      payment: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id_ticket = this.router.url.split('/')[3];
    this.ticketService.getDetail(this.id_ticket).subscribe((data) => {
      this.dataInfoTicket = data;
      this.ticketForm.patchValue({
        nameUser: data?.nameUser,
        cmnd: data?.cmnd,
        email: data?.email,
        phoneNumber: data?.phoneNumber,
        typeTrip: data?.typeTrip?._id,
        payment: data?.payment,
      });
    });
    this.typeTripService.getList().subscribe((data) => {
      this.typeTrip = data;
    });
  }

  edit(): void {
    let newData = {
      ...this.dataInfoTicket,
      ...this.ticketForm.value,
      payment: 'DIRECT',
    };
    delete newData?.code;
    this.ticketService.update(this.id_ticket, newData).subscribe(
      async (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cập nhật thành công',
          showConfirmButton: false,
          timer: 1500,
        });
        await this.router.navigate(['/admin/type-ticket']);
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
}
