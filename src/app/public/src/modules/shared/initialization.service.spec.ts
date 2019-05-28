import {
  BBHelpClient
} from '@blackbaud/help-client';

import {
  HelpInitializationService
} from './initialization.service';

describe('Initialization Service', () => {
  const initializationService = new HelpInitializationService();

  beforeEach(() => {
    spyOn(BBHelpClient, 'load').and.callFake((config: any) => { });
    spyOn(BBHelpClient, 'ready').and.callFake((config: any) => Promise.resolve()).and.callThrough();
  });

  it('should call the Client\'s load method with the config passed to the service', async () => {
    const mockConfig = { 'productId': 'test_id' };
    initializationService.load(mockConfig);
    BBHelpClient.ready().then(() => {
      expect(BBHelpClient.load).toHaveBeenCalledWith(mockConfig);
    });
  });
});
