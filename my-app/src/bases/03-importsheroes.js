// import heroes  from "./data/heroes"; //por defecto
import heroes,{ owners } from "./../data/heroes";


export const getHeroesById = (id) => {
    return heroes.find( (heroe) => {
       if(heroe.id === id){
           return true;
       }else{
           return false;
       }
    } );
}



// console.log(getHeroesById(2));


export const getHeroesByOwner = (owner) => {
    return heroes.filter( (owners) => {
        return owners.owner === owner;
    } );
}



// console.log(getHeroesByOwner('DC'));


// console.log('owners', owners);