import { Component, Input, OnInit } from '@angular/core';

import { BBHelpConfigService, BBHelpClientService} from '../shared';
@Component({
  selector: 'bb-help-key',
  templateUrl: './help-key.component.html'
})
export class HelpKeyComponent implements OnInit {

  @Input()
  public helpKey: string;

  constructor(
    public configService: BBHelpConfigService,
    private helpService: BBHelpClientService) { }

  public ngOnInit() {
    this.helpService.setHelpKey(this.helpKey);
  }

  public openWidget(): void {
    this.helpService.openWidget();
  }
}
