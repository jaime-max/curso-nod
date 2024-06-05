//modulo nativo os nos dara info del sistema operativo
 const os = require('node:os')


console.log('Informacion del sistema operativo:')
console.log('-----------------------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura del sistema operativo', os.arch())
console.log('CPUs', os.cpus())// vamos a poder escalar procesos de node
console.log('Memoria Libre ', os.freemem() /1024 / 1024)
console.log('Memoria Total', os.totalmem() /1024 / 1024)
console.log('Cuantos dias lleva el PC encendido', os.uptime() /60 / 60)