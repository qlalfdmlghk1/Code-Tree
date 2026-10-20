const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const students = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(" ").map(Number);
    students.push([height, weight, i]);
}

// Please Write your code here.
class Student {
  constructor(height,weight,num) {
    this.height = height;
    this.weight = weight;
    this.num = num;
  }
}

let sortedStudent = []
for (let student of students) {
  sortedStudent.push(new Student(student[0],student[1],student[2]))
}

sortedStudent.sort((a,b) => b.height - a.height || b.weight - a.weight || a.num - b.num)

for (let ss of sortedStudent) {
  console.log(ss.height, ss.weight, ss.num)
}