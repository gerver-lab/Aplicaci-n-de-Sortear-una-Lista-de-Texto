<h1>Sorte de Amigo Secreto</h1>

- Estado del Proyecto: Finalizado. (Abierto a recibir mejoras y consejos)

<h2>Descripción</h2>
  Este proyecto es una aplicación desarollada en JavaScript que permite agregar nombres a una lista de amigos y ejecutar un sorteo para seleccionar un "amigo secreto" de manera aleatoria.
  
<h2>Objetivo del Desafío</h2>
  El objetivo de este desafío es poner en practicas las habilidades en lógica de programación aplicando la manipulación del DOM, el uso de arrays y la creación de funciones para realizar tareas específicas.
<h2>Estructura del Código</h2>
<h3>1. Creación del Array</h3>
Se va realizar la craación de la variable amigos y ahi es donde se agegará el array.
```javascript
let amigos = [];
```
Por consiguiente se realizara la integración de una función para agregar amigos a nuestro array e limpiar cada que se precione el boton de agregar amigo, como se detalla en el siguietne codigó.

function agregarAmigo() {
    const input = document.querySelector("#amigo");
    const nombre = input.value;

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    console.log("Amigos actuales:", amigos);

    input.value = "";
    actualizarListaAmigos();
}
