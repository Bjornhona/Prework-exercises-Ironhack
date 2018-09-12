var theRover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [0, 0]
}
var crazyRover = {
  direction: 'N',
  x: 10,
  y: 10
}
var badRover = {
  direction: 'W',
  x: 0,
  y: 10
}
var hunterRover = {
  direction: 'N',
  x: 4,
  y: 4
}

var grids = [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O', ' ', ' '],
  [' ', 'O', ' ', ' ', ' ', ' ', 'O', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'O', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'O'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'O', ' ', ' ', ' ', 'O', ' ', ' ', ' ']
];

// ======================

// ======================

function turnLeft(rover){
  switch (rover.direction) {
   case 'N':
      rover.direction = 'W';
      break;
   case 'S':
      rover.direction ='E';
      break;
   case 'E':
      rover.direction = 'N';
      break;
   case 'W':
      rover.direction = 'S';
      break;
    }
  if(rover === theRover) {
    console.log('turnLeft was called!');
    console.log('The rover is now facing ' + rover.direction);
  }
}

function turnRight(rover) {
  switch (rover.direction) {
   case 'N':
      rover.direction = 'E';
      break;
   case 'S':
      rover.direction ='W';
      break;
   case 'E':
      rover.direction = 'S';
      break;
   case 'W':
      rover.direction = 'N';
      break;
    }
  if (rover === theRover) {  
    console.log("turnRight was called!");
    console.log('The Rover is now facing ' + rover.direction);
  }
}

function moveForward(rover){
  var xBefore = rover.x;
  var yBefore = rover.y;
    switch(rover.direction) {
      case 'N':
        rover.y--;
        break;
      case 'S':
        rover.y++;
        break;
      case 'E':
        rover.x++;
        break;
      case 'W':
        rover.x--;
        break;
    }
  var xAfter = rover.x;
  var yAfter = rover.y;
  testOutOfGrid(xBefore, yBefore, xAfter, yAfter, rover);
  if (rover === theRover) {
    console.log("moveForward was called");
    testIfObstacles(xBefore, yBefore, xAfter, yAfter, rover);
    rover.travelLog += '; ' + [rover.x, rover.y];
    console.log("The Rover coordinates are " + rover.x + ", " + rover.y);
  }
}

function moveBackward(rover){
  var xBefore = rover.x;
  var yBefore = rover.y;
    switch(rover.direction) {
      case 'N':
        rover.y++;
        break;
      case 'S':
        rover.y--;
        break;
      case 'E':
        rover.x--;
        break;
      case 'W':
        rover.x++;
        break;
    }
  var xAfter = rover.x;
  var yAfter = rover.y;
  testOutOfGrid(xBefore, yBefore, xAfter, yAfter, rover);
  if (rover === theRover) {
    console.log("moveBackward was called");
    testIfObstacles(xBefore, yBefore, xAfter, yAfter, rover);
    rover.travelLog += '; ' + [rover.x, rover.y];
    console.log("The Rover coordinates are " + rover.x + ", " + rover.y);
  }
}

function commandList (commands) {
  if (validateInput(commands)) {
    for (var i = 0; i < commands.length; i++) {
      if (commands[i] === 'f') {
        moveForward(theRover);
      } else if (commands[i] === 'r') {
        turnRight(theRover);
      } else if (commands[i] === 'l') {
        turnLeft(theRover);
      } else if (commands[i] === 'b') {
        moveBackward(theRover);
      }
      randomMovement(crazyRover);
      randomMovement(badRover);
      randomMovement(hunterRover);
      if ((crazyRover.x === theRover.x && crazyRover.y === theRover.y) || (badRover.x === theRover.x && badRover.y === theRover.y) || (hunterRover.x === theRover.x && hunterRover.y === theRover.y)) {
        console.log('Oh noooo, you just smashed into another Rover! End of game.');
        break;
      }
    }
    console.log('The Rover has visited the following coordinates: ' + theRover.travelLog);
  } else {
    console.log('The Rover only understands the commands f, b, r or l. Try to correct the error.');
  }
}

function testOutOfGrid (xBefore, yBefore, xAfter, yAfter, rover) {
  if ((xAfter < 0 || yAfter < 0 || xAfter > 9 || yAfter > 9) && (rover === theRover)) {
    console.log('Ooops, the Rover is trying to leave the grid! This move is cancelled.');
  }
  if (xAfter < 0 || yAfter < 0 || xAfter > 9 || yAfter > 9) {
    rover.x = xBefore;
    rover.y = yBefore;
  }
}

function validateInput (commands) {
  var counter = [];
  for (var j = 0; j < commands.length; j++) {
    if ((commands[j] !== 'f') && (commands[j] !== 'b') && (commands[j] !== 'r') && (commands[j] !== 'l')) {
      counter.push(false);
    } else counter.push(true);
  }
  if (counter.indexOf(false) < 0) {
    return true;
  } else return false;
}

function testIfObstacles (xBefore, yBefore, xAfter, yAfter, rover) {
  if (xAfter >= 0 && yAfter >= 0 && xAfter <= 9 && yAfter <= 9) {
    if (grids[xAfter][yAfter] === 'O') {
        rover.x = xBefore;
        rover.y = yBefore;
        console.log('Ooops, there was an obstacle and the Rover could not move.');
    }
  }
}

function randomMovement (rover) {
  var randomNumber = Math.floor(Math.random()*4);
  var arrayOfMovements = ['f', 'b', 'r', 'l'];
  var randomMove = arrayOfMovements[randomNumber];
  moveRovers(randomMove, rover);
}

function moveRovers (command, rover) {
  if (command === 'f') {
    moveForward(rover);
  } else if (command === 'r') {
    turnRight(rover);
  } else if (command === 'l') {
    turnLeft(rover);
  } else if (command === 'b') {
    moveBackward(rover);
  }
}

commandList('rfrfrfflfflfrflfffffrffflfffrfffflffff');