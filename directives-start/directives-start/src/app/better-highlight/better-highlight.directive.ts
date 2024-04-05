import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // Binded to a property
  // Pass a string to define to which property of the hosting element we want to bind
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent"; // Our property

  // "Renderer" is the tool we will use
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue"); // Allows us to set the style of some element
  }

  // @HostListener is a convenient way of listening to events on the element
  @HostListener("mouseenter") mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = "blue";
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");
    this.backgroundColor = "transparent";
  }

}
