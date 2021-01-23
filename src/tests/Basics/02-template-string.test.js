import { getSaludo } from "../../Basics/02-template-strings";

describe('Pruebas en 02-template-string.js', () => {
    
    test('getSaludo debe retornar hola Josué Oroya', () => {
        
        const nombre = 'Josué Oroya';

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre);


    })

    test('getSaludo debe retornar "Hola Juan" si no hay argumento nombre', () => {
        
        const saludo = getSaludo();

        expect( saludo ).toBe('Hola Juan');

    })
    
    

})
