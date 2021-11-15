import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GoService } from 'src/app/pages/service/go.service';
import { Go } from '../../common/addressGo';
import Swal from 'sweetalert2'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditGoComponent implements OnInit {
  public id_go: any;
  goForm: FormGroup;

  constructor(
    private goService: GoService,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id_go = router.url.split('/')[3];
    console.log(this.id_go);
    goService.read(this.id_go).subscribe((data) => {
      // console.log(data)
      this.goForm.setValue({ name: data.name })
    })
    this.goForm = this.fb.group({
      name: ["", Validators.required]
    })
  }

  ngOnInit(): void {

  }

  edit(): void {
    this.goService.update(this.id_go, this.goForm.value).subscribe((data) => {
      // console.log(data);
      this.router.navigate(['admin/address']);
    });
  }
}
