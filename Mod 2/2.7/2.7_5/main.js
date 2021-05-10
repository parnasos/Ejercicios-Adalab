'use strict';
 const numbers = [1,3,5,7,9];
 numbers[5] = 11;
 numbers[6] = 8;
 
 let acc = 0;
for (let i=0; i<numbers.length; i++) {
    acc+=numbers[i]; //acc=acc+numers[i]
    
}
let total = acc/numbers.length;
console.log("La media es " +  total);


function average (numbers) {
    let acc = 0;
    for (let i=0; i<numbers.length; i++) {
        acc+=numbers[i]; 
    }
    let totalave = acc/numbers.length;
return `La media es ${totalave}`
}

console.log(average(numbers));