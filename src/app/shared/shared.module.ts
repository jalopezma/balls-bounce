import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
})
export class SharedModule { }
