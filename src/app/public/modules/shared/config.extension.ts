import {
  Injectable
} from '@angular/core';

import {
  HelpWidgetConfig
} from './widget-config';

import {
  Observable
} from 'rxjs';

@Injectable()
export abstract class ConfigExtension {
  public abstract extend(config: HelpWidgetConfig): Observable<HelpWidgetConfig>;
}
