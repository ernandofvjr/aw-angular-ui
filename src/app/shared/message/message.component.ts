import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `
    <div class ="ui-messages ui-messages-error" style="margin: 0" *ngIf="temErro()">
      {{text}}
    </div>
  `,
  styles: []
})
export class MessageComponent implements OnInit {

  constructor() { }

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;

  ngOnInit() {
  }

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

}
