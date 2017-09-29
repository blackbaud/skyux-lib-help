import { Component, Input, OnDestroy } from '@angular/core';

import { HelpWidgetService } from '../shared';
@Component({
  selector: 'bb-help-key',
  template: ''
})
export class HelpKeyComponent implements OnDestroy {
  private _helpKey: string = '';

  @Input()
  public isTemporary: boolean = false;

  @Input()
  set helpKey (helpKey: string) {
    this._helpKey = helpKey;

    if (this.isTemporary) {
      this.widgetService.setTemporaryHelpKey(this.helpKey);
      return;
    }

    this.widgetService.setCurrentHelpKey(this.helpKey);
  }

  get helpKey(): string {
    return this._helpKey;
  }

  constructor(private widgetService: HelpWidgetService) { }

  public ngOnDestroy() {
    if (this.isTemporary) {
      this.widgetService.removeTemporaryHelpKey();
      return;
    }
    this.widgetService.setHelpKeyToDefault();
  }
}
