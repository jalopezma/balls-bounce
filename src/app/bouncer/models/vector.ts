export class Vector {
  public x: number;
  public y: number;
  public magnitude: number;
  public angle: number;

  constructor(angle, magnitude: number) {
    const rad = this.degreeToRadians(angle);
    const x = magnitude * parseFloat(Math.cos(rad).toFixed(10));
    const y = magnitude * parseFloat(Math.sin(rad).toFixed(10));

    this.magnitude = magnitude;
    this.angle = angle;

    this.x = x;
    this.y = y;

    this.checkNegativeZero();
  }

  /**
   * Adds vector `v` to own vector and calculate magnitude and angle
   */
  public add(v: Vector) {
    this.x = this.x + v.x;
    this.y = this.y + v.y;

    this.magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    this.angle = this.radiansToDegrees(parseFloat(Math.atan(this.x / this.y).toFixed(10)));

    this.checkNegativeZero();

    // If opposite vectors, and magnitude is 0, the angle is NaN
    if (isNaN(this.angle)) {
      this.angle = 0;
    }
  }

  /**
   * JS has -0 that it's !== 0
   */
  private checkNegativeZero() {
    if (this.x === -0) {
      this.x = 0;
    }
    if (this.y === -0) {
      this.y = 0;
    }
  }

  private degreeToRadians(deg: number): number {
    return deg * (Math.PI / 180);
  }

  private radiansToDegrees(rad: number): number {
    return rad * (180 / Math.PI);
  }
}
