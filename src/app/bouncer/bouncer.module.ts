import { NgModule } from '@angular/core';

import { BouncerRoutingModule } from './bouncer-routing.module';
import { BounceAreaComponent } from './components/bounce-area/bounce-area.component';
import { BouncePageComponent } from './container/bounce-page/bounce-page.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    BouncerRoutingModule,
  ],
  declarations: [
    BounceAreaComponent,
    BouncePageComponent
  ],
  exports: [BouncePageComponent]
})
export class BouncerModule { }
