const  fs = require("fs")
let [person1,person2,person3] = fs.readFileSync(0).toString().trim().split("\n")

let [firstSymptom,firstTemp] = person1.split(" ")
let [secondSymptom,secondTemp] = person2.split(" ")
let [thirdSymptom,thirdTemp] = person3.split(" ")

let cnt = 0;

if (firstSymptom === 'Y' && firstTemp >= 37) cnt += 1;
if (secondSymptom === 'Y' && secondTemp >= 37) cnt += 1;
if (thirdSymptom === 'Y' && thirdTemp >= 37) cnt += 1;

if (cnt >= 2) console.log('E')
else console.log('N')