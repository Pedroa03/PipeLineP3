const express = require('express');
const app = express();

app.get('/', (req, res) =>{


    res.send("Bienvenido a la pagina principal...(Home Page) test test"); // texto que nos recibira en la pagina de inicio de la web


});

app.listen(); // hace que el servidor web este a la escucha de un puerto particular especificado

const port = process.env.port || 3000 ; 
app.listen(port, () => {

    console.log("prueba de texto para el log de la consola"); // esta es la funcion callback que se ejecu