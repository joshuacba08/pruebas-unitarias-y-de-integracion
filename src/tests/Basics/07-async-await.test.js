import { getImagen } from "../../Basics/07-async-await"

describe('Pruebas con Async-await y fetch', () => {
    
    test('Debe de retornar el url de la imagen', async() => {
        
        const url = await getImagen();

        console.log(url.includes('http://'));

        expect( url.includes('https://') ).toBe( true );

    })
    
})
