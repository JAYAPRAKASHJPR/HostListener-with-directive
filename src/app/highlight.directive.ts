import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(public emntRef: ElementRef) {
    console.log(emntRef);
  }
  @HostListener('mouseenter') moseenter() {
    this.emntRef.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') moseleave() {
    this.emntRef.nativeElement.style.color = 'Green';
  }
}
