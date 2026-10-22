const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let line = 1;
const movesA = [];
for (let i = 0; i < n; i++) {
  const [d, t] = input[line++].split(' ');
  movesA.push([d, Number(t)]);
}
const movesB = [];
for (let i = 0; i < m; i++) {
  const [d, t] = input[line++].split(' ');
  movesB.push([d, Number(t)]);
}

timeTableA = Array(1000001).fill(Infinity);
timeTableB = Array(1000001).fill(Infinity);

let curA = 0;
timeTableA[curA] = 0;
for (let ma of movesA) {
  let [d, t] = ma;
  if (d === 'R') {
    for (let i = 1; i <= t; i++) {
      timeTableA[curA + i] = timeTableA[curA] + i;
    }
  } else if (d === 'L') {
    for (let i = 1; i <= t; i++) {
      timeTableA[curA + i] = timeTableA[curA] - i;
    }
  }
  curA += t;
}

let curB = 0;
timeTableB[curB] = 0;
for (let mb of movesB) {
  let [d, t] = mb;
  if (d === 'R') {
    for (let i = 1; i <= t; i++) {
      timeTableB[curB + i] = timeTableB[curB] + i;
    }
  } else if (d === 'L') {
    for (let i = 1; i <= t; i++) {
      timeTableB[curB + i] = timeTableB[curB] - i;
    }
  }
  curB += t;
}

let answer = -1;
for (i = 1; i < timeTableB.length; i++) {
  if (timeTableA[i] === Infinity) break;

  if (timeTableA[i] === timeTableB[i]) {
    answer = i;
    break;
  }
}

console.log(answer);
