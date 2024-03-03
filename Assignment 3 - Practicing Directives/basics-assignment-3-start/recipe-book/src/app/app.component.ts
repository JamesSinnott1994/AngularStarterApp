import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayParagraph: boolean = true;
  timestamps = [];

  changeDisplay() {
    this.displayParagraph = !this.displayParagraph;
    this.timestamps.push(new Date());

  }

}
