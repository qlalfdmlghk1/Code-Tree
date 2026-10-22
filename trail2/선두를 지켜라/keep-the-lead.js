const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.
let timeTableA = Array(1000001).fill(0)
let timeTableB = Array(1000001).fill(0)

let curA = 0
for (let ad of aData) {
  let [v,t] = ad;
  for (let i = 1; i <= t; i++) {
    timeTableA[curA+i] = timeTableA[curA] + (v*i)
  }
  curA += t
}

let curB = 0
for (let bd of bData) {
  let [v,t] = bd;
  for (let i = 1; i <= t; i++) {
    timeTableB[curB+i] = timeTableB[curB] + (v*i)
  }
  curB += t
}

let cnt = 0
let leader = 'N'
for (let i = 1; i <= curA; i++) {
  let cur = 'N';
  if (timeTableA[i] > timeTableB[i]) cur = 'A'
  else if (timeTableA[i] < timeTableB[i]) cur = 'B'

  if (cur === 'N') continue;
  if (leader !== 'N' && leader !== cur) cnt++;
  leader = cur;
}

console.log(cnt)