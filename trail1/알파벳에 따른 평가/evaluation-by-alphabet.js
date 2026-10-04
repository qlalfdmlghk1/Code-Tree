const fs = require("fs")
let word = fs.readFileSync(0).toString().trim()

if (word === 'S') console.log('Superior');
else if (word === 'A') console.log('Excellent');
else if (word === 'B') console.log('Good');
else if (word === 'C') console.log('Usually');
else if (word === 'D') console.log('Effort');
else console.log('Failure');