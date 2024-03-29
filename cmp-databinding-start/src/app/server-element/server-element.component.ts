import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  // Good practice to "implement" hook interfaces
  // Not needed but makes things more explicit

  // Represents our server
  @Input('srvElement') element: {type: string, name: string, content: string}; // JavaScript object
  @Input() name: string;

  constructor() {
    console.log("Constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) { // Only hook that receives an argument
    console.log("ngOnChanges called!");
    console.log(changes); // Will show us our element
  }

  ngOnInit() {
    console.log("ngOnInit called!");
  }

  ngDoCheck() {
    // Called whenever Angular checks for any changes
    console.log("ngDoCheck called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngAfterContentInit() {
    // Called only once
    console.log("ngAfterContentInit called!");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
