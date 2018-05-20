import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { Ball } from '../../models/ball';
import { Vector } from '../../models/vector';

@Component({
  selector: 'bb-bounce-area',
  templateUrl: './bounce-area.component.html',
  styleUrls: ['./bounce-area.component.scss']
})
export class BounceAreaComponent implements AfterViewInit, OnDestroy {
  @Input() public width = 400;
  @Input() public height = 400;

  @ViewChild('canvas') public canvas: ElementRef;

  private cx: CanvasRenderingContext2D;
  private objects: Array<Ball> = new Array<Ball>();
  private drawInterval;
  private gravityVector: Vector = new Vector(270, 0.2);

  constructor() {
    console.log(this.gravityVector);
    const b = new Ball(50, 200, 90, 0.5);
    console.log(b);
    b.applyVector(this.gravityVector);
    console.log(b);
    b.applyVector(this.gravityVector);
    console.log(b);
    b.applyVector(this.gravityVector);
    console.log(b);
    b.applyVector(this.gravityVector);
    console.log(b);
    b.applyVector(this.gravityVector);
    console.log(b);
  }

  public ngAfterViewInit() {
    this.initCanvas();
  }

  public ngOnDestroy() {
    clearInterval(this.drawInterval);
  }

  private initCanvas() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.drawInterval = setInterval(() => {
      this.updateCanvas();
    }, 10);
  }

  private updateCanvas() {
    if (!this.cx) { return; }
    this.drawPoints();
  }

  private drawPoints() {
    for (const ball of this.objects) {
      ball.applyVector(this.gravityVector);
      this.cx.beginPath();
      this.cx.arc(ball.x, ball.y, 10, 0, Math.PI * 2);
      this.cx.fillStyle = '#0095DD';
      this.cx.fill();
      this.cx.closePath();
    }
  }

  public onClick($event) {
    console.log('click!!!', $event);
    const randAngle = this.getRandom(15, 165);
    const randMagnitude = this.getRandom(0.3, 0.4);
    const ball = new Ball($event.clientX, $event.clientY, randAngle, randMagnitude);
    console.log(ball, randAngle, randMagnitude);
    this.objects.push(ball);
  }

  private getRandom(min, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
