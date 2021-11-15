import { Component, OnInit } from '@angular/core';
import { TypeTripService } from '../../service/type-trip.service';
import { TypeTrip } from '../common/typeTrip';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-type-trip',
  templateUrl: './type-trip.component.html',
  styleUrls: ['./type-trip.component.css']
})
export class TypeTripComponent implements OnInit {
  typeTrip: TypeTrip[] = []

  constructor(private typeTripService: TypeTripService) { }

  ngOnInit(): void {
    this.typeTripService.getList().subscribe(data => {
      this.typeTrip = data
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
        this.typeTripService.delete(id).subscribe(() => {
          this.typeTrip = this.typeTrip.filter(a => a._id !== id)
        })
      }
    })
  }
}
