import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

import { HelpWidgetService } from '../shared';

@Directive({
  selector: '[bbHelpOpenOnClick]'
})
export class BBHelpOpenOnClickDirective {
  @Input()
  private bbHelpOpenOnClick: string;

  constructor (
    private widgetService: HelpWidgetService,
    private elementRef: ElementRef,
    private renderer: Renderer2) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click', ['$event'])
  @HostListener('keydown', ['$event'])
  public onClick(event: any): boolean {
    let keyPressed = (event.code) ? event.code.toLowerCase() : false;

    if (keyPressed === false || keyPressed === 'enter' || keyPressed === 'space') {
      this.widgetService.openWidget(this.bbHelpOpenOnClick);
      return false;
    }

    return true;
  }
}
