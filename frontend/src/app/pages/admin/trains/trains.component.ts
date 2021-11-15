import { Component, OnInit } from '@angular/core';
import { TrainsService } from '../../service/trains.service';
import { Train } from '../common/train';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  train: Train[] = [];
  constructor(private trainService: TrainsService,) { }

  ngOnInit(): void {
    this.trainService.getList().subscribe(data => {
      this.train = data
      console.log(this.train)
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Tệp của bạn đã bị xóa.',
          'success'
        )
        this.trainService.deleteList(id).subscribe(data => {
          this.train = this.train.filter(a => a._id !== id)
        })
      }
    })
  }
}
