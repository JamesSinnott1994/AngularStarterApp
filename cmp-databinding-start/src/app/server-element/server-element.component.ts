import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent {

  // Represents our server
  @Input() element: {type: string, name: string, content: string}; // JavaScript object

}
