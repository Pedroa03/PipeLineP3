const express = require('express');
const app = express();

app.get('/', (req, res) =>{


    res.send("Bienvenido a la pagina principal...(Home Page) test test"); // texto que nos recibira en la pagina de inicio de la web


});

app.listen(); // hace que el servidor web este a la escucha de un puerto particular especificado

const port = process.env.port || 3000 ; 
app.listen(port, () => {

    console.log("prueba de texto para el log de la consola"); // esta es la funcion callback que se ejecutara al acceder al web client. podemos verla en la consola
    // de la terminal al ejecutar el codigo...
});

// con la conexion en

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hola Mundo');
// });

// server.listen(port, hostname, () => {
//   console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
// });