import { Component } from '@angular/core';
import { HelpInitializationService } from '../../public';

import { BBHelpClient } from '@blackbaud/help-client';

@Component({
  selector: 'init-help',
  template: ''
})
export class HelpInitComponent {
  constructor(private initService: HelpInitializationService) {
    BBHelpClient.ready()
        .then(() => {
          this.initService.load({
            extends: 'bbhelp'
        });
      });
   }
}
