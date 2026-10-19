const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
let index = 0;
const [n, k, t] = input[index++].split(' ');
const words = [];
for (let i = 0; i < Number(n); i++) {
    words.push(input[index++]);
}
// Please Write your code here.
let filteredWord = []

for (let word of words) {
    if (word.slice(0,t.length) === t) filteredWord.push(word)
}

filteredWord.sort()

console.log(filteredWord[k-1])