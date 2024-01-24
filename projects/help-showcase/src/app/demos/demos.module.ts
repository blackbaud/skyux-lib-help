import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BBHelpModule,
  HelpInitializationService,
} from '@blackbaud/skyux-lib-help';
import { SkyAppConfig, SkyAppRuntimeConfigParams } from '@skyux/config';
import { SkyModalModule } from '@skyux/modals';

import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo4Component } from './demo4/demo4.component';
import { DemosComponent } from './demos.component';
import {
  SkyModalDemoFormComponent,
  TestButtonComponent,
  ToggleWidgetComponent,
} from './lib';
import { SkyModalDemoComponent } from './lib/modal-demo/modal-demo-launcher.component';
import { ToggleKeyComponent } from './lib/toggle-key/toggle-key.component';

type HelpMode = 'legacy' | 'menu' | undefined;
const HELP_MODE: InjectionToken<HelpMode> = new InjectionToken<HelpMode>(
  'helpMode'
);

/**
 * Loads the widget via {@link HelpInitializationService} in similar fashion as `@skyux-sdk/builder`.
 * This is done manually for the local demo in order to differentiate between the local classes from the classes that
 * `@skyux-sdk/builder` is using.
 * Consumers should not mimic this strategy and should leverage {@link SkyuxConfig#help}.
 */
function initFunction(initSvc: HelpInitializationService, helpMode: HelpMode) {
  // TODO provide {@link HelpWidgetConfig#helpUpdateCallback} when omnibar implements that feature.
  return () => {
    const config = helpMode === undefined ? {} : { helpMode: helpMode };
    return initSvc.load(config);
  };
}

@NgModule({
  imports: [CommonModule, RouterModule, SkyModalModule, BBHelpModule],
  declarations: [
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    DemosComponent,
    SkyModalDemoComponent,
    SkyModalDemoFormComponent,
    TestButtonComponent,
    ToggleKeyComponent,
    ToggleWidgetComponent,
  ],
  providers: [
    // { provide: HELP_MODE, useValue: 'menu' },
    { provide: HELP_MODE, useValue: 'legacy' },
    // { provide: HELP_MODE, useValue: undefined },
    {
      provide: APP_INITIALIZER,
      useFactory: initFunction,
      deps: [HelpInitializationService, HELP_MODE],
      multi: true,
    },
    {
      provide: SkyAppConfig,
      useFactory: () => {
        const runtimeParams = new SkyAppRuntimeConfigParams(
          window.location.href,
          {}
        );

        const config = new SkyAppConfig();
        (config.runtime as any) = {};
        config.skyux = {};

        config.runtime.params = runtimeParams;

        return config;
      },
    },
  ],
})
export class DemosModule {}
