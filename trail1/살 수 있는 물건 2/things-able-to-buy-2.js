const fs = require("fs")
let N = Number(fs.readFileSync(0).toString().trim())

if (N >= 3000) console.log('book');
else if (N >= 1000) console.log('mask');
else if (N >= 500) console.log('pen');
else console.log('no')