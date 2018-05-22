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

  public applyVector(v: Vector, width, height: number) {
    this.vector.add(v);
    this.x = this.x + this.vector.x;
    this.checkCanvasLimitsWidth(width);
    this.y = this.y + this.vector.y;
    this.checkCanvasLimitsHeight(height);
  }

  public checkCanvasLimits(width, height: number) {
    this.checkCanvasLimitsWidth(width);
    this.checkCanvasLimitsHeight(height);
  }

  /**
   * Checks if the ball hits with the limit. If so, we check if we already inverted the vector
   */
  public checkCanvasLimitsWidth(width: number) {
    if ((this.x >= (width - Ball.Radio) && this.vector.x > 0) || (this.x <= Ball.Radio && this.vector.x < 0)) {
      this.vector.invertX();
      this.vector.reduceX();
    }
    // If ball goes out of boundaries, set to min or max
    if (this.x < Ball.Radio) {
      this.x = Ball.Radio;
    } else if (this.x > (width - Ball.Radio)) {
      this.x = width - Ball.Radio;
    }
  }

  /**
   * Checks if the ball hits with the limit. If so, we check if we already inverted the vector
   */
  public checkCanvasLimitsHeight(height: number) {
    if (this.y >= height - Ball.Radio && this.vector.y > 0) {
      this.vector.reduceX();
    }
    if ((this.y >= height - Ball.Radio && this.vector.y > 0) || (this.y <= Ball.Radio && this.vector.y < 0)) {
      this.vector.invertY();
      this.vector.reduceY();
    }
    // If ball goes out of boundaries, set to min or max
    if (this.y < Ball.Radio) {
      this.y = Ball.Radio;
    } else if (this.y > (height - Ball.Radio)) {
      this.y = height - Ball.Radio;
    }
  }

  public isBouncing(height): boolean {
    return (
      (this.y === height - Ball.Radio) &&
      (this.vector.magnitude < 0.05)
    );
  }
}
