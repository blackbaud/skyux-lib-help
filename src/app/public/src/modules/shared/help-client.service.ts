import { Injectable } from '@angular/core';
import { BBHelp } from '@blackbaud/help-client';

@Injectable()
export class BBHelpClientService {

  public setCurrentHelpKey(helpKey: string): void {
    BBHelp.setCurrentHelpKey(helpKey);
  }

  public openWidgetToHelpKey(helpKey: string): void {
    BBHelp.openWidgetToHelpKey(helpKey);
  }

  public resetCurrentHelpKeyToDefault(): void {
    BBHelp.resetCurrentHelpKeyToDefault();
  }
}
