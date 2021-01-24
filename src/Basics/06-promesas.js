import { getHeroeById } from "./05-imp-exp";


export const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById( id );
            if (heroe) {
                resolve(heroe); 
            } else {
                reject('No se pudieron obtener los datos');
            }
            

        }, 500)
    });

}
