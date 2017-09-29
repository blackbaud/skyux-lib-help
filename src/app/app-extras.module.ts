import { NgModule } from '@angular/core';

import { BBHelpModule } from './public';

import { SkyModalDemoFormComponent } from './modal-demo/modal-demo-form.component';

// Specify entry components, module-level providers, etc. here.
@NgModule({
  imports: [
    BBHelpModule
  ],
  exports: [
    BBHelpModule
  ],
  providers: [],
  entryComponents: [
    SkyModalDemoFormComponent
  ]
})
export class AppExtrasModule { }
