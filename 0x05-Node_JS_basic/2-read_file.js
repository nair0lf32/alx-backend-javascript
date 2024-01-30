/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable guard-for-in */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split(/\r?\n/);

    // Remove empty lines
    const nonEmptyLines = lines.filter((line) => line.trim() !== '');

    if (nonEmptyLines.length === 0) {
      throw new Error('No valid students found in the database');
    }

    console.log(`Number of students: ${nonEmptyLines.length}`);

    const fields = {};
    const students = {};

    for (const line of nonEmptyLines) {
      const student = line.split(',');

      if (student.length !== 4) {
        throw new Error('Invalid data format in the database');
      }

      if (!fields[student[3]]) {
        fields[student[3]] = [];
      }

      fields[student[3]].push(student[1]);

      students[student[0]] = {
        id: student[0],
        firstName: student[1],
        lastName: student[2],
        field: student[3],
      };
    }

    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }

    return students;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
