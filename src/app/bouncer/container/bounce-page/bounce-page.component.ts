import { Component, EventEmitter, AfterViewInit, OnDestroy } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bb-bounce-page',
  templateUrl: './bounce-page.component.html',
  styleUrls: ['./bounce-page.component.scss']
})
export class BouncePageComponent implements AfterViewInit, OnDestroy {

  public resetEmitter: EventEmitter<any> = new EventEmitter<any>();
  public canvasSize: number[] = [280, 400];

  private watcher: Subscription;
  private screenSize: string;

  constructor(private media: ObservableMedia) {
    this.watcher = this.media.subscribe((change: MediaChange) => {
      this.setScreenSize();
      this.setCanvasSizeForScreen();
    });
  }

  ngAfterViewInit() {
    this.setScreenSize();
    this.setCanvasSizeForScreen();
  }

  ngOnDestroy() {
    if (this.watcher) {
      this.watcher.unsubscribe();
    }
  }

  public onReset() {
    this.resetEmitter.emit(null);
  }

  private setScreenSize() {
    let size = '';
    if (this.media.isActive('xs')) {
      size = 'xs';
    } else if (this.media.isActive('sm')) {
      size = 'sm';
    } else if (this.media.isActive('md')) {
      size = 'md';
    } else if (this.media.isActive('lg')) {
      size = 'lg';
    } else if (this.media.isActive('xl')) {
      size = 'xl';
    }
    this.screenSize = size;
  }

  private setCanvasSizeForScreen() {
    let size: number[] = [];
    switch (this.screenSize) {
      case 'xs':
        size = [280, 400];
        break;
      case 'sm':
        size = [560, 400];
        break;
      case 'md':
      case 'lg':
      case 'xl':
        size = [900, 400];
        break;
    }
    this.canvasSize = size;
  }
}
