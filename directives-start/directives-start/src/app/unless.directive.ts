import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // Execute a "setter" method below whenever this changes
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef); // Creates a view in the ViewContainer
    } else {
      this.vcRef.clear();
    }
  }; // This is still a property

  // Template is the "what", Container is the "Where" we place this directive in document
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { 

  }

}
