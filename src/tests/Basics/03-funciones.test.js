import { getUser, getUsuarioActivo } from "../../Basics/03-funciones"

describe('Pruebas en 03-funciones', () => {
    
    test('getUser debe retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'usuario123'
        }

        const user = getUser();

        expect( user ).toEqual( userTest );

    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const userActiveTest = {
            uid:'ABC567',
            username: 'Juan',

        }

        const userActive = getUsuarioActivo(userActiveTest.username);

        expect( userActive ).toEqual( userActiveTest );

    })
    
    

})
