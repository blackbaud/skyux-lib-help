import { NgModule } from '@angular/core';

import { BBHelpModule } from './public';

import { SkyModalDemoFormComponent } from './lib/modal-demo/modal-demo-form.component';
import { HelpWindowRef } from './local-shared/window-ref';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    BBHelpModule
  ],
  exports: [
    BBHelpModule
  ],
  providers: [
    HelpWindowRef
  ],
  entryComponents: [
    SkyModalDemoFormComponent
  ]
})
export class AppExtrasModule { }
