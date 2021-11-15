import { Component, OnInit } from '@angular/core';
import { Arrival } from '../common/addressArrival';
import { ArrivalService } from '../../service/arrival.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {

  arrival: Arrival[] = []
  constructor(private arrivalService: ArrivalService) { }

  ngOnInit(): void {
    this.arrivalService.getList().subscribe(data => {
      this.arrival = data
      console.log(this.arrival)
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
        this.arrivalService.delete(id).subscribe(() => {
          this.arrival = this.arrival.filter(a => a._id !== id)
        })
      }
    })
  }

}
