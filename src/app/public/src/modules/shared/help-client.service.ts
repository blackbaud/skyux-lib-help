import { Injectable } from '@angular/core';
import { BBHelp } from '@blackbaud/help-client';

import { BBHelpConfigService } from './config.service';

@Injectable()
export class BBHelpClientService {
  private defaultHelpKey: string;

  constructor(public configService: BBHelpConfigService) {
    this.defaultHelpKey = this.configService.skyux.help.defaultHelpKey;
  }

  public setHelpKey(helpKey: string): void {
    BBHelp.setCurrentHelpKey(helpKey);
  }

  public openWidget(helpKey: any): void {
    BBHelp.openWidget(helpKey);
  }

  public resetHelpKey(): void {
    this.setHelpKey(this.defaultHelpKey);
  }
}
