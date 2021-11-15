import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { ArrivalService } from 'src/app/pages/service/arrival.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public id_arrival: any;
  arrivalForm: FormGroup;

  constructor(
    private arrivalService: ArrivalService,
    private fb: FormBuilder,
    private router: Router,
    private activateRouterService: ActivatedRoute
  ) {
    this.id_arrival = router.url.split('/')[3];
    console.log(this.id_arrival);
    arrivalService.read(this.id_arrival).subscribe((data) => {
      console.log(data)
      this.arrivalForm.setValue({ name: data.name })
    })
    this.arrivalForm = this.fb.group({
      name: ["", Validators.required]
    })
  }

  ngOnInit(): void {

  }

  edit(): void {
    this.arrivalService.update(this.id_arrival, this.arrivalForm.value).subscribe((data) => {
      // console.log(data)
    });
    Swal.fire({
      position: 'top-start',
      icon: 'success',
      title: 'Thêm thành công',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['admin/address']);
  }

}
