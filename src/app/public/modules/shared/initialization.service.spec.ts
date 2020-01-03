import {
  BBHelpClient
} from '@blackbaud/help-client';

import {
  HelpInitializationService
} from './initialization.service';

import {
  HelpWidgetConfig
} from './widget-config';
import {SkyAppConfig, SkyAppRuntimeConfigParams} from '@skyux/config';
import {SkyAppWindowRef} from '@skyux/core';

const NO_OP_FUNC: Function = () => {
};

describe('HelpInitializationService', () => {

  beforeEach(() => {
    spyOn(BBHelpClient, 'load').and.callFake(NO_OP_FUNC);
  });

  it('should call BBHelpClient.load with the given config', () => {
    const initializationService = new HelpInitializationService(buildWindow(), buildConfig());
    const givenConfig: HelpWidgetConfig = {productId: 'test_id'};
    initializationService.load(givenConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(givenConfig);
  });

  it('should call BBHelpClient.load with svcid from SkyAppConfig', () => {
    const svcid = 'svcid';
    const initializationService = new HelpInitializationService(buildWindow(), buildConfig(svcid));
    const givenConfig: HelpWidgetConfig = {productId: 'test_id'};
    const expectedConfig: HelpWidgetConfig = {...givenConfig, ...{extends: svcid}};
    initializationService.load(givenConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(expectedConfig);
  });

  it('should call BBHelpClient.load with overwritten \'extends\' value from svcid', () => {
    const svcid = 'svcid';
    const initializationService = new HelpInitializationService(buildWindow(), buildConfig(svcid));
    const givenConfig: HelpWidgetConfig = {productId: 'test_id', extends: 'extends'};
    const expectedConfig: HelpWidgetConfig = {...givenConfig, ...{extends: svcid}};
    initializationService.load(givenConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(expectedConfig);
  });

  it('should call BBHelpClient.load with single locale from SKYUX_HOST', () => {
    const locale = 'en-US';
    const initializationService = new HelpInitializationService(buildWindow(locale), buildConfig());
    const givenConfig: HelpWidgetConfig = {productId: 'test_id'};
    const expectedConfig: HelpWidgetConfig = {...givenConfig, ...{locale: locale}};
    initializationService.load(givenConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(expectedConfig);
  });

  it('should call BBHelpClient.load with one locale when there are multiple in SKYUX_HOST', () => {
    const locale = 'en-US,en-GB';
    const initializationService = new HelpInitializationService(buildWindow(locale), buildConfig());
    const givenConfig: HelpWidgetConfig = {productId: 'test_id'};
    const expectedConfig: HelpWidgetConfig = {...givenConfig, ...{locale: 'en-US'}};
    initializationService.load(givenConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(expectedConfig);
  });

  it('should call BBHelpClient.load without overwriting given locale', () => {
    const windowLocale = 'en-US';
    const initializationService = new HelpInitializationService(buildWindow(windowLocale), buildConfig());
    const givenConfig: HelpWidgetConfig = {productId: 'test_id', locale: 'en-GB'};
    initializationService.load(givenConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(givenConfig);
  });

  it('should call BBHelpClient.load with empty locale when undefined value in SKYUX_HOST', () => {
    const window: SkyAppWindowRef = {nativeWindow: {SKYUX_HOST: {acceptLanguage: undefined}}} as SkyAppWindowRef;
    const initializationService = new HelpInitializationService(window, buildConfig());
    const givenConfig: HelpWidgetConfig = {productId: 'test_id'};
    const expectedConfig: HelpWidgetConfig = {...givenConfig, ...{locale: ''}};
    initializationService.load(givenConfig);
    expect(BBHelpClient.load).toHaveBeenCalledWith(expectedConfig);
  });
});

function buildWindow(acceptLanguage: string = undefined): SkyAppWindowRef {
  const host = acceptLanguage ? {acceptLanguage: acceptLanguage} : undefined;
  return {nativeWindow: {SKYUX_HOST: host}} as SkyAppWindowRef;
}

function buildConfig(svcid: string = undefined): SkyAppConfig {
  const host = 'https://example.com';
  const url: string = svcid ? `${host}?svcid=${svcid}` : host;
  const runtimeParams: SkyAppRuntimeConfigParams = new SkyAppRuntimeConfigParams(url, ['svcid']);
  return {runtime: {params: runtimeParams}} as SkyAppConfig;
}
