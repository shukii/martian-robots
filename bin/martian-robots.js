#!/usr/bin/env node

"use strict";
const readline = require('readline');

const Grid = require('./grid').Grid;
const Robot = require('./robot').Robot;

// Set up the stdin reading
const rl = readline.createInterface({
    input: process.stdin
});

let grid, robot;

rl.on('line', (line) => {
    // Get the command written
    const lineSplit = line.split(" ");

    if (lineSplit.length === 2) {
        // Create a grid
        grid = new Grid(lineSplit[0], lineSplit[1]);
    }

    if (lineSplit.length === 3) {
        // Create a robot
        robot = new Robot(lineSplit[0], lineSplit[1], lineSplit[2]);
    }

    if (lineSplit.length === 1) {
        // Make the robot move
        const movements = [...lineSplit[0]];
        grid.moveRobot(robot, movements);
    }
});

