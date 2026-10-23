const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ");
r = Number(r);
c = Number(c);

// Please Write your code here.
direction = {
  'R': 0,
  'D': 1,
  'L': 2,
  'U': 3,
}

let dr = [0,1,0,-1], dc = [1,0,-1,0]

let [curR,curC] = [r-1,c-1]
let [nexR,nexC] = [curR,curC]

for (let i = 0; i < t; i++) {
  nexR = curR + dr[direction[d]];
  nexC = curC + dc[direction[d]];
  if (d === 'L') {
    if (nexC < 0) {
      d = 'R';
      nexC = 0;
    }
  }
  else if (d === 'R') {
    if (nexC >= n) {
      d = 'L';
      nexC = n-1;
    }
  }
  else if (d === 'U') {
    if (nexR < 0) {
      d = 'D';
      nexR = 0;
    }
  }
  else if (d === 'D') {
    if (nexR >= n) {
      d = 'U';
      nexR = n-1;
    }
  }
  [curR,curC] = [nexR,nexC]
}

console.log(curR+1,curC+1)