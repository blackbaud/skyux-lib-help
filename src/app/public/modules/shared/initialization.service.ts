import {
  Injectable,
  Optional
} from '@angular/core';

import {
  BBHelpClient
} from '@blackbaud/help-client';

import {
  SkyAppWindowRef
} from '@skyux/core';

import {
  SkyAppConfig
} from '@skyux/config';

import {
  HelpWidgetConfig
} from './widget-config';

import {
  ConfigExtension
} from './config.extension';

import {
  Observable, of
} from 'rxjs';

@Injectable()
export class HelpInitializationService {
  public constructor(
    private windowRef: SkyAppWindowRef,
    private config: SkyAppConfig,
    @Optional() private extension: ConfigExtension = undefined
  ) { }

  public load(config: HelpWidgetConfig = {}): void {
    if (this.config.runtime.params.has('svcid')) {
      config.extends = this.config.runtime.params.get('svcid');
    }

    if (this.config.runtime.params.has('envid')) {
      config.environmentId = this.config.runtime.params.get('envid');
    }

    const skyuxHost = this.windowRef.nativeWindow.SKYUX_HOST;
    if (skyuxHost && !config.locale) {
      const languages = skyuxHost.acceptLanguage || '';
      config.locale = languages.split(',')[0];
    }
    const newConfig: Observable<HelpWidgetConfig> = this.extension ? this.extension.extend(config) : of(config);
    newConfig.subscribe(c => BBHelpClient.load(c));
  }
}
