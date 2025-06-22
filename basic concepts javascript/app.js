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
/*
i = frutas = ['manzana', 'pera', 'mango', 'piña']
for (i = 0; i <= frutas.length; i += 2){
    console.log(frutas[i])
}
*/
//--------------------------------------------

//                 SENTENCIA WHILE
/*
let x = 0
while (x <= 10) {
    console.log(x)
    x += 1;
}
*/
//------------------------------------------------

//                  SALIDAS DE JS

// CONSOLE.LOG()
/*
let a, b, c;
a = 5;
b = 10;
c = a + b 
console.log(c)

console.log('hola mundo');
console.log(5 + 5);
*/


//OUTPUT ALERT()
/*
alert("¡Bienvenido a mi sitio web!");
let resultadoSuma = 5 + 6;
alert("La suma es: " + resultadoSuma);
*/
/*
let a, b, c;
a = 5;
b = 6;
c = a + b;
document.getElementById("demo1").innerHTML = c;
document.getElementById("demo2").innerHTML = "hola mundo";
}
*/
//---------------------------------------------

//              OBJETOS JS

/*
const persona = {
primer_nombre : "juan",
segundo_nombre : "camilo",
años : 25
}
*/

//METODOS DE OBJETOS ----
/*
const persona = {
primer_nombre : "juan",
segundo_nombre : "camilo",
años : 25,
ciudad : "medellin",
nombre_completo : function() {
    return "el primer nombre es " + this.primer_nombre + " y el segundo es " + this.segundo_nombre;
    }
};
document.getElementById("demo1").innerHTML = persona.nombre_completo();
*/

//-------EJEMPLO 2-------
/*
const carro = {
    marca: "mercedes",
    modelo: 2026,
    cilindraje: 3000,
    color: "plata",
    t_propieda: function(){
        return "carro marca " + this.marca + " del " + this.modelo + " de color " + this.color;
    }
}
document.getElementById("demo1").innerHTML = carro;
*/

//------ VISUALIZACION DE OBJETOS ----
//POR MEDIO DE UN BUCLE
/*
const moto = {
    marca: "yamaha",
    modelo: 2026,
    color: "azul"
}

let text = " ";
for (let x in moto) {
    text += moto[x] + " ";
}; 
document.getElementById("demo1").innerHTML = text;
*/
//USANDO OBJECT.VALUES()
/*
const moto = {
    marca: "yamaha",
    modelo: 2026,
    color: "negro"
}
const myArray = Object.values(moto);
document.getElementById("demo1").innerHTML = myArray;
*/

//CONSTRUCTORES DE OBJETOS
    //sirve para crear muchos objetos del mismo tipo
/*
function persona(nombre, apellido, años, ojos) {
    this.primernombre = nombre;
    this.primerapellido = apellido;
    this.cuantos_años = años;
    this.color_ojos = ojos
}
const cliente = new persona ("clara", "gaviria", 56, "azul");

document.getElementById("demo1").innerHTML = 
"la señora " + cliente.primernombre + " tiene una edad de " + cliente.cuantos_años + " años.";
*/
