import { NgModule } from '@angular/core';

const objectAssign = require('es6-object-assign');
objectAssign.polyfill();

import { HelpKeyModule } from './modules/help-key';
import { BBHelpSharedModule } from './modules/shared';
import { TestButtonModule } from './modules/test-button';

export * from './modules/shared';

@NgModule({
  exports: [
    HelpKeyModule,
    TestButtonModule,
    BBHelpSharedModule
  ]
})
export class BBHelpModule { }
