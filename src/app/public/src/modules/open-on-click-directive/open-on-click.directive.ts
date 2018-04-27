import { Directive, HostListener, Input } from '@angular/core';

import { HelpWidgetService } from '../shared';

@Directive({
  selector: '[bbHelpOpenOnClick]'
})
export class BBHelpOpenOnClickDirective {
  @Input()
  private bbHelpOpenOnClick: string;

  constructor (private widgetService: HelpWidgetService) { }

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): boolean {
    event.preventDefault();
    event.stopPropagation();
    this.widgetService.openWidget(this.bbHelpOpenOnClick);
    return false;
  }
}
