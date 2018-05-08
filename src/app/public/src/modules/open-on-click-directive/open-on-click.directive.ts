import { Directive, HostListener, Input, Renderer2, ElementRef } from '@angular/core';

import { HelpWidgetService } from '../shared';

@Directive({
  selector: '[bbHelpOpenOnClick]'
})
export class BBHelpOpenOnClickDirective {
  @Input()
  public bbHelpOpenOnClick: string;

  constructor (
    private widgetService: HelpWidgetService,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    this.openWidget();
    event.preventDefault();
  }

  @HostListener('keydown', ['$event'])
  public onKeydown(event: KeyboardEvent): void {
    if (event.key.toLocaleLowerCase() === 'enter') {
      this.openWidget();
      event.preventDefault();
    }
  }

  private openWidget(): void {
    this.widgetService.openWidget(this.bbHelpOpenOnClick);
  }
}
