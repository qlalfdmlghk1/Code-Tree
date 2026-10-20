const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const students = []
for (let i = 0; i < 5; i++) {
  const [name, heightStr, weightStr] = input[i].split(' ')
  const height = Number(heightStr)
  const weight = Number(weightStr)
  students.push({ name, height, weight })
}

// Please Write your code here.
class Student {
  constructor(name, height, weight) {
    this.name = name
    this.height = height
    this.weight = weight
  }
}

const sortedStudent = []

for (let student of students) {
  sortedStudent.push(new Student(student.name, student.height, student.weight))
}

sortedStudent.sort((a,b) => a.name.localeCompare(b.name))

console.log('name')
for (let s of sortedStudent) {
  console.log(s.name, s.height, s.weight.toFixed(1))
}

sortedStudent.sort((a,b) => b.height - a.height)

console.log('')
console.log('height')
for (let s of sortedStudent) {
  console.log(s.name, s.height, s.weight.toFixed(1))
}