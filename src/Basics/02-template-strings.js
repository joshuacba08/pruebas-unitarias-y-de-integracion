console.log('Hola Mundo');

const nombre = 'Josué'
const apellido = 'Oroya';

// const nombreCompleto = nombre + ' ' + apellido;
// console.log(nombreCompleto);

//Gracias a los templates strings no debemos hacer más este tipo de concatenaciones
const nombreCompleto = `${nombre} ${apellido}`;
// console.log(nombreCompletoTemplate);

export function getSaludo(nombre = 'Juan'){
    return 'Hola ' + nombre;
}

// console.log(`Este es un texto: ${getSaludo()}`);