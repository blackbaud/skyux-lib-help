import {
  HelpWidgetConfig
} from './widget-config';

import {
  Observable
} from 'rxjs';

export abstract class InitializationConfigExtensionService {
  public abstract extend(config: HelpWidgetConfig): Observable<HelpWidgetConfig>;
}
