<h1>Sorte de Amigo Secreto</h1>

- Estado del Proyecto: Finalizado. (Abierto a recibir mejoras y consejos)

<h2>Descripción</h2>
  Este proyecto es una aplicación desarollada en JavaScript que permite agregar nombres a una lista de amigos y ejecutar un sorteo para seleccionar un "amigo secreto" de manera aleatoria.
  
<h2>Objetivo del Desafío</h2>
  El objetivo de este desafío es poner en practicas las habilidades en lógica de programación aplicando la manipulación del DOM, el uso de arrays y la creación de funciones para realizar tareas específicas.
<h2>Estructura del Código</h2>
<h3>1. Creación del Array</h3>
Se va realizar la craación de la variable amigos y ahi es donde se agegará el array.

let amigos = [];

<h3>2. Insertar Función de Agregar Amigos en el Array </h3>
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
    actualizarListaAmigos();}

 <h3>3. Añadir la Función de Actualizar la Lista de Amigos</h3>

Luego añadimos la función de actualizar la lista de amigos, el cual limpia la lista existente, busca dentro del array y se usa el ** <li> **  para agregar cada elemento, y por consiguiente mostrar la lista en la consola.
  
function actualizarListaAmigos() {
    const lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";

    for (let amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }

    console.log("Lista de amigos:", amigos);
} 

 <h3>4. Añadir la Función de Sortear el Amigo Secreto </h3>

Por ultimo integramos la función de sortear amigo secreto, esta función integra la generación de Math.rando,() y un Math.floor(), esto para realizar una elección aleatorio dentro de la lista de amigos previamente cargados.

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;

    console.log(`El amigo secreto es: ${amigoSorteado}`);
