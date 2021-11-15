import { Component, OnInit } from '@angular/core';
import { Desk } from '../common/desk'
import Swal from 'sweetalert2'
import { DeskService } from '../../service/desk.service';

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css']
})
export class DeskComponent implements OnInit {

  desk: Desk[] = []

  constructor(private deskService: DeskService,) { }

  ngOnInit(): void {
    this.deskService.getList().subscribe(data => {
      this.desk = data
      // console.log(this.desk)
    })
  }
  xoa(id: any) {
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: "Nếu xóa sẽ không thể khôi phục lại!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Tệp của bạn đã bị xóa.',
          'success'
        )
        this.deskService.delete(id).subscribe(() => {
          this.desk = this.desk.filter(a => a._id !== id)
        })
      }
    })
  }
}
