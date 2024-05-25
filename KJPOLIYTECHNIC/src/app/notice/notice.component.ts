import { Component, inject } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-notice',
  standalone: true,
  imports: [MatProgressSpinnerModule,CommonModule],
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {
  noticedata :any = [];
  isloded : boolean = false;
  fetchservice = inject(FetchdataService)
  ngOnInit(): void {
    this.fetchservice.getNoticeData().subscribe((data:any)=>{
      if(data.show){
        this.noticedata = data.data;
        this.isloded = true
        
      }
    })
  }
}
