import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Arrival } from 'src/app/pages/admin/common/addressArrival';
import { Go } from 'src/app/pages/admin/common/addressGo';
import { Train } from 'src/app/pages/admin/common/train';
import { TypeTrip } from 'src/app/pages/admin/common/typeTrip';
import { ArrivalService } from 'src/app/pages/service/arrival.service';
import { GoService } from 'src/app/pages/service/go.service';
import { TrainsService } from 'src/app/pages/service/trains.service';
import { TypeTripService } from 'src/app/pages/service/type-trip.service';


@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  @Output() dataTrain = new EventEmitter<any>()
  arrival: Arrival[] = []
  go: Go[] = []
  typeTrip: TypeTrip[] = []
  train: Train[] = []
  reactiveForm: FormGroup;
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private typeTripService: TypeTripService,
    private arrivalService: ArrivalService,
    private goService: GoService,
    private trainService: TrainsService,
    private router: Router) {
    this.reactiveForm = this.formBuilder.group({
      addressArrival: new FormControl('', [Validators.required]),
      addressGo: new FormControl('', [Validators.required]),
      thoiGianDi: new FormControl('', [Validators.required]),
      thoiGianVe: new FormControl('', [Validators.required]),
      typeTrip: new FormControl('', [Validators.required])
    })
  }
  ReadMore: boolean = true;

  visible: boolean = true;
  clickTwoWay() {
    this.ReadMore = !this.ReadMore

  }

  clickOneWay() {
    // this.ReadMore = !this.ReadMore
    this.visible = this.visible;
    this.ReadMore = !this.ReadMore

  }

  get f() {
    return this.reactiveForm.controls
  }
  onSubmit() {
    console.log(this.reactiveForm.value)
    this.trainService.findTrain(this.reactiveForm.value).subscribe(async data => {
      await localStorage.setItem("data", JSON.stringify(data))
      await this.router.navigate(['/client/train'])
      console.log(data)
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
    this.typeTripService.getList().subscribe(data => {
      this.typeTrip = data
      console.log(this.typeTrip)
    })

  }

}
