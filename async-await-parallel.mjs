//Con este codigo estamos Paralelizando la sincronia
import { readFile } from 'node:fs/promises';

Promise.all([
    //lectura del primer archivo
    readFile('./archivo.txt', 'utf-8'),
    //lectura del segundo archivo
    readFile('./archivo2.txt', 'utf-8')


    //aqui hacemos que cuando se resuelva vamos a tener los 2 textos
]).then(([text,text2])=>{
    //mostramos el primer texto
    console.log("Primer texto: ",text);
    //mostramos el segundo texto
    console.log("Segundo Texto: ",text2);
})