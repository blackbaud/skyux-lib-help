import { NgModule } from '@angular/core';

import { BBHelpConfigService } from './config.service';
import { BBHelpClientService } from './help-client.service';

@NgModule({
  providers: [
    BBHelpConfigService,
    BBHelpClientService
  ]
})
export class BBHelpSharedModule { }
