// para el async debemos usar el mjs es decir modulos

import { readFile } from 'node:fs/promises';

//leer de manera asincrona
//leyendo en primer archivo
console.log('leyendo el primer archivo.........')
const text = await readFile('./archivo.txt', 'utf-8')
console.log("primer texto: ",text)//con las promesas ya no debemos utilizar callback si no usamos promesas y al ser esto asi hablamos de algo asincrono



console.log('<------hacer cosas mientras lee el archivo');


//leyendo en segundo archivo
console.log('leyendo el segundo archivo.........')
const  text2= await readFile('./archivo2.txt', 'utf-8')
console.log("segundo texto: ",text2);


