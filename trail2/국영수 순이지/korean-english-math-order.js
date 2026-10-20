const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const rawStudentData = input.slice(1, n + 1)

// Please Write your code here.
class Student {
  constructor(name, korean, english, math) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
  }
}

const students = []
for (const rowStudent of rawStudentData) {
  let rStudent = rowStudent.split(" ")
  students.push(
    new Student(rStudent[0], Number(rStudent[1]), Number(rStudent[2]), Number(rStudent[3]))
  )
}

students.sort((a,b) => {
    if (a.korean === b.korean) {
      if (a.english === b.english) {
        return b.math - a.math;
      }
      return b.english - a.english
    }
    return b.korean - a.korean;
    }
)

for (let student of students) {
  console.log(student.name, student.korean, student.english, student.math)
}