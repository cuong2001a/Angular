import { Component, OnInit } from '@angular/core';
import { TypeTicketService } from '../../service/type-ticket.service';
import { TypeTicket } from '../common/typeTicket';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-type-ticket',
  templateUrl: './type-ticket.component.html',
  styleUrls: ['./type-ticket.component.css']
})
export class TypeTicketComponent implements OnInit {
  ticket: TypeTicket[] = [];

  constructor(private ticketService: TypeTicketService) { }

  ngOnInit(): void {
    this.ticketService.getList().subscribe(data => {
      this.ticket = data
      console.log(this.ticket)
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
        this.ticketService.delete(id).subscribe(data => {
          this.ticket = this.ticket.filter(a => a._id !== id)
        })
      }
    })
  }

}
