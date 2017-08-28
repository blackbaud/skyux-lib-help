import { Injectable } from '@angular/core';
import { BBHelpClient } from '@blackbaud/help-client';

@Injectable()
export class BBHelpClientService {

  public setCurrentHelpKey(helpKey: string): void {
    BBHelpClient.setCurrentHelpKey(helpKey);
  }

  public openWidgetToHelpKey(helpKey: string): void {
    BBHelpClient.openWidgetToHelpKey(helpKey);
  }

  public setHelpKeyToDefault(): void {
    BBHelpClient.setHelpKeyToDefault();
  }
}
