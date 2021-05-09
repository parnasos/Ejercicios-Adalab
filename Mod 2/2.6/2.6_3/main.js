'use strict';

const adalaber1 = {}
    adalaber1.name= 'Susana',
    adalaber1.age= 34,
    adalaber1.job= 'peridiosta',
    adalaber1.run= phrase => `${phrase}`,
    adalaber1.distance= 50,
    adalaber1.runAMarathon= phrase => `${phrase}`,
    adalaber1.showBio= function () {
        return `Mi nombre es ${this.name} tengo ${this.age} años y soy ${this.job}`};
 
console.log(adalaber1.showBio());
  
const adalaber2 = {}
    adalaber2.name= 'Rocío',
    adalaber2.age= 25,
    adalaber2.job= 'actriz',
    adalaber2.run= phrase => `${phrase}`,
    adalaber2.distance= 50,
    adalaber2.runAMarathon= phrase => `${phrase}`,
    adalaber2.showBio= function () {
        return `Mi nombre es ${this.name} tengo ${this.age} años y soy ${this.job}`};
 
console.log(adalaber2.showBio());