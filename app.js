let numeroSecreto = 0
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    // Si ya se sortearon todos los números posibles
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarElementoTexto('p', 'Se han sorteado todos los números posibles. Reinicia el juego para jugar de nuevo');
    } else {
        // Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            // Se regresa a generar un nuevo número
            return generarNumeroSecreto();
        } else {
            // Se agrega un nuevo número al final de la lista de números sorteados
            listaNumerosSorteados.push(numeroGenerado);
            // Y se muestra el nuevo número generado
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarElementoTexto('h1', 'Juego del número secreto');
    asignarElementoTexto('p', `Escribe un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto === numeroUsuario);
    if (numeroSecreto === numeroUsuario) {
        asignarElementoTexto('p', `¡Adivinaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroSecreto > numeroUsuario) {
        asignarElementoTexto('p', 'El número secreto es mayor');
    } else {
        asignarElementoTexto('p', 'El número secreto es menor');
    }
    intentos++;
    limpiarCaja();
    return;
}

function limpiarCaja() {
    return document.querySelector('#valorUsuario').value = '';
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();