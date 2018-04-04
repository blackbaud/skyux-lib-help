import { Injectable } from '@angular/core';
import { BBHelpClient } from '@blackbaud/help-client';

@Injectable()
export class HelpWidgetService {
  private _pageDefaultKey: string;

  public disabledCount: number = 0;

  set pageDefaultKey(helpKey: string) {
    this._pageDefaultKey = helpKey;
  }

  get pageDefaultKey(): string {
    return this._pageDefaultKey;
  }

  public increaseDisabledCount(): void {
    this.disabledCount++;
    this.disableWidget();
  }

  public decreaseDisabledCount(): void {
    if (this.disabledCount > 0) {
      this.disabledCount--;
    }

    if (this.disabledCount === 0) {
      this.enableWidget();
    }
  }

  public setPageDefaultKey(defaultKey: string): void {
    this.pageDefaultKey = defaultKey;
    this.setCurrentHelpKey(this.pageDefaultKey);
  }

  public setCurrentHelpKey(helpKey: string): void {
    BBHelpClient.setCurrentHelpKey(helpKey);
  }

  public setHelpKeyToPageDefault(): void {
    BBHelpClient.setCurrentHelpKey(this.pageDefaultKey);
  }

  public openToHelpKey(helpKey: string): void {
    BBHelpClient.openWidgetToHelpKey(helpKey);
  }

  public setHelpKeyToGlobalDefault(): void {
    BBHelpClient.setHelpKeyToDefault();
    this.pageDefaultKey = '';
  }

  public toggleOpen(): void {
    BBHelpClient.toggleOpen();
  }

  public openWidget(): Promise<any> {
    return this.executeWhenClientReady(() => {
      BBHelpClient.openWidget();
    });
  }

  public closeWidget(): Promise<any> {
    return this.executeWhenClientReady(() => {
      BBHelpClient.closeWidget();
    });
  }

  public disableWidget(): Promise<any> {
    return BBHelpClient.disableWidget();
  }

  public enableWidget(): Promise<any> {
    return BBHelpClient.enableWidget();
  }

  private executeWhenClientReady(callBack: any): Promise<any> {
    return BBHelpClient.ready()
      .then(() => {
        return callBack();
      })
      .catch((error: string) => {
        return error;
      });
  }
}
