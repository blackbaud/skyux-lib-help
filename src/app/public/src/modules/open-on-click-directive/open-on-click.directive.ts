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
  public onFocusEvent(event: any): boolean {
    let openWidget = (event.type === 'click');
    // Enter key or click events trigger the widget.
    if (event.key && event.key.toLowerCase() === 'enter') {
      openWidget = true;
    }

    if (openWidget) {
      this.openWidget();
      return false;
    }
    return true;
  }

  private openWidget(): void {
    this.widgetService.openWidget(this.bbHelpOpenOnClick);
  }
}
