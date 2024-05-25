import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-semdiv',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './semdiv.component.html',
  styleUrl: './semdiv.component.scss'
})
export class  SemdivComponent implements OnInit{
  @Input() sem : string = ""
  routesem : string = ""
  ngOnInit(): void {
    this.routesem = this.sem.replace("Sem ","sem")
      
  }
}
