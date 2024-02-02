/* eslint-disable linebreak-style */
const fs = require('fs');
const readline = require('readline');

async function countStudents(path) {
  fs.stat(path, (error) => {
    if (error) {
      throw new Error('Cannot load the database');
    }
  });
  const stream = await fs.createReadStream(path);
  const p = new Promise((resolve) => {
    const rl = readline.createInterface({ input: stream });
    const data = [];
    rl.on('line', (row) => {
      data.push(row.split(','));
    });
    rl.on('close', () => {
      const cs = [];
      const swe = [];
      data.forEach((element) => {
        if (element[element.length - 1] === 'CS') {
          cs.push(element[0]);
        } else if (element[element.length - 1] === 'SWE') {
          swe.push(element[0]);
        }
      });
      const display = () => {
        let output = `Number of students: ${data.length - 1}\n`;
        output += `Number of students in CS: ${cs.length}. List: ${cs.join(', ')}\n`;
        output += `Number of students in SWS: ${swe.length}. List: ${swe.join(', ')}`;
        console.log(output);
      };

      resolve(display());
    });
  });
  return p;
}

module.exports = countStudents;
