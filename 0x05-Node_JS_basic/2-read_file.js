/* eslint-disable linebreak-style */
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.filter((line) => line).map((line) => line.split(',')).slice(1);
    const nStudents = students.length;
    const csStudents = students.filter((student) => student[3] === 'CS').map((student) => student[0]);
    const sweStudents = students.filter((student) => student[3] === 'SWE').map((student) => student[0]);
    const nCsStudents = csStudents.length;
    const nSweStudents = sweStudents.length;
    const message = `Number of students: ${nStudents}\nNumber of students in CS: ${nCsStudents}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${nSweStudents}. List: ${sweStudents.join(', ')}`;
    console.log(message);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
