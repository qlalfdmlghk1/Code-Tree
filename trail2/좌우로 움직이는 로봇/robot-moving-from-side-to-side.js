const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const movesA = input.slice(1, 1 + n);
const movesB = input.slice(1 + n, 1 + n + m);

// Please Write your code here.
let timeTableA = [];
let timeTableB = [];

let curA = 0;
timeTableA.push(curA)
for (let ma of movesA) {
  let [t, d] = ma.split(' ');
  t = Number(t);
  if (d === 'R') {
    for (let i = 1; i <= t; i++) {
      timeTableA.push(timeTableA[curA] + i);
    }
  } else if (d === 'L') {
    for (let i = 1; i <= t; i++) {
      timeTableA.push(timeTableA[curA] - i);
    }
  }
  curA += t;
}

let curB = 0;
timeTableB.push(curB)
for (let mb of movesB) {
  let [t, d] = mb.split(' ');
  t = Number(t);
  if (d === 'R') {
    for (let i = 1; i <= t; i++) {
      timeTableB.push(timeTableB[curB] + i);
    }
  } else if (d === 'L') {
    for (let i = 1; i <= t; i++) {
      timeTableB.push(timeTableB[curB] - i);
    }
  }
  curB += t;
}

if (curA < curB) {
    for (let i = 0; i < curB-curA; i++) {
        timeTableA.push(timeTableA[curA])
    }
} else if (curB < curA) {
    for (let i = 0; i < curA-curB; i++) {
        timeTableB.push(timeTableB[curB])
    }
}

let cnt = 0;
for (let i = 1; i <= Math.max(curA,curB); i++) {
  if (timeTableA[i] === timeTableB[i]) {
    if (timeTableA[i-1] !== timeTableB[i-1]) {
        cnt++;
    }
  } 
}

console.log(cnt);
