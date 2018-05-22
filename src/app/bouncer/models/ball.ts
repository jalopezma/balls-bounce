import { Vector } from './vector';

export class Ball {
  public static Radio = 10;
  public x: number;
  public y: number;
  public vector: Vector;

  constructor(x, y, angle, magnitude: number) {
    this.x = x;
    this.y = y;
    this.vector = new Vector(angle, magnitude);
  }

  public applyVector(v: Vector) {
    this.vector.add(v);
    this.x = this.x + this.vector.x;
    this.y = this.y + this.vector.y;
  }

  public checkCanvasLimits(width, height: number) {
    this.checkCanvasLimitsWidth(width);
    this.checkCanvasLimitsHeight(height);
  }

  public checkCanvasLimitsWidth(width: number) {
    if (this.x >= width - Ball.Radio || this.x <= Ball.Radio) {
      this.vector.invertX();
    }
  }

  public checkCanvasLimitsHeight(height: number) {
    if (this.y >= height - Ball.Radio || this.y <= Ball.Radio) {
      this.vector.invertY();
    }
  }
}
