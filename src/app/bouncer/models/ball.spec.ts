import { Vector } from './vector';
import { Ball } from './ball';

const height = 400;
const width = 400;

describe('Ball', () => {
  describe('inside limits', () => {
    let ball: Ball;
    const posX = 100;
    const posY = 100;

    beforeEach(() => {
      ball = new Ball(posX, posY, 270, 1);
    });

    it('y top', () => {
      expect(ball.isOutTopLimit()).toBeFalsy();
    });

    it('y bottom', () => {
      expect(ball.isOutBottomLimit(height)).toBeFalsy();
    });

    it('x left', () => {
      expect(ball.isOutLeftLimit()).toBeFalsy();
    });

    it('x right', () => {
      expect(ball.isOutRightLimit(width)).toBeFalsy();
    });

    describe('and not re-positioned', () => {
      it('x', () => {
        ball.checkCanvasLimits(width, height);
        expect(ball.x).toEqual(posX);
      });

      it('y', () => {
        ball.checkCanvasLimits(width, height);
        expect(ball.y).toEqual(posY);
      });
    });

    describe('vector didn\'t change', () => {
      it('x', () => {
        const vX = ball.vector.x;
        ball.checkCanvasLimits(width, height);
        expect(ball.vector.x).toEqual(vX);
      });

      it('y', () => {
        const vY = ball.vector.y;
        ball.checkCanvasLimits(width, height);
        expect(ball.vector.y).toEqual(vY);
      });
    });
  });

  describe('outside limits bottom-right', () => {
    let ball: Ball;
    const posX = 450;
    const posY = 450;

    beforeEach(() => {
      ball = new Ball(posX, posY, 45, 1);
    });

    it('y top in', () => {
      expect(ball.isOutTopLimit()).toBeFalsy();
    });

    it('y bottom out', () => {
      expect(ball.isOutBottomLimit(height)).toBeTruthy();
    });

    it('x left in', () => {
      expect(ball.isOutLeftLimit()).toBeFalsy();
    });

    it('x right out', () => {
      expect(ball.isOutRightLimit(width)).toBeTruthy();
    });

    describe('and re-positioned', () => {
      it('x', () => {
        ball.checkCanvasLimits(width, height);
        expect(ball.x).toEqual(width - Ball.Radio);
      });

      it('y', () => {
        ball.checkCanvasLimits(width, height);
        expect(ball.y).toEqual(height - Ball.Radio);
      });
    });

    describe('vector change', () => {
      it('x and negative', () => {
        const vX = ball.vector.x;
        ball.checkCanvasLimits(width, height);
        expect(ball.vector.x).not.toEqual(vX);
        expect(ball.vector.x < 0).toBeTruthy();
      });

      it('y and negative', () => {
        const vY = ball.vector.y;
        ball.checkCanvasLimits(width, height);
        expect(ball.vector.y).not.toEqual(vY);
        expect(ball.vector.y < 0).toBeTruthy();
      });
    });
  });

  describe('outside limits top-left', () => {
    let ball: Ball;
    const posX = -50;
    const posY = -50;

    beforeEach(() => {
      ball = new Ball(posX, posY, 220, 1);
    });

    it('y top out', () => {
      expect(ball.isOutTopLimit()).toBeTruthy();
    });

    it('y bottom in', () => {
      expect(ball.isOutBottomLimit(height)).toBeFalsy();
    });

    it('x left out', () => {
      expect(ball.isOutLeftLimit()).toBeTruthy();
    });

    it('x right in', () => {
      expect(ball.isOutRightLimit(width)).toBeFalsy();
    });

    describe('and re-positioned', () => {
      it('x', () => {
        ball.checkCanvasLimits(width, height);
        expect(ball.x).toEqual(Ball.Radio);
      });

      it('y', () => {
        ball.checkCanvasLimits(width, height);
        expect(ball.y).toEqual(Ball.Radio);
      });
    });

    describe('vector change', () => {
      it('x is now positive', () => {
        const vX = ball.vector.x;
        ball.checkCanvasLimits(width, height);
        expect(ball.vector.x).not.toEqual(vX);
        expect(ball.vector.x > 0).toBeTruthy();
      });

      it('y is now negative', () => {
        const vY = ball.vector.y;
        ball.checkCanvasLimits(width, height);
        expect(ball.vector.y).not.toEqual(vY);
        expect(ball.vector.y > 0).toBeTruthy();
      });
    });
  });

});
