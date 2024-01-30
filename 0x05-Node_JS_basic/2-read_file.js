/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
const fs = require('fs');

function countStudents(path) {
  path = process.argv[2];
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split(/\r?\n/);
    let count = lines.length;
    if (lines[lines.length - 1] === '') {
      count -= 1;
    }
    console.log(`Number of students: ${count}`);
    const fields = {};
    const students = {};
    for (const line of lines) {
      if (line !== lines[0]) {
        const student = line.split(',');
        if (!fields[student[3]]) {
          fields[student[3]] = [];
        }
        fields[student[3]].push(student[0]);
        students[student[0]] = {
          id: student[0],
          firstName: student[1],
          lastName: student[2],
          field: student[3],
        };
      }
    }
    console.log(`Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(', ')}`);
    console.log(`Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(', ')}`);
    return students;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
