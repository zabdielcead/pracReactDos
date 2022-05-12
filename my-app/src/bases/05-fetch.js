// url gyphi

//https://developers.giphy.com/dashboard/?
/*
https://developers.giphy.com/docs/api/endpoint#random-id

*/

const apikey = 'zESB2NGXHXVfkpN2cYzCKJl3ADc80NO2'; 

//api.giphy.com/v1/randomid


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);



// peticion.then(resp => {
    
//     resp.json().then(data => {
//         console.log(data);
//     });
// })
// .catch(console.warn);


peticion
    .then(resp => resp.json())
    .then( ({data}) => {
        //console.log(data.images.original.url);

        const { url } = data.images.original
        console.log(url);

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })
    .catch(console.warn);