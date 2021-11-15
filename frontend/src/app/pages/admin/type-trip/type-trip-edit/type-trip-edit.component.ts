import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeTripService } from 'src/app/pages/service/type-trip.service';

@Component({
  selector: 'app-type-trip-edit',
  templateUrl: './type-trip-edit.component.html',
  styleUrls: ['./type-trip-edit.component.css']
})
export class TypeTripEditComponent implements OnInit {
  public id_typeTrip: any;
  typeTripForm: FormGroup;

  constructor(
    private typeTripService: TypeTripService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id_typeTrip = router.url.split('/')[3];
    console.log(this.id_typeTrip);
    typeTripService.read(this.id_typeTrip).subscribe((data) => {
      // console.log(data)
      this.typeTripForm.setValue({ name: data.name })
    })
    this.typeTripForm = this.fb.group({
      name: ["", Validators.required]
    })
  }

  ngOnInit(): void {

  }

  edit(): void {
    this.typeTripService.update(this.id_typeTrip, this.typeTripForm.value).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['admin/type-trip']);
    });
  }

}
