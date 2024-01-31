/* eslint-disable linebreak-style */
const fs = require('fs');

function countStudents(path) {
  const promise = (resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(Error('Cannot load the database'));
      if (data) {
        const lines = data.split('\n');
        const students = lines.filter((line) => line).map((line) => line.split(',')).slice(1);
        const nStudents = students.length;
        const csStudents = students.filter((student) => student[3] === 'CS').map((student) => student[0]);
        const sweStudents = students.filter((student) => student[3] === 'SWE').map((student) => student[0]);
        const nCsStudents = csStudents.length;
        const nSweStudents = sweStudents.length;
        const message = `Number of students: ${nStudents}\nNumber of students in CS: ${nCsStudents}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${nSweStudents}. List: ${sweStudents.join(', ')}`;
        console.log(message);
        resolve(message);
      }
    });
  };
  return new Promise(promise);
}

module.exports = countStudents;
