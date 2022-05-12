// npm install -g create-react-app@5.0.1   -> actualizamos  create-react-app
// se ejecuta con npm start
console.log('Hola mundo');


//template strings
const nombre = 'Fernando';
const apellido = 'Herrera';
const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);


function getSaludo(){
    return 'Hola Mundo'
}

console.log(`Este es un texto: ${getSaludo()}`);

//objetos literales

const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45
};

console.log(persona);
console.table(persona);

const persona2 = {...persona};

console.log(persona2);



// Arreglos en js
const arreglo = [1,2,3,4];
let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);



// funciones de flecha

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;

}


console.log(saludar2('vegeta'))



const getUsuarioActivo = (nombre) => {
    return {
        uid: 'ABCDF',
        username: nombre
    }
}


const usuarioAtivo =  getUsuarioActivo('CEAD');
console.log(usuarioAtivo);

// deseestructuracion de objetos
const personaDestrc = {
    nombre: 'TONY',
    edad: 45,
    clavedesc: 'Ironman',
    rangodesc: 'soldado',
    latlng:{
        lat:12.789,
        lng: 13.098778
    }
}


const {nombre:nombredesc, edad: edaddesc, clavedesc} = personaDestrc;

console.log('nombredesc', nombredesc);

console.log('clavedesc', clavedesc);


const retornaPersonaDesc = ({ nombre, edad, rangodesc = 'capitan', latlng: {lat,lng} }) => {
    console.log('nombreDesclambda', nombre);
    console.log('edadlambda', edad);
    console.log('rangodesc', rangodesc);
    console.log('lat', lat);
    console.log('lng', lng);
}

retornaPersonaDesc(personaDestrc);

// desestructuracion de arreglos

const personajes = ['Goku','Vegeta', 'Thrunks'];

const [,p2] = personajes;

console.log(p2);




const retornaArreglo = () =>{
    return ['ABC',123];
}

// DESESTRUCTURACION DE UNA ARREGLO
const [letrasDest, numerosDest] = retornaArreglo();

console.log(letrasDest, numerosDest);


const getObjDest = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}]
}

const [nombreArrDest, setNombreArrDest] = getObjDest('Goku');
console.log(nombreArrDest);
setNombreArrDest();


