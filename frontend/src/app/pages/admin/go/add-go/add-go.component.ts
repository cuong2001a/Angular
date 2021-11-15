import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoService } from 'src/app/pages/service/go.service';
import { Go } from '../../common/addressGo';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { uniqueGoName } from 'src/custom_validate/validate.validator';


@Component({
  selector: 'app-add-go',
  templateUrl: './add-go.component.html',
  styleUrls: ['./add-go.component.css']
})
export class AddGoComponent implements OnInit {
  goForm: FormGroup
  go: Go[] = []
  constructor(
    private goService: GoService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.goForm = this.fb.group({
      name: ["", Validators.required, uniqueGoName(this.goService)]
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.goForm.controls
  }

  save() {
    this.goService.add(this.goForm.value).subscribe(data => {
      console.log(data)
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thêm địa điểm thành công!',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(['/admin/address'])
  }
}