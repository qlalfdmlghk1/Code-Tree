const fs = require("fs")
let word = fs.readFileSync(0).toString().trim()

let standard = word[0];
let cnt = 0;
let answer = "";

for (const w of word) {
  if (w === standard) {
    cnt++;
  }
  else {
    answer += standard + cnt;
    standard = w;
    cnt = 1;
  }
}
answer += standard + cnt;

console.log(answer.length)
console.log(answer)