"use strict";

const marks = [5, 4, 6, 7, 9];

const getPlusOneMark = (mark) => mark + 1;
const inflatedMarks = marks.map(getPlusOneMark);
console.log(inflatedMarks);
