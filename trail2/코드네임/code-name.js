const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

class User {
    constructor(codeName,score) {
        this.codeName = codeName;
        this.score = score;
    }
}

const users = [];

for (let i = 0; i < 5; i++) {
    const [codename, score] = input[i].split(' ');
    users.push(new User(codename,Number(score)));
}

// Please Write your code here.
let minIdx = 0

for (let i = 1; i < 5; i++) {
    if (users[i].score < users[minIdx].score) minIdx = i;
}

console.log(users[minIdx].codeName,users[minIdx].score)