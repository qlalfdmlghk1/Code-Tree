const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

// Please Write your code here.
class Point {
    constructor(num,distance) {
        this.num = num;
        this.distance = distance;
    }
}

let dots = []

for (let i = 0; i < n; i++) {
    dots.push(new Point(i, Math.abs(points[i][0]) + Math.abs(points[i][1])))
}

dots.sort((a,b) => a.distance - b.distance || a.num - b.num) 

for (let dot of dots) {
    console.log(dot.num + 1)
}