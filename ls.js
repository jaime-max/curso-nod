//const fs = require('node:fs');

//Para leer el directorio
/*fs.readdir('.', (err, files) => {
    if(err){
        console.error('Error al leer el directorio: ', err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    })
})*/

//Usando con Promesas usando catch
const fs = require('node:fs/promises');

//Para ver si el archivo existe
//fs.stat('content')

fs.readdir('.')
    .then(files=>{
        files.forEach(file => {
            console.log(file);
        })
    })
    .catch(err =>{
        if(err){
            console.error('Error al leer el directorio: ', err);
        }
    })



