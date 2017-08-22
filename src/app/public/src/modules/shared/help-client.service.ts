import { BBHelp } from '@blackbaud/help-client';
import { Injectable } from '@angular/core';

@Injectable()
export class BBHelpClientService {
  public setHelpKey(helpKey: string): void {
    BBHelp.setCurrentHelpKey(helpKey);
  }

  public openWidget(): void {
    console.log(11);
    BBHelp.openWidget();
  }
}
