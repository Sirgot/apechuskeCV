var x = 2
var y = 5

console.log(x + y)

function suma(x, y) {
    return (x + y);
}

console.log(suma(x, y));

/*  Uso de librerias
 se puedne importar en cualquier parte del codigo pero mejor al principio */

/* nueva variable http va a recibir el import que le hagamos con el require
* esto es el equivalente de un import */
var http = require('http');

/* executa el create server que se pone a la escucha */
var server = http.createServer(function (request, response) {
    // Definicion de la funcion como los events
    response.end("Apechusqueitor " + request.url)
})


// server.listen(8080, suma(x,y));

server.listen(8080, function () {
    console.log(" El servidor tiene una miaja de apechusque")
});

// Tyring to import Angular
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }

