import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {

  // Passed from outside using @Input
  @Input() number: number;

}
