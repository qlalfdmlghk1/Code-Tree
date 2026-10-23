const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const commands = input[0];

// Please Write your code here.
let dx = [1, 0, -1, 0],dy = [0, -1, 0, 1];

let cx = 0,cy = 0;
let direction = 3;

for (let command of commands) {
  if (command === 'L') {
    direction = (direction - 1 + 4) % 4;
  } else if (command === 'R') {
    direction = (direction + 1) % 4;
  } else {
    cx += dx[direction];
    cy += dy[direction];
  }
}

console.log(cx, cy);
