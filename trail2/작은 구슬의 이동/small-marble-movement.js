const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ');
r = Number(r);
c = Number(c);

// Please Write your code here.
direction = {
  R: 0,
  D: 1,
  U: 2,
  L: 3
};

let moveDir = direction[d];

let dr = [0, 1, -1, 0],
  dc = [1, 0, 0, -1];

let [curR, curC] = [r - 1, c - 1];
let [nexR, nexC] = [curR, curC];

function isRange(r, c) {
  if (r >= 0 && r < n && c >= 0 && c < n) return true;
  return false;
}

for (let i = 0; i < t; i++) {
  nexR = curR + dr[moveDir];
  nexC = curC + dc[moveDir];
  if (isRange(nexR, nexC)) {
    [curR, curC] = [nexR, nexC];
  } else {
    moveDir = 3 - moveDir;
  }
}

console.log(curR + 1, curC + 1);
