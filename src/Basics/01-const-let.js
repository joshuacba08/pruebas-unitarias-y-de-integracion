//Variables y constantes

const nombre = "Josue";
const apellido = "Oroya";

let valorDado = 5;
valorDado = 4;
console.log(nombre, apellido, valorDado);

//var no se de usar más por cuestiones del scope...
if (true) {
    const nombre = "Peter";
    console.log(nombre);
}

console.log (valorDado);