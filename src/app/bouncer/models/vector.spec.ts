import { Vector } from './vector';
describe('Vector', () => {

  describe('0 deg, magnitude 1', () => {
    let v1: Vector;
    beforeEach(() => {
      v1 = new Vector(0, 1);
    });

    it('x is right', () => {
      expect(v1.x).toEqual(1);
    });
    it('y is right', () => {
      expect(v1.y).toEqual(0);
    });
    it('angle is right', () => {
      expect(v1.angle).toEqual(0);
    });
    it('magnitude is right', () => {
      expect(v1.magnitude).toEqual(1);
    });
  });

  describe('90 deg, magnitude 1', () => {
    let v1: Vector;
    beforeEach(() => {
      v1 = new Vector(90, 1);
    });

    it('x is right', () => {
      expect(v1.x).toEqual(0);
    });
    it('y is right', () => {
      expect(v1.y).toEqual(1);
    });
    it('angle is right', () => {
      expect(v1.angle).toEqual(90);
    });
    it('magnitude is right', () => {
      expect(v1.magnitude).toEqual(1);
    });
  });

  describe('180 deg, magnitude 1', () => {
    let v1: Vector;
    beforeEach(() => {
      v1 = new Vector(180, 1);
    });

    it('x is right', () => {
      expect(v1.x).toEqual(-1);
    });
    it('y is right', () => {
      expect(v1.y).toEqual(0);
    });
    it('angle is right', () => {
      expect(v1.angle).toEqual(180);
    });
    it('magnitude is right', () => {
      expect(v1.magnitude).toEqual(1);
    });
  });

  describe('270 deg, magnitude 1', () => {
    let v1: Vector;
    beforeEach(() => {
      v1 = new Vector(270, 1);
    });

    it('x is right', () => {
      expect(v1.x).toEqual(0);
    });
    it('y is right', () => {
      expect(v1.y).toEqual(-1);
    });
    it('angle is right', () => {
      expect(v1.angle).toEqual(270);
    });
    it('magnitude is right', () => {
      expect(v1.magnitude).toEqual(1);
    });
  });

  describe('360 deg, magnitude 1', () => {
    let v1: Vector;
    beforeEach(() => {
      v1 = new Vector(360, 1);
    });

    it('x is right', () => {
      expect(v1.x).toEqual(1);
    });
    it('y is right', () => {
      expect(v1.y).toEqual(0);
    });
    it('angle is right', () => {
      expect(v1.angle).toEqual(360);
    });
    it('magnitude is right', () => {
      expect(v1.magnitude).toEqual(1);
    });
  });

  it('opposite vectors', () => {
    const v1 = new Vector(90, 1);
    const v2 = new Vector(270, 1);
    v1.add(v2);
    expect(v1.x).toEqual(0);
    expect(v1.y).toEqual(0);
    expect(v1.angle).toEqual(0);
    expect(v1.magnitude).toEqual(0);
  });

  describe('Degree to radians', () => {
    it('0 deg, 0 rad', () => {
      const v = new Vector(0, 1);
      expect(v.angle).toBe(0);
      expect(v.rad).toBe(0);
    });

    it('90 deg, π/2 rad', () => {
      const v = new Vector(90, 1);
      expect(v.angle).toBe(90);
      expect(v.rad).toBe(Math.PI / 2);
    });

    it('180 deg, π/2 rad', () => {
      const v = new Vector(180, 1);
      expect(v.angle).toBe(180);
      expect(v.rad).toBe(Math.PI);
    });

    it('270 deg, π/2 rad', () => {
      const v = new Vector(270, 1);
      expect(v.angle).toBe(270);
      expect(v.rad).toBe(3 * Math.PI / 2);
    });

    it('360 deg, π/2 rad', () => {
      const v = new Vector(360, 1);
      expect(v.angle).toBe(360);
      expect(v.rad).toBe(2 * Math.PI);
    });
  });

  describe('Invert', () => {
    it('X', () => {
      const v = new Vector(45, 1);
      const prevX = v.x;
      v.invertX();
      expect(v.x).toBe(-prevX);
    });

    it('Y', () => {
      const v = new Vector(45, 1);
      const prevY = v.y;
      v.invertY();
      expect(v.y).toBe(-prevY);
    });
  });

  describe('Reduce', () => {
    it('X', () => {
      const v = new Vector(45, 1);
      const prevX = v.x;
      v.reduceX(0.5);
      expect(v.x).toBe(prevX / 2);
    });

    it('Y', () => {
      const v = new Vector(45, 1);
      const prevY = v.y;
      v.reduceY(0.5);
      expect(v.y).toBe(prevY / 2);
    });
  });
});
