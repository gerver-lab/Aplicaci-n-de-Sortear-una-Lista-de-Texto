// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de array para almacenar el nombre de amigos
let amigos = []; 

// Creación de la función para agregar amigos
function agregarAmigo() {
    const input = document.querySelector("#amigo");
    const nombre = input.value

    // Validación de ingresar texto
    if (nombre === "") { 
        alert("Por favor     coloque un nombre.");
        return;
    }

    // Actualizar el array "amigos"
    amigos.push(nombre);
    console.log("Amigos agregados:", amigos);

    // Limpiar el campo de entrada
    input.value = "";

    // Llamar la función para actualizar la lista en la pantalla
    actualizarListaAmigos();
}

// Función para actualizar la lista 
function actualizarListaAmigos() {
    const lista = document.querySelector("#listaAmigos"); 

    //Limpiar la lista existente para evitar duplicados
    lista.innerHTML = ""; 

    // Iterar sobre el arreglo amigos y agregar cada amigo a la lista
    for (let amigo of amigos) {
        const li = document.createElement("li"); 
        
        // Asignar el nombre del amigo como texto del <li>
        li.textContent = amigo; 
        
        // Agregar el <li> a la lista
        lista.appendChild(li); 
    }

    // Mostrar la lista en la consola
    console.log("Lista de amigos:", amigos);
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    //  Validar que haya amigos en la lista
    if (amigos.length === 0) { 
        alert("La lista está vacía, agrega nombres para poder sortear.");
        return;
    }

    // Crear un índice aleatorio
    const aleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre del amigo sorteado
    const ganador = amigos[aleatorio];

    // Mostrar el resultado en la página
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>${ganador}</li>`;

    console.log(`El amigo secreto es: ${ganador}`);
}