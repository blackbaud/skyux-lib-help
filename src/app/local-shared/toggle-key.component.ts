import { Component } from '@angular/core';

@Component({
  selector: 'toggle-key',
  templateUrl: './toggle-key.component.html'
})
export class ToggleKeyComponent {
  public helpKey1: string = 'email.html';
  public helpKey2: string = 'email-sent-email.html';

  public helpKey: string = this.helpKey1;

  public toggleHelpKey(): void {
    this.helpKey = (this.helpKey === this.helpKey1) ? this.helpKey2 : this.helpKey1;
  }
}
