import { NgModule } from '@angular/core';

import { BBHelpConfigService } from './config.service';
import { HelpWidgetService } from './widget.service';

@NgModule({
  providers: [
    BBHelpConfigService,
    HelpWidgetService
  ]
})
export class BBHelpSharedModule { }
