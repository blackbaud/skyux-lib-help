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
    private renderer: Renderer2
  ) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click', ['$event'])
  @HostListener('keydown', ['$event'])
  public onFocusEvent(event: MouseEvent | KeyboardEvent): boolean {
    let openWidget = (event.type === 'click');

    if (event instanceof KeyboardEvent) {
      openWidget = (event.key.toLocaleLowerCase() === 'enter');
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
