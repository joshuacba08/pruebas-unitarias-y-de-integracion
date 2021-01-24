import heroes from "../data/heroes";

/*usamos find() */ 
const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);
// console.log( getHeroeById(2) );

/*usamos filtrer */
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log( getHeroesByOwner('DC') );

export {
    getHeroeById,
    getHeroesByOwner,
}