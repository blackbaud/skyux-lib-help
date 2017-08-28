import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { BBHelp } from '@blackbaud/help-client';

import { BBHelpClientService } from './help-client.service';

describe('BBHelpClientService', () => {
  let dataService = new BBHelpClientService();

  it('should call the helpClient\'s setCurrentHelpKey and pass the helpKey to it', () => {
    let helpKey = 'test-key.html';
    let spyHelp = spyOn(BBHelp, 'setCurrentHelpKey').and.callFake(() => {});
    dataService.setCurrentHelpKey(helpKey);
    expect(spyHelp).toHaveBeenCalledWith(helpKey);
  });

  it('should call the helpClient\'s openWidgetToHelpKey and pass the helpKey to it', () => {
    let helpKey = 'test-key.html';
    let spyHelp = spyOn(BBHelp, 'openWidgetToHelpKey').and.callFake(() => { });
    dataService.openWidgetToHelpKey(helpKey);
    expect(spyHelp).toHaveBeenCalledWith(helpKey);
  });

  it('should call the helpClient\'s resetCurrentHelpKeyToDefault method', () => {
    let spyHelp = spyOn(BBHelp, 'resetCurrentHelpKeyToDefault').and.callFake(() => { });
    dataService.resetCurrentHelpKeyToDefault();
    expect(spyHelp).toHaveBeenCalled();
  });
});
