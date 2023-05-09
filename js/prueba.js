let jugador_a,jugador_b,nivel_a,nivel_b,bits_a,bits_b,mensaje_1,mensaje_2;

jugador_a=prompt('ingrese el nombre del jugador a') ; //Prompt
jugador_b=prompt('ingrese el nombre del jugador b') ;
nivel_a= parseInt(prompt('Ingrese el nivel del jugador a'));
nivel_b= parseInt(prompt('Ingrese el nivel del jugador b'));
bits_a= Math.floor(nivel_a*2.88); //Math= aproxima el resultado a su menor expresion/ Math=Es una clase quesirve para realizar procesos matematicos 
bits_b= Math.floor(nivel_b*2.88);
mensaje_1=`El jugador 1 ${jugador_a} cuenta con ${bits_a} bits`;
mensaje_2=`El jugador 1 ${jugador_b} cuenta con ${bits_b} bits`;
alert(`${mensaje_1}\n ${mensaje_2}`);

//---------------------

let num1=8,num2=2,num3=3.9854,num4=81;

//arreglos

const arr=new Array(10);
const arr2= [];
console.log(arr);
let videojuegos = ['Mario 3','Megaman','Chrono Trigger'];
console.log( videojuegos );
console.log( videojuegos[0] );
console.log( videojuegos[2] );
let arreglosCosas=[
    true,
    123,
    'JS',
    1 + 2,
    function(){},
    ['X','Megaman','Zero','Dr.Light',[
        'Dr.Willy',
        'Woodman'
    ]]
];

//Ejercicio

let miscelanea = [
    false,
    580,
    'new Array',
    Math.floor(Math.random()*8),
    ['AI','PS','AE',[
        'Creative',
        'cloud'
    ]],
    [8,5,9,22]
];

console.log( miscelanea[2] );//forma de llamar un componente del arreglo
console.log( miscelanea[4][3][1] );//forma de llamar un arreglo dentro de un arreglo
console.log( miscelanea[5][0]* miscelanea[5][3]);//Multiplicar dos componentes del arreglo
console.log(miscelanea[3]);

//Operaciones con arreglos

let juegos = ['Zelda','Mario','Metroid','Chrono'];
let longitud = juegos.length;
console.log(`la longitud del arreglo es ${longitud}`);
//Insertar al final del arreglo
juegos.push('F-zero');
console.log(`El arreglo  es ${juegos}`);
console.log()