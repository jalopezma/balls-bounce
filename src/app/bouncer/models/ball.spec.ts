import { Vector } from './vector';
import { Ball } from './ball';

const height = 400;
const width = 400;

describe('Ball', () => {
  describe('0 deg, magnitude 1', () => {
    let ball: Ball;

    beforeEach(() => {
    });

    it('x is right', () => {
      ball = new Ball(100, 100, 270, 1);
    });
});
