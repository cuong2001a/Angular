import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { InfoTicketService } from '../../service/info-ticket.service';
import { TypeTicketService } from '../../service/type-ticket.service';
import { InfoTicket } from "../common/infoTicket";

@Component({
  selector: 'app-type-ticket',
  templateUrl: './type-ticket.component.html',
  styleUrls: ['./type-ticket.component.css'],
})
export class TypeTicketComponent implements OnInit {
  ticket: any;
  isShowModal: boolean = false;
  detailTicket: any;
  constructor(private ticketService: InfoTicketService) {}

  ngOnInit(): void {
    this.getListData();
  }

  getListData() {
    this.ticketService.getList().subscribe((data) => {
      this.ticket = data;
    });
  }

  getDetailData(id: InfoTicket) {
    this.ticketService.getDetail(id).subscribe((data)=> {
      this.detailTicket = data;
    })
  }

  xoa(id: any) {
    Swal.fire({
      title: 'Bạn có chắc chắn?',
      text: 'Nếu xóa sẽ không thể khôi phục lại!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Tệp của bạn đã bị xóa.', 'success');
        this.ticketService.delete(id).subscribe((data) => {
          this.ticket = this.ticket.filter((a: { _id: any }) => a._id !== id);
        });
      }
    });
  }

  capnhat(id: any) {
    let newData = {
      ...this.ticket,
      status: true,
    };
    delete newData?.code;
    Swal.fire({
      title: 'Bạn có chắc muốn cập nhật trạng thái thanh toán ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Đồng ý!',
      cancelButtonText: 'Hủy',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Updated!', 'Vé tàu đã cập nhật thành công.', 'success');
        this.ticketService.update(id, newData).subscribe((data) => {
          this.getListData();
        });
      }
    });
  }

  chitiet(id: any) {
    this.isShowModal = true;
    this.getDetailData(id);
  }

  dongChiTiet(){
    this.isShowModal = false;
  }
}
