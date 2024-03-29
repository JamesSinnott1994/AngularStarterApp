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
  OnDestroy,
  ViewChild,
  ContentChild,
  ElementRef
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
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("Constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) { // Only hook that receives an argument
    console.log("ngOnChanges called!");
    console.log(changes); // Will show us our element
  }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log("Text Content: " + this.header.nativeElement.textContent); // Doesn't show
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    // Called whenever Angular checks for any changes
    console.log("ngDoCheck called!");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log("Text Content: " + this.header.nativeElement.textContent); // Shows
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngAfterContentInit() {
    // Called only once
    console.log("ngAfterContentInit called!");
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }

}
