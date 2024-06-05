//Objeto process, es un objeto global que proporciona info y control sobre el proceso actual de ejecucion
//ejemplo como argumentos de entrada
//console.log(process.argv);

//controlar el proceso y su salida 0=OK 1=ERROR quermos que salga
//process.exit(0)

//podemos controlar eventos del proceso
/*process.on('exit', () => {
    //limpiar los recursos del proceso
})*/

//current working direcotory nos dice de que carpeta estamos ejecutando el proceso
console.log(process.cwd())

//plataform para las variables de entorno
console.log(process.env.PEPITO);