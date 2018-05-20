import { Vector } from './vector';
describe('Vector', () => {

  describe('Vector 0 deg, magnitude 1', () => {
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

  describe('Vector 90 deg, magnitude 1', () => {
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

  describe('Vector 180 deg, magnitude 1', () => {
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

  describe('Vector 270 deg, magnitude 1', () => {
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

  describe('Vector 360 deg, magnitude 1', () => {
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
});
