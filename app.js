/*
console.log('hola mundo');
console.log(5 + 5);

let nombre = 'camilo';
let edad = 25;
console.log(nombre);
console.log(typeof(nombre));

console.log('mi edad es '+ edad);
console.log(typeof(edad));

let tiene_trabajo = false;
console.log(tiene_trabajo);
console.log(typeof(tiene_trabajo));

console.log(nombre + ' '  + edad + ' ' + tiene_trabajo);
*/

// condicion if, else if y else

nombre = 'camilo';
edad = 8;

if (edad <= 12) {
    console.log(nombre + ' es un niño');
} else if ((edad >= 13) && (edad <= 18)) {
    console.log(nombre + ' es un adolecente');
} else if ((edad >= 19) && (edad <= 60)) {
    console.log(nombre + ' es un adulto');
} else {
    console.log(nombre + ' es una anciano');
}