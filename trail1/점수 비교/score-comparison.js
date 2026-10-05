const fs = require("fs")
let [scoreA,scoreB] = fs.readFileSync(0).toString().trim().split("\n")
let [mathA,englishA] = scoreA.split(" ").map(Number)
let [mathB,englishB] = scoreB.split(" ").map(Number)

if (mathA > mathB && englishA > englishB) console.log(1);
else console.log(0);
