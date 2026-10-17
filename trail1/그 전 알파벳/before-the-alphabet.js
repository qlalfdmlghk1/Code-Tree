const fs = require("fs")
let w = fs.readFileSync(0).toString().trim()

if (w === 'a') console.log('z')
else console.log(String.fromCharCode(w.charCodeAt(0) - 1))