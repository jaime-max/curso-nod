// SISTEMA DE MODULOS
const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')

// PROCESS
const folder = process.argv[2] ?? '.'

// Para ver si el archivo existe
// fs.stat('content')

// ASINCRONIA
async function ls (folder) {
  let files
  try {
    // Sincronia secuencial hasta que no se lea el directorio no continua
    files = await fs.readdir(folder)
  } catch {
    console.error(picocolors.red(`❌ Nose pudo leer el directorio ${folder}`))
    process.exit(1)
  }

  // En paralelo para recuperar la info de todos los ficheros del directorio
  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file)
    let stats
    try {
      stats = await fs.stat(filePath)// stat me da la informacion del archivo
    } catch {
      console.error(`Nose pudo leer el directorio ${filePath}`)
      process.exit(1)
    }

    // FILESYSTEM no solo para leer sino para recuperar la info del archivo

    // en este punto ya podriamos saber si es un directorio d=ok f=fichero
    const isDirectory = stats.isDirectory()
    const filetype = isDirectory ? 'd' : 'f'

    // tamano del archivo
    const fileSize = stats.size.toString()

    // cuando se modifico el archivo
    const fileModified = stats.mtime.toLocaleString()

    // 25 es para que ocupe 20 espacios al final  y el 10 lo mismo pero que empieze por el principio
    return `${picocolors.white(filetype)} ${picocolors.blue(file.padEnd(25))} ${picocolors.green(fileSize.padStart(10))} ${picocolors.yellow(fileModified)}`
  })
  // aqui esperamos todas las promesas
  const fileInfo = await Promise.all(filesPromises)
  fileInfo.forEach(fileInformation => {
    console.log(fileInformation)
  })
}

ls(folder)
