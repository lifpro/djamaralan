import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTrombiborder]'
})
export class TrombiborderDirective {

  constructor(public element: ElementRef, public renderer: Renderer2) {
    console.log('ElementRef', element);
    this.renderer.setStyle(this.element.nativeElement, 'border', '1px solid #000000');
  }

}
