import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = []; // An array of odd numbers
  evenNumbers: number[] = []; // An array of even numbers

  onIntervalFired(firedNumber: number) {
    if (firedNumber % 2 == 0) {
      this.evenNumbers.push(firedNumber);
    } else {
      this.oddNumbers.push(firedNumber);
    }
  }

}
