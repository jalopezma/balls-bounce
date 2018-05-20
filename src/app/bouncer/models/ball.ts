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
}
