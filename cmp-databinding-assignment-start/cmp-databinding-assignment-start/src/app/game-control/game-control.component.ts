import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  // Use "@Output" to make this listenable from outside
  @Output() intervalFired = new EventEmitter<number>(); // Event emitter will hold a number as a value

  // Set Interval
  interval;

  lastNumber = 0;

  onStartGame() {
    // This is an arrow function that gets exectued on each tick
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000); // "setInterval()" is a method supported by native JavaScript
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}
