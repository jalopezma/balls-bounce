import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'bb-bounce-page',
  templateUrl: './bounce-page.component.html',
  styleUrls: ['./bounce-page.component.scss']
})
export class BouncePageComponent {

  public resetEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  public onReset() {
    this.resetEmitter.emit(null);
  }
}
