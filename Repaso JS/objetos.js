var persona = {
  nombre: "Laura",
  edad: 35,
  saludar: function () {
    console.log(`Muy buenas ${this.nombre}`);
    // O bien ("Hola" + this.nombre)
  },
};

console.log(persona);
console.log(persona.nombre);
console.log(persona.saludar());
//la función saludar no devuelve valor, solo un console.log. POr eso pinta Undefined. Para que no nos figure hay que ejecutar la función.
persona.saludar();
