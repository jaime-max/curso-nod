// http nos permite hacer procesos y conexiones con el protocolo http como por ejemplo crear un sservidor http
// y poder recibir request peticiones
const http = require('node:http')
const { finAvailablePort } = require('./free-port.js')

const puertoDeseado = process.env.PORT ?? 3000

// vamos a tener un callback que es el que va a gestionar tanto
// la request como la respuesta, entonces cada vez que llegue
// una request le vamos a poder responder con algo
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('hola mundo')
})

finAvailablePort(puertoDeseado).then(port => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })
})

// tenemos otro callback cuando el servidor empieze a escuchar
// 0 nos permite ver cual es el puerto disponible
/*
server.listen(0,()=>{
    console.log(`server listening on port http://localhost:${server.address().port}`)
}) */
