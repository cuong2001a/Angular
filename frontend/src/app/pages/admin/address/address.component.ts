import { Component, OnInit } from '@angular/core';
import { Go } from '../common/addressGo';
import { GoService } from '../../service/go.service';
import { Arrival } from '../common/addressArrival';
import { ArrivalService } from '../../service/arrival.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  go: Go[] = [];
  arrival: Arrival[] = [];

  constructor(private goService: GoService, private arrivalService: ArrivalService) { };


  ngOnInit(): void {
    this.goService.getList().subscribe(data => {
      this.go = data
    });
    this.arrivalService.getList().subscribe(data => {
      this.arrival = data
      // console.log(this.arrival)
    })
  };
  deleteGo(id: any) {
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
        this.goService.delete(id).subscribe(() => {
          this.go = this.go.filter(a => a._id !== id)
        })
      }
    })

  };

  deleteArrival(id: any) {
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
        this.arrivalService.delete(id).subscribe(() => {
          this.arrival = this.arrival.filter(a => a._id !== id)
        })
      }
    })
  };
}
