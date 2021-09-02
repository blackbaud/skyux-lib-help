import {
  APP_INITIALIZER,
  NgModule
} from '@angular/core';

import {
  SkyAppConfig
} from '@skyux/config';

import {
  SkyModalDemoFormComponent,
  HelpWindowRef
} from './lib';

import {
  AppSkyModule
} from './app-sky.module';

import {
  BBHelpModule,
  HelpWidgetService,
  HelpInitializationService
} from './public/public_api';

/**
 * Loads the widget via {@link HelpInitializationService} in similar fashion as `@skyux-sdk/builder`.
 * This is done manually for the local demo in order to differentiate between the local classes from the classes that
 * `@skyux-sdk/builder` is using.
 * Consumers should not mimic this strategy.
 */
function initFunction(initSvc: HelpInitializationService, appConfig: SkyAppConfig) {
  return () => initSvc.load(appConfig?.skyux?.help);
}

/**
 * Consumers' version of {@link AppExtrasModule} would normally not contain
 * {@link BBHelpModule}, {@link HelpWidgetService}, or {@link HelpInitializationService}.
 * `@skyux-sdk/builder` would bring each in when the consumer provides a config object (even an empty object) in the
 * `skyuxconfig.json`'s `help` property.
 * This is done here in order to differentiate between the local classes from the classes that `@skyux-sdk/builder` is
 * using.
 */
@NgModule({
  exports: [
    AppSkyModule,
    BBHelpModule
  ],
  providers: [
    HelpWindowRef,
    HelpWidgetService,
    HelpInitializationService,
    {provide : APP_INITIALIZER, useFactory: initFunction, deps: [HelpInitializationService, SkyAppConfig] , multi : true}
  ],
  entryComponents: [
    SkyModalDemoFormComponent
  ]
})
export class AppExtrasModule { }
