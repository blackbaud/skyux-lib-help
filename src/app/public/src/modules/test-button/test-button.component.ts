import { Component, Input } from '@angular/core';

import { BBHelpClientService } from '../shared';

@Component({
  selector: 'bb-help-button',
  templateUrl: './test-button.component.html'
})
export class TestButtonComponent {
  @Input()
  public helpKey: string;

  constructor(private helpService: BBHelpClientService) { }

  public openWidgetToHelpKey(): void {
    this.helpService.openWidgetToHelpKey(this.helpKey);
  }
}
