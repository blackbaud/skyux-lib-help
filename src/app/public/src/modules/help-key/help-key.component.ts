import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { BBHelpClientService } from '../shared';
@Component({
  selector: 'bb-help-key',
  template: ''
})
export class HelpKeyComponent implements OnInit, OnDestroy {
  @Input()
  public helpKey: string;

  constructor(private helpService: BBHelpClientService) { }

  public ngOnInit() {
    this.helpService.setCurrentHelpKey(this.helpKey);
  }

  public ngOnDestroy() {
    this.helpService.setHelpKeyToDefault();
  }
}
