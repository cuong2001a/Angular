import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArrivalService } from 'src/app/pages/service/arrival.service';
import { Arrival } from '../../common/addressArrival';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { uniqueArrivalName } from 'src/custom_validate/validate.validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  arrivalForm: FormGroup
  arrival: Arrival[] = []
  constructor(
    private arrivalService: ArrivalService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.arrivalForm = this.fb.group({
      name: ["", Validators.required, uniqueArrivalName(this.arrivalService)]
    })
  }

  ngOnInit(): void {
  }
  get f() {
    return this.arrivalForm.controls
  }

  save() {
    this.arrivalService.add(this.arrivalForm.value).subscribe(data => {
      // console.log(data)
    })
    Swal.fire({
      position: 'top-start',
      icon: 'success',
      title: 'Thêm thành công',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admin/address'])
  }

}
