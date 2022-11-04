//Ejercicio representacion de una clase
class Persona{
  constructor(nombre,apellido){
    this.nombre = nombre;
    this.apellido = apellido;

  }

}
mostrarNombrePersona(){
  console.log('Nombre: ',this.nombre);
}

let persona = new Persona('Javier','Rodriguez');

console.log(persona);
persona.mostrarNombrePersona();
document.write("hola pepe");
