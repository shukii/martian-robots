
"use strict";

const LEFT = 'L';
const RIGHT = 'R';
const FORWARD = 'F';

class Grid {
    constructor(columnCount, rowCount) {
        this.grid = [];

        for (let y = 0; y <= rowCount; y++) {
            this.grid[y] = [];
            for (let x = 0; x <= columnCount; x++) {
                this.grid[y][x] = 0;
            }
        }
    }

    markScent(x, y) {
        this.grid[y][x] = 1;
    }

    isScent(x, y) {
        return this.grid[y][x] === 1;
    }

    printGrid() {
        for (let i = this.grid.length - 1; i >= 0; i--) {
            console.log(this.grid[i]);
        }
    }

    moveRobot(robot, movements) {
        for (let i = 0; i < movements.length; i++) {
            const movement = movements[i];
            if (movement === LEFT) robot.turnLeft();
            if (movement === RIGHT) robot.turnRight();
            if (movement === FORWARD) {
                const { x, y } = robot;
                robot.moveForward(this.grid);

                if (this.isRobotLost(robot)) {
                    if (this.isScent(x, y)) {
                        robot.moveBackward();
                    } else {
                        console.log(`${x} ${y} ${robot.direction} LOST`);
                        this.markScent(x, y);
                        break;
                    }
                }
            }
        }

        if (!this.isRobotLost(robot)) {
            console.log(`${robot.x} ${robot.y} ${robot.direction}`);
        }
    }

    isRobotLost(robot) {
        return robot.x > this.grid[0].length - 1 || robot.x < 0 || robot.y > this.grid.length - 1 || robot.y < 0;
    }
}


module.exports = {
    Grid
}