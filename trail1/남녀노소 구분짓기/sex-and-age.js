const fs = require("fs")
let [sex,age] = fs.readFileSync(0).toString().trim().split("\n").map(Number)

if (sex === 1) {
    if (age >= 19) console.log('WOMAN')
    else console.log('GIRL')
}
else {
    if (age >= 19) console.log('MAN')
    else console.log('BOY')
}
