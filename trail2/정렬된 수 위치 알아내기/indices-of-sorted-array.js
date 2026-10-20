const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
class Num {
    constructor(idx,number) {
        this.idx = idx;
        this.number = number;
    }
}

let sortedNum = []

for (let i = 0; i < n; i++) {
    sortedNum.push(new Num(i,arr[i]))
}

sortedNum.sort((a,b) => a.number - b.number)

let answer = Array(n).fill(0)
for (let i = 0; i < n; i++) {
    answer[sortedNum[i].idx] = i + 1
}

console.log(answer.join(' '))