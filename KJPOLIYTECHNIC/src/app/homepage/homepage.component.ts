import { Component } from '@angular/core';
import { SemdivComponent } from '../components/semdiv/semdiv.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [SemdivComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
