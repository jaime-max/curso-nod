// de Collback a Promesa
//Esto solo en los modulos nativos
//que no tengan promesas nativas
//const { promisify } = require('node:util')
//const readFilePromise = promisify (fs.readFile)

const fs = require('node:fs/promises');

//leer de manera asincrona
//leyendo en primer archivo
console.log('leyendo el primer archivo.........')
fs.readFile('./archivo.txt', 'utf-8')
    .then(text=>{
        console.log("primer texto: ",text)//con las promesas ya no debemos utilizar callback si no usamos promesas y al ser esto asi hablamos de algo asincrono
    });


console.log('------>Esto se ejecuta antes que devuelva la informacion del primer texto<------hacer cosas mientras lee el archivo');


//leyendo en segundo archivo
console.log('leyendo el segundo archivo.........')
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text=>{
        console.log("segundo texto: ",text);
    });
