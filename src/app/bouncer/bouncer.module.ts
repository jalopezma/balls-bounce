import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BouncerRoutingModule } from './bouncer-routing.module';
import { BounceAreaComponent } from './components/bounce-area/bounce-area.component';

@NgModule({
  imports: [
    CommonModule,
    BouncerRoutingModule
  ],
  declarations: [BounceAreaComponent],
  exports: [BounceAreaComponent]
})
export class BouncerModule { }
