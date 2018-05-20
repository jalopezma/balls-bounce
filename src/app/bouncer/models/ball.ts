import { Vector } from './vector';

export class Ball {
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
}
