// ASINCRONO SECUENCIAL
// para el async debemos usar el mjs es decir modulos

const { readFile } = require('node:fs/promises');

// IIFE - Inmediatly Invoked Function Expression
/* (
   async ()=>{
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
   }
)() */

// Otra forma

async function init () {
  // leer de manera asincrona
  // leyendo en primer archivo
  console.log('leyendo el primer archivo...')
  const text = await readFile('./archivo.txt', 'utf-8')
  console.log('primer texto: ', text)// con las promesas ya no debemos utilizar callback si no usamos promesas y al ser esto asi hablamos de algo asincrono

  console.log('<------hacer cosas mientras lee el archivo');

  // leyendo en segundo archivo
  console.log('leyendo el segundo archivo.........')
  const text2 = await readFile('./archivo2.txt', 'utf-8')
  console.log('segundo texto: ', text2)
}
init()
