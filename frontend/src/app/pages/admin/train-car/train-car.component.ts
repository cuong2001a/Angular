import { Component, OnInit } from '@angular/core';
import { TrainCarService } from '../../service/train-car.service';
import { TrainCar } from '../common/trainCar';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-train-car',
  templateUrl: './train-car.component.html',
  styleUrls: ['./train-car.component.css']
})
export class TrainCarComponent implements OnInit {
  results: TrainCar[] = [];
  constructor(private trainCarService: TrainCarService) { }

  ngOnInit(): void {
    this.trainCarService.getList().subscribe(data => {
      this.results = data
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
        this.trainCarService.delete(id).subscribe(() => {
          this.results = this.results.filter(a => a._id !== id)
        })
      }
    })
  }

}
