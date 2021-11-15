import { Component, OnInit } from '@angular/core';
import { Go } from '../common/addressGo';
import { GoService } from '../../service/go.service';
@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.css']
})
export class GoComponent implements OnInit {
  go : Go[] =[]
  constructor(private goService: GoService) { }

  ngOnInit(): void {
    this.goService.getList().subscribe(data=>{
      this.go =data
    })
  }
  xoa(id: any){
    this.goService.delete(id).subscribe(()=>{
      this.go = this.go.filter(a=>a._id!==id)
    })
  }
}
