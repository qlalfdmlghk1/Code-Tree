const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const users = [];

class Spy {
    constructor(codeName, score) {
        this.codeName = codeName;
        this.score = score;
    }
}

for (let i = 0; i < 5; i++) {
    const [codename, score] = input[i].split(' ');
    users.push(new Spy(codename, parseInt(score, 10)));
}

// Please Write your code here.

// 점수가 가장 낮은 요원의 위치를 찾습니다.
let minIdx = 0;
for (let i = 1; i < 5; i++) {
    if (users[minIdx].score > users[i].score) {
        minIdx = i;
    }
}

// 점수가 가장 낮은 요원의 코드네임과 점수를 출력합니다.
console.log(users[minIdx].codeName, users[minIdx].score);