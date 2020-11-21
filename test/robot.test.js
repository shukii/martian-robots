const assert = require('assert');
const Robot = require('../bin/robot').Robot;

describe('Robot', () => {
    describe('Create a robot', () => {
        it('should create a robot', () => {
            const robot = new Robot(0, 0, 'W');
            assert.strictEqual(robot.x, 0);
            assert.strictEqual(robot.y, 0);
            assert.strictEqual(robot.direction, 'W');
        });
    });

    describe('Turn a robot', () => {
        it('should turn a robot left', () => {
            const robot = new Robot(0, 0, 'N');

            robot.turnLeft();
            assert.strictEqual(robot.direction, 'W');

            robot.turnLeft();
            assert.strictEqual(robot.direction, 'S');

            robot.turnLeft();
            assert.strictEqual(robot.direction, 'E');

            robot.turnLeft();
            assert.strictEqual(robot.direction, 'N');
        });

        it('should turn a robot right', () => {
            const robot = new Robot(0, 0, 'N');

            robot.turnRight();
            assert.strictEqual(robot.direction, 'E');

            robot.turnRight();
            assert.strictEqual(robot.direction, 'S');

            robot.turnRight();
            assert.strictEqual(robot.direction, 'W');

            robot.turnRight();
            assert.strictEqual(robot.direction, 'N');
        });
    });
});

