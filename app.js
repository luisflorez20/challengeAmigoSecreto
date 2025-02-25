// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Crea un array para almacenar los nombres
const amigos = [];

//Implementa una funcion pra agregar amigos
function agregarAmigo() {
    
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if(!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
}
   
//Implementa una funcion para actualizar la lista de amigos
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);      
    }
}

//Implementa una funcion para sortear los amigos
function sortearAmigo() {
    if(amigos.length === 0 ) {
        alert('No hay amigos en la lista!');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>!`;
}

//boton para reiniciar el juego
function reiniciarJuego() {
    amigos.length = 0;
    actualizarLista();
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    document.getElementById('amigo').value = '';
}
//console.log(amigos);