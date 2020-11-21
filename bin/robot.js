"use strict";

const NORTH = 'N';
const SOUTH = 'S';
const EAST = 'E';
const WEST = 'W';

class Robot {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    turnLeft() {
        if (this.direction === NORTH) this.direction = WEST;
        else if (this.direction === WEST) this.direction = SOUTH;
        else if (this.direction === SOUTH) this.direction = EAST;
        else if (this.direction === EAST) this.direction = NORTH;
    }

    turnRight() {
        if (this.direction === NORTH) this.direction = EAST;
        else if (this.direction === EAST) this.direction = SOUTH;
        else if (this.direction === SOUTH) this.direction = WEST;
        else if (this.direction === WEST) this.direction = NORTH;
    }

    moveForward() {
        if (this.direction === NORTH) this.y++;
        else if (this.direction === EAST) this.x++;
        else if (this.direction === SOUTH) this.y--;
        else if (this.direction === WEST) this.x--;
    }

    moveBackward() {
        if (this.direction === NORTH) this.y--;
        else if (this.direction === EAST) this.x--;
        else if (this.direction === SOUTH) this.y++;
        else if (this.direction === WEST) this.x++;
    }
}

module.exports = { Robot };