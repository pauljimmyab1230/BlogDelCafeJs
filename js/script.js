// query selector 

const heading = document.querySelector('.header__texto h2');
console.log(heading);

// query selectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
// enlaces[0].textContent= 'nuevo texto '
// getElementById

const heading2 = document.getElementById('heading');
console.log(heading2);

//generar codigo html

const nuevoEnlace = document.createElement('A');
//crear el href
nuevoEnlace.href = 'nuevo-enlace.html';
//crear el texto
nuevoEnlace.textContent = 'Un nuevo enlace';
//crear una clase
nuevoEnlace.classList.add('navegacion__enlace');
//agregar al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

////////////eventos /////
console.log(1);

window.addEventListener('load', function () {
    console.log(2);
});

window.onload = function () {
    console.log(3);

}
document.addEventListener('DOMContentLoaded', function () {
    console.log(4)
})
console.log(5);

window.onscroll = function () {
    console.log('Scrolling ...')
}

////////seleccionar elemento y asociar---evento click 
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (evento) {
//     console.log(evento);
//     evento.preventDefault();
//     console.log('enviando formulario');
// })


// eventos de los input y los textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
nombre.addEventListener('input', leerTexto)
email.addEventListener('input', leerTexto)
mensaje.addEventListener('input', leerTexto)
//eventos submit
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    //Validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }
    //enviando formulario
    mostrarAlerta('tu datos se estan enviando');
    console.log('ENVIANDO FORMULARIO');
})

function leerTexto(evento) {
    datos[evento.target.id] = evento.target.value;
    // console.log(evento.target);

    console.log(datos);
}

// Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    //desaparecer de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}

function mostrarCorrecto(mensaje) {
    const correcto = document.createElement('P');
    correcto.textContent = mensaje;
    correcto.classList.add('correcto');
    formulario.appendChild(correcto);

    setTimeout(() => {
        correcto.remove();
    }, 5000);
}
// codigo refactorizado
function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 2000);

}


