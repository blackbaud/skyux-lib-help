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
  public onClick(event: MouseEvent): boolean {
    event.preventDefault();
    event.stopPropagation();
    this.widgetService.openWidget(this.bbHelpOpenOnClick);
    return false;
  }
}
