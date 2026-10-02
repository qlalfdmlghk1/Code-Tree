let [fit,mi] = [30.48,160934]
let [a,b] = [9.2,1.3]

let answer1 = (a * fit).toFixed(1)
let answer2 = (b * mi).toFixed(1)

console.log(`${a}ft = ${answer1}cm`)
console.log(`${b}mi = ${answer2}cm`)