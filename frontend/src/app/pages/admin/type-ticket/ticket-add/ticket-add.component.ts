import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TrainCarService } from 'src/app/pages/service/train-car.service';
import { TrainCar } from '../../common/trainCar';
import Swal from 'sweetalert2'
import { TypeTicketService } from 'src/app/pages/service/type-ticket.service';


@Component({
  selector: 'app-ticket-add',
  templateUrl: './ticket-add.component.html',
  styleUrls: ['./ticket-add.component.css']
})
export class TicketAddComponent implements OnInit {
  ticketForm: FormGroup;
  trainCar: TrainCar[] = []
  constructor(
    private typeTicketService: TypeTicketService,
    private trainCarService: TrainCarService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.ticketForm = this.fb.group({
      name: ["", Validators.required],
      price: ["", Validators.required],
      trainCar: ["",],
    })
  }

  ngOnInit(): void {
    this.trainCarService.getList().subscribe(data => {
      this.trainCar = data;
      console.log(this.trainCar)
    });
  }

  save() {
    this.typeTicketService.add(this.ticketForm.value).subscribe(data => {
      console.log(data)
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thêm địa điểm thành công!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admin/type-ticket'])
  }

}
