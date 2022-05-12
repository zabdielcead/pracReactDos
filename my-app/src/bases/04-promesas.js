import { getHeroesById,getHeroesByOwner } from "./bases/03-importsheroes";

// const promesa = new Promise((resolve, reject) => {
//     //resolve exitosa

//     //reject falla

//     setTimeout(() =>{
//         console.log('2 segundos despues');
//         const heroe  = getHeroesById(2);
        
//         reject(heroe);
//     }, 2000);

// });


// promesa.then( (heroe) => {
//     console.log('then de la promesa heroe', heroe);
// } )
// .catch(err => console.warn(err));


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        //resolve exitosa
    
        //reject falla
    
        setTimeout(() =>{
            console.log('2 segundos despues');
            const heroe  = getHeroesById(id);
            if(heroe){

                resolve(heroe);
            }else{
                reject('NO HAY DATOS');
            }
        }, 2000);
    
    });
    
    
   
}

getHeroeByIdAsync(11)
        .then( heroe => console.log('heroe', heroe) )
        .catch(err   => console.warn('error', err) ); 

