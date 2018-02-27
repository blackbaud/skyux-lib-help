import { Directive, OnInit, OnDestroy } from '@angular/core';

import { HelpWidgetService } from '../shared';

@Directive({
  selector: '[disableWidget]'
})
export class BBHelpDisableWidgetDirective implements OnInit, OnDestroy {
constructor(
  private widgetService: HelpWidgetService) { }

  public ngOnInit() {
      this.widgetService.increaseDisabledCount();
  }

  public ngOnDestroy() {
      this.widgetService.decreaseDisabledCount();
  }
}
