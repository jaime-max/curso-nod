const fs = require('node:fs')// A partir de Node 16 se recomienda poner node:

const stas = fs.statSync('./archivo.txt')
// esto de forma sincrona
console.log(
    stas.isFile(), // si es un fichero
    stas.isDirectory(), // si es undirectorio
    stas.isSymbolicLink(),// si es un enlace simbolico
    stas.size,//tamano en bytes
)
