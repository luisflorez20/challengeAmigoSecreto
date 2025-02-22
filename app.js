// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//crearemos un array para guardar los nombres de los amigos 
const amigos = [];

function agregarAmigo() {
    //crearemos un input para que el usuario pueda ingresar el nombre del amigo
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if(!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    amigos.push(nombre);
    input.value = "";
}
   
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

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

console.log(amigos);