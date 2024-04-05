import { Directive, ElementRef, OnInit } from '@angular/core'

// Need to pass on object to this decorator to configure the Directive
// "appBasicHighlight" will be recognized withouth square brackets when added to an element.
@Directive({
    selector: '[appBasicHighlight]'
}) // To make it a Directive
export class BasicHighlightDirective implements OnInit {

    // We can inject the element the directive sits on into this directive

    // We list the arguments we want to get whenever an instance of this class is created
    constructor(private elementRef: ElementRef) {}

    ngOnInit() {
        // Overrides style of the element
        this.elementRef.nativeElement.style.backgroundColor = "green";
    }

}