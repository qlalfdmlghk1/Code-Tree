const fs = require("fs")
let input = fs.readFileSync(0).toString().trim().split("\n")

let [s,q] = input[0].split(' ')
word = s.split('')

for (let i = 1; i < Number(q)+1; i++) {
    let [n,a,b] = input[i].split(' ')

    if (n === '1') {
        let [first,second] = [word[Number(a)-1],word[Number(b)-1]];
        [word[Number(a)-1],word[Number(b)-1]] = [second,first];
    }
    else if (n === '2') {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === a) word[i] = b
        }
    }
    console.log(word.join(''))
}