//globalThis. para varibles globales
//console.log(globalThis.Math.PI)

//Importamos la funcion del otro archivo donde esta la funcion
//CommonJS require import
const {sumar} = require('./sumar')
console.log(sumar(3,7))