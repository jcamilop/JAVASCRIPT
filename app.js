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

//----------------------------------------------------------------


//                  condicion if, else if y else


/*nombre = 'camilo';
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
*/

//----------------------------------------------------------------- 

/*                  SENTENCIA SWITCH
*/

/*
let mes = 1
switch (mes){
    case 1:
        console.log('es enero');
        break;
        case 2:
            console.log('es febrero')
            break;
            case 3:
                console.log('es marzo')
                break;
                case 4:
                    console.log('es abril')
                    break;
                    case 5:
                        console.log('es mayo')
                        break;
}
*/
//------------------------------------------------------------

//                  SENTENCIA FOR

/*
for (let x = 1; x <= 10; x += 1){
    console.log(x)
}
*/

// EJEMPLO 2
i = frutas = ['manzana', 'pera', 'mango', 'piña']
for (i = 0; i <= frutas.length; i += 2){
    console.log(frutas[i])
}
