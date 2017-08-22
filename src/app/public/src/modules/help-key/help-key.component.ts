import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { BBHelpConfigService, BBHelpClientService} from '../shared';
@Component({
  selector: 'bb-help-key',
  templateUrl: './help-key.component.html'
})
export class HelpKeyComponent implements OnInit, OnDestroy {

  @Input()
  public helpKey: string;

  private defaultHelpKey: string;

  constructor(
    public configService: BBHelpConfigService,
    private helpService: BBHelpClientService) { }

  public ngOnInit() {
    this.helpService.setHelpKey(this.helpKey);
    this.defaultHelpKey = this.configService.skyux.help.defaultHelpKey;
  }

  public ngOnDestroy() {
    this.helpService.setHelpKey(this.defaultHelpKey);
  }

  public openWidget(): void {
    this.helpService.openWidget();
  }
}
