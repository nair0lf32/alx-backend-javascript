/* eslint-disable linebreak-style */
const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  fs.stat(path, (error) => {
    if (error) {
      throw new Error('Cannot load the database');
    }
  });
  const stream = fs.createReadStream(path);
  const rl = readline.createInterface({ input: stream });
  const data = [];
  rl.on('line', (row) => {
    data.push(row.split(','));
  });
  rl.on('close', () => {
    console.log(`Number of students: ${data.length - 1}`);
    const cs = [];
    const swe = [];
    data.forEach((element) => {
      if (element[element.length - 1] === 'CS') {
        cs.push(element[0]);
      } else if (element[element.length - 1] === 'SWE') {
        swe.push(element[0]);
      }
    });
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
    console.log(`Number of students in SWS: ${swe.length}. List: ${swe.join(', ')}`);
  });
}

module.exports = countStudents;
