//SINCRONO CON CALLBACK
//leer un archivo (sincrono)
const fs = require('node:fs');

//leer de manera asincrona
//leyendo en primer archivo
console.log('leyendo el primer archivo.........')
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log("primer texto: ",text);//usamos un callback mecanismo para saber cuando a terminado de leer el archivo


console.log('------>Esto se ejecuta antes que devuelva la informacion del primer texto<------hacer cosas mientras lee el archivo');

//leyendo en segundo archivo
console.log('leyendo el segundo archivo.........')
const text2 = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log("segundo texto: ",text2);
