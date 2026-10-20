const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

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

// Please Write your code here.
const MAX_T = 100000;
let posA = Array(MAX_T + 1).fill(0);
let posB = Array(MAX_T + 1).fill(0);

let timeA = 1;
for (let ma of movesA) {
    const [d,t] = ma
    for (let j = 0; j < Number(t); j++) {
        posA[timeA] = posA[timeA - 1] + (d === 'R'? 1 : -1)
        timeA++;
    }
}

let timeB = 1;
for (let mb of movesB) {
    const [d,t] = mb
    for (let j = 0; j < Number(t); j++) {
        posB[timeB] = posB[timeB - 1] + (d === 'R'? 1 : -1)
        timeB++;
    }
}

let ans = -1
for (let i = 1; i < timeA; i++) {
    if (posA[i] === posB[i]) {
        ans = i;
        break;
    }
}

console.log(ans)