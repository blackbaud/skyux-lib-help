import { Injectable } from '@angular/core';
import { BBHelpClient } from '@blackbaud/help-client';

import { BBHelpConfigService } from './config.service';
import { HelpWidgetConfig } from './widget-config';

@Injectable()
export class HelpInitializationService {

  constructor(private configService: BBHelpConfigService) { }

  public load(config: any) {
    const widgetConfig: HelpWidgetConfig = this.validateConfig(config);
    BBHelpClient.load(widgetConfig);
  }

  private validateConfig(config: any): HelpWidgetConfig {
    const validConfig = Object.assign({}, config);

    if (this.configService.runtime.params.has('svcid')) {
      const svcId = this.configService.runtime.params.get('svcid');
      validConfig.extends = svcId;
    }

    return validConfig as HelpWidgetConfig;
  }
}
