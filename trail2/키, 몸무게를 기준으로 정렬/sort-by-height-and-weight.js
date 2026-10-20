const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const records = [];
for (let i = 1; i <= n; i++) {
  const [name, height, weight] = input[i].split(" ");
  records.push([name, Number(height), Number(weight)]);
}

// Please Write your code here.
class Person {
    constructor(name,height,weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
}

let people = []

for (let record of records) {
    people.push(new Person(record[0],record[1],record[2]))
}

people.sort((a,b) => a.height - b.height || b.weight - a.weight)

for (let p of people) {
    console.log(p.name,p.height,p.weight)
}