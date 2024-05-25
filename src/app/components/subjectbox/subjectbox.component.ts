import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-subjectbox',
  standalone: true,
  imports: [],
  templateUrl: './subjectbox.component.html',
  styleUrl: './subjectbox.component.scss'
})
export class SubjectboxComponent {
  @Input() subjectname : string = "";
  

}
