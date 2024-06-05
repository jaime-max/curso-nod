//MODULO NATIVO
const path = require('node:path');

//Barra separadora de carpetas segun SO
console.log(path.sep)

// unir rutas con path.join
const filePath= path.join('content','subfolder','archivo.txt','archivo2.txt');
console.log(filePath)

//para conseguir el nombre del fichero en este caso 'login.txt'
const base = path.basename('/tmp/app-secret/login.txt')
console.log(base)

//para quitar el punto de extencion es decir el .txt
const  filebase = path.basename('/tmp/app-secret/login.txt', '.txt')
console.log(filebase)

// Pra obtener la extencion
const extencion = path.extname('login.jpg')
console.log(extencion)
