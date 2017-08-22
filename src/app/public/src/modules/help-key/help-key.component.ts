import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { BBHelpClientService } from '../shared';
@Component({
  selector: 'bb-help-key',
  template: ''
})
export class HelpKeyComponent implements OnInit, OnDestroy {
  @Input()
  private helpKey: string;

  constructor(private helpService: BBHelpClientService) { }

  public ngOnInit() {
    this.helpService.setHelpKey(this.helpKey);
  }

  public ngOnDestroy() {
    this.helpService.resetHelpKey();
  }
}
