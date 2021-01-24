import { getHeroeById, getHeroesByOwner } from "../../Basics/05-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de "Heroes"', () => {
    
    test('Debe retornar un heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( h => h.id === id);

        expect( heroe ).toEqual( heroeData );

    })

    test('Debe retornar undefined si heroe no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );

    })

    test('Debe retornar un arreglo con lo heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        const heoresDC = ([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]);

        expect(heroes).toEqual( heoresDC );

    })

    test('Debe retornar un arreglo con lo heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        const heoresDC = ([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
            
        ]);

        expect(heroes).toEqual(heoresDC);
        expect( heroes.length ).toBe(2);

    })
    
})
