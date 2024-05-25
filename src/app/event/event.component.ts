import { Component, inject, OnInit } from '@angular/core';
import { FetchdataService } from '../services/fetchdata.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [MatProgressSpinnerModule,CommonModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit {
  eventdata :any = [];
  isloded:boolean = false;
  fetchservice = inject(FetchdataService)
  ngOnInit(): void {
    this.fetchservice.getEventData().subscribe((data:any)=>{
      if(data.show){
        this.eventdata = data.data;
        this.isloded = true;
      }
    })
  }
}
