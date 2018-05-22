import { Component, Input, ElementRef, AfterViewInit, ViewChild, OnDestroy, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { Ball } from '../../models/ball';
import { Vector } from '../../models/vector';

@Component({
  selector: 'bb-bounce-area',
  templateUrl: './bounce-area.component.html',
  styleUrls: ['./bounce-area.component.scss']
})
export class BounceAreaComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() public width = 400;
  @Input() public height = 400;
  @Input() resetEmitter: EventEmitter<any>;

  @ViewChild('canvas') public canvas: ElementRef;

  private cx: CanvasRenderingContext2D;
  private objects: Array<Ball> = new Array<Ball>();
  private drawInterval;
  private isRunning = false;
  // As the canvas 0 y point it's at the top, the gravity vector has to point to the top
  private gravityVector: Vector = new Vector(90, 0.04);

  constructor() { }

  public ngOnChanges(changes: SimpleChanges) {
    if ('resetEmitter' in changes && changes.resetEmitter.currentValue) {
      this.resetEmitter.subscribe(() => {
        this.reset();
      });
    }
  }

  public ngAfterViewInit() {
    this.initCanvas();
  }

  public ngOnDestroy() {
    this.reset();
  }

  private initCanvas() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.cx = canvasEl.getContext('2d');
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.startDrawInterval();
  }

  private startDrawInterval() {
    this.drawInterval = setInterval(() => {
      this.updateCanvas();
    }, 10);
    this.isRunning = true;
  }

  private stopDrawInterval() {
    clearInterval(this.drawInterval);
    this.isRunning = false;
  }

  private updateCanvas() {
    if (!this.cx) { return; }
    this.cleanCanvas();
    this.updateBalls();
    this.drawBalls();
  }

  private cleanCanvas() {
    if (this.cx) {
      this.cx.clearRect(0, 0, this.width, this.height);
    }
  }

  private updateBalls() {
    for (const ball of this.objects) {
      ball.applyVector(this.gravityVector, this.width, this.height);
    }
  }

  private drawBalls() {
    for (const ball of this.objects) {
      this.cx.beginPath();
      this.cx.arc(ball.x, ball.y, Ball.Radio, 0, Math.PI * 2);
      this.cx.fillStyle = '#0095DD';
      this.cx.stroke();
      this.cx.fill();
      this.cx.closePath();
    }
  }

  public onClick($event) {
    // As the canvas y 0 point it's at the top, we launch the balls with an "opposite" direction
    const randAngle = this.getRandom(230, 300);
    const randMagnitude = this.getRandom(1, 4);
    const ball = new Ball($event.clientX, $event.clientY, randAngle, randMagnitude);
    this.objects.push(ball);

    if (!this.isRunning) {
      this.startDrawInterval();
    }
  }

  private getRandom(min, max: number): number {
    return Math.random() * (max - min) + min;
  }

  public reset() {
    this.stopDrawInterval();
    this.objects.length = 0;
    this.cleanCanvas();
  }
}
