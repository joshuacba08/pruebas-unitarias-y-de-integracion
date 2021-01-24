import { retornaArreglo } from "../../Basics/04-desestructuracion-arrays"

describe('Pruebas en desestructuracion-arrays', () => {
    test('Debe de retornar un string y un numero', () => {
        // const arr = retornaArreglo();
        const [letras, numeros] = retornaArreglo();
        // expect( arr ).toEqual( ['ABC',123] );
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect(typeof numeros ).toBe( 'number' );

    })
     
})
