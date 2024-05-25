import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SubjectboxComponent } from '../components/subjectbox/subjectbox.component';
import { FetchdataService } from '../services/fetchdata.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sempage',
  standalone: true,
  imports: [SubjectboxComponent, RouterLink,MatProgressSpinnerModule,CommonModule],
  templateUrl: './sempage.component.html',
  styleUrl: './sempage.component.scss'
})
export class SempageComponent implements OnInit {
  sempage: string = "";
  semdata: any = [];
  route = inject(ActivatedRoute);
  semloded : boolean = false;
  fetchdataservice = inject(FetchdataService)
  ngOnInit(): void {
    this.route.params.pipe().forEach((sem) => {
      this.fetchdataservice.getSemData(sem["sem"]).subscribe((data: any) => {
        if (data.show) {
          this.semdata = data.data;
          this.semloded = true;
          
        }
      })
    })
  }
}
