import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InfoTicketService } from 'src/app/pages/service/info-ticket.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formSearch :FormGroup
  @Output() data = new EventEmitter()
  constructor(private fb: FormBuilder,
              private ticketService: InfoTicketService) {
          this.formSearch = this.fb.group({
            code: new FormControl('',[Validators.required]),
            email: new FormControl('',[Validators.required])
          })
          }

  ngOnInit(): void {
  }
  result(){
    this.ticketService.searchInfo(this.formSearch.value).subscribe(a=>{
      this.data.emit(a)
      console.log(a)
    })
  }
}
