import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[appTextoverflow]'
})
export class TextoverflowDirective implements AfterViewInit {
  private el: ElementRef;
  @Input('appTextoverflow') tooltipElem: MatTooltip;
  @Input() titleOverflow;
  constructor(el: ElementRef) {
    this.el = el;
  }

  ngAfterViewInit(): void {
    this.checkOverflow();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.checkOverflow();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private checkOverflow() {
    if (this.titleOverflow) {
      this.showTooltip();
      return;
    }
    if (this.el.nativeElement.scrollWidth > this.el.nativeElement.offsetWidth) {
      this.titleOverflow = true;
      this.showTooltip();
      this.addEllipses();
    } else {
      this.hideTooltip();
    }
  }

  private addEllipses() {
    this.el.nativeElement.children[0].lastChild.classList = 'ellipses';
  }

  private showTooltip() {
    this.tooltipElem.tooltipClass  = 'display-block';
  }

  private hideTooltip() {
    this.tooltipElem.tooltipClass  = 'display-none';
  }

}
