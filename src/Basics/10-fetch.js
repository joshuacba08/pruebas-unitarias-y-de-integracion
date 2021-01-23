const apiKey = '8zLs1S1gCgaADTdedKs3tYKX1SyHT9JY';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

peticion
    .then( resp => resp.json() )
    .then( ({data}) => {
        const { url } = data.images.original;
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.appendChild( img );
    })
    .catch( console.warn );