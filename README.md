# Martian Robots

## Prerequisites

Requires npm and node

## Commands

Install: `npm install`

To run the programme from the root directory - `./bin/martian-robots.js < inputs`

Or `npm install -g .`

`martian-robots < inputs`

To move to an output file run 

* `./bin/martian-robots.js < inputs > output`

* `diff output expected_output`

## Testing

To run mocha tests: `npm test`

Some tests have been written to test some happy cases, and a few on the edge (literally)

## Assumptions

* Assuming commands will always be in valid format as described, so no error handling

## Next Steps

* Some more tests
* Error Handling
* Possibly some refactoring (I don't like how the grid can control the robots)
* When a robot gets lost, I have to make it move backwards if there's a scent. This should be checked before making the move. 
* Adding a UI
