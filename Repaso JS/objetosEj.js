var jugadora = {
  fuerza: 1,
  incrementarFuerza: function () {
    this.fuerza += 1;
    //con el += activas el acumulador. Se puede hacer también this.fuerza=this.fuerza+1
  },
  consultarFuerza: function () {
    console.log("La jugadora tiene una fuerza de " + this.fuerza);
  },
};
jugadora.consultarFuerza();
jugadora.incrementarFuerza();
jugadora.consultarFuerza();

//node objetosEj.js
