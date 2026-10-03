const fs = require("fs")
let [mm,dd,yyyy] = fs.readFileSync(0).toString().trim().split("-")
console.log(`${yyyy}.${mm}.${dd}`)