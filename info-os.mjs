//modulo nativo os nos dara info del sistema operativo
//de la forma mjs
import { platform, release, arch,cpus,freemem,totalmem, uptime } from 'node:os'

console.log('Informacion del sistema operativo:')
console.log('-----------------------------------')

console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura del sistema operativo', arch())
console.log('CPUs', cpus())// vamos a poder escalar procesos de node
console.log('Memoria Libre ', freemem() /1024 / 1024)
console.log('Memoria Total', totalmem() /1024 / 1024)
console.log('Cuantos dias lleva el PC encendido', uptime() /60 / 60)