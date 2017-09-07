import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { BBHelpClient } from '@blackbaud/help-client';

import { HelpInitializationService } from './initialization.service';
import { BBHelpConfigService } from './config.service';
import { HelpWidgetConfig } from './widget-config';

let mockSvcId: any;

class MockConfigService {
  public runtime: any = {
    params: {
      get() {
        return mockSvcId;
      },

      has() {
        return mockSvcId !== undefined;
      }
    }
  };
}

describe('Initialization Service', () => {
  let initializationService: HelpInitializationService;
  let configService: MockConfigService;

  beforeEach(() => {
    configService = new MockConfigService();
    initializationService = new HelpInitializationService(
      configService as BBHelpConfigService
    );

    spyOn(BBHelpClient, 'load').and.callFake((config: HelpWidgetConfig) => { });
  });

  it('should call the Client\'s load method with the config passed to the service', () => {
    const mockConfig = { 'productId': 'test_id' };
    initializationService.load(mockConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(mockConfig);
  });

  it('should not alter the config if no runtime.params are present', () => {
    const mockConfig = {
      'extends': 'some_id',
      'productId': 'some_product_id'
    };
    initializationService.load(mockConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(mockConfig);
  });

  it('should assign the config\'s extend property to runtime.params svcid if it exists', () => {
      mockSvcId = 'svc_id';
      const mockConfig = { 'extends': 'some_id' };
      initializationService.load(mockConfig);
      expect(BBHelpClient.load).not.toHaveBeenCalledWith(mockConfig);
      expect(BBHelpClient.load).toHaveBeenCalledWith({ 'extends': mockSvcId});
  });
});
