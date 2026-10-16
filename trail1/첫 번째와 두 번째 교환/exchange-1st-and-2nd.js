const fs = require("fs")
let word = fs.readFileSync(0).toString().trim()

let [first,second] = [word[0],word[1]]

word = word.split("")

for (let i = 0; i < word.length; i++) {
    if (word[i] === first) word[i] = second;
    else if (word[i] === second) word[i] = first;
}

console.log(word.join(''))
