import { Component } from '@angular/core';
import { HelpWidgetService } from '@blackbaud/skyux-lib-help';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'toggle-widget',
  templateUrl: './toggle-widget.component.html',
})
export class ToggleWidgetComponent {
  constructor(private widgetService: HelpWidgetService) {}

  public toggleWidget(): void {
    this.widgetService.toggleOpen();
  }
}
