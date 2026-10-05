const fs = require("fs")
let [person1,person2] = fs.readFileSync(0).toString().split("\n")

let [age1,sex1] = person1.split(" ")
let [age2,sex2] = person2.split(" ")

if ((Number(age1) >= 19 && sex1 === 'M') || (Number(age2) >= 19 && sex2 === 'M')) console.log(1)
else console.log(0)