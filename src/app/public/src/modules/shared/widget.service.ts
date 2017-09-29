import { Injectable } from '@angular/core';
import { BBHelpClient } from '@blackbaud/help-client';

@Injectable()
export class HelpWidgetService {
  private currentHelpKey: string = '';

  public setCurrentHelpKey(helpKey: string): void {
    BBHelpClient.setCurrentHelpKey(helpKey);
    this.currentHelpKey = helpKey;
  }

  public setTemporaryHelpKey(helpKey: string): void {
    BBHelpClient.setCurrentHelpKey(helpKey);
  }

  public removeTemporaryHelpKey(): void {
    BBHelpClient.setCurrentHelpKey(this.currentHelpKey);
  }

  public openToHelpKey(helpKey: string): void {
    BBHelpClient.openWidgetToHelpKey(helpKey);
  }

  public setHelpKeyToDefault(): void {
    BBHelpClient.setHelpKeyToDefault();
    this.currentHelpKey = '';
  }
}
