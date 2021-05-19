"use strict";

const times = [56, 9, 45, 28, 35];

const result = times.reduce((acc, number) => acc + number);
const media = result / times.length;
console.log(media);
