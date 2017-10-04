import { NgModule } from '@angular/core';

import { BBHelpModule } from './public';

<<<<<<< HEAD
import { SkyModalDemoFormComponent } from './lib/modal-demo/modal-demo-form.component';
=======
import { HelpWindowRef } from './local-shared/window-ref';
>>>>>>> 6e2bfd605dd39ac4a3ac9945d0d170de58d7b970

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
