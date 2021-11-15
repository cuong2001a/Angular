import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ArrivalService } from 'src/app/pages/service/arrival.service';
import { GoService } from 'src/app/pages/service/go.service';
import { TrainsService } from 'src/app/pages/service/trains.service';
import { TypeTicketService } from 'src/app/pages/service/type-ticket.service';
import { TypeTripService } from 'src/app/pages/service/type-trip.service';
import { Arrival } from '../../common/addressArrival';
import { Go } from '../../common/addressGo';
import { Train } from '../../common/train';
import { TypeTicket } from '../../common/typeTicket';
import { TypeTrip } from '../../common/typeTrip';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { uniqueTrainName } from 'src/custom_validate/validate.validator';


@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {
  trainForm: FormGroup;
  arrival: Arrival[] = []
  go: Go[] = []
  // typeTicket: TypeTicket[] = []
  // typeTrip: TypeTrip[] = []
  constructor(private arrivalService: ArrivalService,
    private goService: GoService,
    private typeTicketService: TypeTicketService,
    private typeTripService: TypeTripService,
    private trainService: TrainsService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.trainForm = this.fb.group({
      name: ["", Validators.required, uniqueTrainName(this.trainService)],
      addressArrival: ["", Validators.required],
      addressGo: ["", Validators.required],
      thoiGianDi: ["", Validators.required],
      thoiGianVe: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    this.arrivalService.getList().subscribe(data => {
      this.arrival = data
      console.log(this.arrival)
    })
    this.goService.getList().subscribe(data => {
      this.go = data
      console.log(this.go)
    })
    // this.typeTicketService.getList().subscribe(data => {
    //   this.typeTicket = data
    //   console.log(this.typeTicket)
    // })
    // this.typeTripService.getList().subscribe(data => {
    //   this.typeTrip = data
    //   console.log(this.typeTrip)
    // })
  }
  get f() {
    return this.trainForm.controls
  }
  save() {
    this.trainService.addList(this.trainForm.value).subscribe(data => {
      console.log(data)
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thêm địa điểm thành công!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admin/train'])
    // console.log(this.trainForm)
  }
}
