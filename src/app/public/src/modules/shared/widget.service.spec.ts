import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { BBHelpClient } from '@blackbaud/help-client';

import { HelpWidgetService } from './widget.service';

describe('BBHelpClientService', () => {
  let dataService = new HelpWidgetService();

  it('should call the helpClient\'s setCurrentHelpKey and pass the helpKey to it', () => {
    let helpKey = 'test-key.html';
    let spyHelp = spyOn(BBHelpClient, 'setCurrentHelpKey').and.callFake(() => { });
    dataService.setCurrentHelpKey(helpKey);
    expect(spyHelp).toHaveBeenCalledWith(helpKey);
  });

  it('should call the helpClient\'s openToHelpKey and pass the helpKey to it', () => {
    let helpKey = 'test-key.html';
    let spyHelp = spyOn(BBHelpClient, 'openWidgetToHelpKey').and.callFake(() => { });
    dataService.openToHelpKey(helpKey);
    expect(spyHelp).toHaveBeenCalledWith(helpKey);
  });

  it('should call the helpClient\'s setHelpKeyToDefault method', () => {
    let spyHelp = spyOn(BBHelpClient, 'setHelpKeyToDefault').and.callFake(() => { });
    dataService.setHelpKeyToDefault();
    expect(spyHelp).toHaveBeenCalled();
  });

  it('should call the helpClient\'s setCurrentHelpKey with a temporary helpKey', () => {
    let tempHelpKey = 'temp-key.html';
    let spyHelp = spyOn(BBHelpClient, 'setCurrentHelpKey').and.callFake(() => { });
    dataService.setTemporaryHelpKey(tempHelpKey);
    expect(spyHelp).toHaveBeenCalledWith(tempHelpKey);
  });

  it('should call the helpClient\'s setCurrentHelpKey with the currentHelpKey when removing the temporary help key', () => {
    let helpKey = 'test-key.html';
    let tempHelpKey = 'temp-key.html';
    let spyHelp = spyOn(BBHelpClient, 'setCurrentHelpKey').and.callFake(() => { });

    dataService.setCurrentHelpKey(helpKey);
    expect(spyHelp).toHaveBeenCalledWith(helpKey);

    dataService.setTemporaryHelpKey(tempHelpKey);
    expect(spyHelp).toHaveBeenCalledWith(tempHelpKey);

    dataService.removeTemporaryHelpKey();
    expect(spyHelp).toHaveBeenCalledWith(helpKey);
  });
});
