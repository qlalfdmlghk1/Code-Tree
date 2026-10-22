const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.
let dx = [1,-1,0,0]
let dy = [0,0,1,-1]

let cx = 0, cy = 0
for (let m of moves) {   
    let [d,c] = m.split(" ");
    c = Number(c)
    if (d === 'N') {
        cx = cx + dx[2] * c
        cy = cy + dy[2] * c
    }
    else if (d === 'S') {
        cx = cx + dx[3] * c
        cy = cy + dy[3] * c
    }
    if (d === 'W') {
        cx = cx + dx[1] * c
        cy = cy + dy[1] * c
    }
    if (d === 'E') {
        cx = cx + dx[0] * c
        cy = cy + dy[0] * c
    }
}

console.log(cx,cy)