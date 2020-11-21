const assert = require('assert');
const { Robot } = require('../bin/robot');
const Grid = require('../bin/grid').Grid;

describe('Grid', () => {
    describe('Build Grid', () => {
        it('should build a square grid', () => {
            const grid = new Grid(5, 5);
            assert.strictEqual(grid.grid.length, 6);
            assert.strictEqual(grid.grid[0].length, 6);
        });

        it('should build a rectangular grid', () => {
            const grid = new Grid(2, 6);
            assert.strictEqual(grid.grid.length, 7);
            assert.strictEqual(grid.grid[0].length, 3);
        });

        it('should build a single point grid', () => {
            const grid = new Grid(0, 0);
            assert.strictEqual(grid.grid.length, 1);
        });
    });

    describe('Mark scent', () => {
        it('should mark a scent', () => {
            const grid = new Grid(5, 10);
            grid.markScent(3, 10);
            assert.strictEqual(grid.grid[10][3], 1);
        });

        it('should mark a scent when a robot is lost going north', () => {
            const grid = new Grid(5, 10);
            const robot = new Robot(3, 10, 'N');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), true);
            assert.strictEqual(grid.isScent(3, 10), true);
        });

        it('should mark a scent when a robot is lost going east', () => {
            const grid = new Grid(5, 10);
            const robot = new Robot(5, 5, 'E');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), true);
            assert.strictEqual(grid.isScent(5, 5), true);
        });

        it('should mark a scent when a robot is lost going south', () => {
            const grid = new Grid(5, 10);
            const robot = new Robot(3, 0, 'S');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), true);
            assert.strictEqual(grid.isScent(3, 0), true);
        });

        it('should mark a scent when a robot is lost going west', () => {
            const grid = new Grid(5, 10);
            const robot = new Robot(0, 5, 'W');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), true);
            assert.strictEqual(grid.isScent(0, 5), true);
        });

        it('should ignore a move going north if there is a scent and the robot could be lost', () => {
            const grid = new Grid(5, 10);
            grid.markScent(3, 10);
            const robot = new Robot(3, 10, 'N');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), false);
        });
    });

    describe('Use scent', () => {
        it('should ignore a move going north if there is a scent and the robot could be lost', () => {
            const grid = new Grid(5, 10);
            grid.markScent(3, 10);
            const robot = new Robot(3, 10, 'N');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), false);
        });

        it('should ignore a move going east if there is a scent and the robot could be lost', () => {
            const grid = new Grid(5, 10);
            grid.markScent(5, 5);
            const robot = new Robot(5, 5, 'E');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), false);
        });

        it('should ignore a move going south if there is a scent and the robot could be lost', () => {
            const grid = new Grid(5, 10);
            grid.markScent(5, 0);
            const robot = new Robot(5, 0, 'S');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), false);
        });

        it('should ignore a move going west if there is a scent and the robot could be lost', () => {
            const grid = new Grid(0, 5);
            grid.markScent(0, 5);
            const robot = new Robot(0, 5, 'W');

            grid.moveRobot(robot, ['F']);

            assert.strictEqual(grid.isRobotLost(robot), false);
        });
    });
});