const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const grid = input.slice(1).map(line => line.split(' ').map(Number));

// Please Write your code here.
function isRange(x,y) {
  if (x >= 0 && x < n && y >= 0 && y < n) return true;
  return false;
}

let dx = [1,0,-1,0], dy = [0,-1,0,1]

function getCnt(x,y) {
  let [nexX,nexY] = [0,0];
  let cnt = 0;
  for (let i = 0; i < 4; i++) {
    [nexX,nexY] = [x + dx[i],y + dy[i]]
    if (isRange(nexX,nexY) && grid[nexY][nexX] === 1) {
      cnt++;
    }
  }
  return cnt;
}

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (getCnt(j,i) >= 3) answer++;
  }
}

console.log(answer)