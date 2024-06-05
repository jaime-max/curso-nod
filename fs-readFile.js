//ASINCRONO CON CALLBACK
const fs = require('node:fs');


//leyendo en primer archivo
//console.log('leyendo el primer archivo.........')
//const text1 = fs.readFileSync('./archivo.txt', 'utf-8');
//console.log(text1);

//console.log('hacer cosas mientras lee el archivo');

//leyendo en segundo archivo
//console.log('leyendo el segundo archivo.........')
//const text2 = fs.readFileSync('./archivo2.txt', 'utf-8');
//console.log(text2);


//leer de manera asincrona
//leyendo en primer archivo
console.log('leyendo el primer archivo.........')
fs.readFile('./archivo.txt', 'utf-8',(err, text)=>{
    console.log("primer texto: ",text);//usamos un callback mecanismo para saber cuando a terminado de leer el archivo
});


console.log('------>Esto se ejecuta antes que devuelva la informacion del primer texto<------hacer cosas mientras lee el archivo');

//leyendo en segundo archivo
console.log('leyendo el segundo archivo.........')
fs.readFile('./archivo2.txt', 'utf-8',(err, text)=>{
    console.log("segundo texto: ",text);
});
