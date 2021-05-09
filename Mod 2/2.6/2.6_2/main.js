'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'peridiosta',
    run: phrase => `${phrase}`,
    distance: 50,
    runAMarathon: phrase => `${phrase}`,
    

}
console.log(`${adalaber1.run(`Estoy corriendo`)}`);
  
console.log(`${adalaber1.runAMarathon(`Estoy corriendo un maratón de ${adalaber1.distance} kilometros`)}`);
