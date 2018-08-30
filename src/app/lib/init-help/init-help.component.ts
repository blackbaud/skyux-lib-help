import { Component } from '@angular/core';
import { HelpInitializationService } from '../../public';

import { HelpWindowRef } from '../window-ref';
import { BBHelpClient } from '@blackbaud/help-client';

@Component({
  selector: 'init-help',
  template: ''
})
export class HelpInitComponent {
  constructor(
    private windowRef: HelpWindowRef,
    private initService: HelpInitializationService) {
      BBHelpClient.ready()
        .then(() => {
          this.initService.load({
            extends: 'bbhelp',
            productId: 'lo_test_donotmodify',
            locale: 'es-mx',
            customLocales: ['es-mx']})
        });
  }
}
