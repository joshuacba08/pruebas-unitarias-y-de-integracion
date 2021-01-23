import { getHeroeById } from "./Basics/08-imp-exp";


// const promesa = new Promise((resolve, reject) => {
//     setTimeout ( () => {
//         const heroe = getHeroeById(2);
//         // console.log(heroe);
//         // resolve(heroe);
//         reject('No se puedieron obtener los datos del héroe');
    
//     }, 3000 )
// });
    
  
// promesa.then( (heroe)=>{
//     console.log('heroe', heroe)
// })

// .catch ( err => console.warn( err ) );

const getElementByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById( id );
            if (heroe) {
                resolve(heroe); 
            } else {
                reject('No se pudieron obtener los datos');
            }
            
            // reject('No se puedieron obtener los datos del héroe');

        }, 3000)
    });

}

getElementByIdAsync(10)
    .then(heroe => console.log('Heroe',heroe))
    .catch(err => console.warn(err));