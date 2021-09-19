console.log("Funciona correctamente")

//querySelector este me devuelve solo un objeto 
//.clase
//#id

const heading = document.querySelector('.header__texto h2');
heading.textContent = "Nuevo Contenido";
heading.classList.add('nueva-clase')
console.log(heading);



//querySelectorAll

// const enlaces = document.querySelectorAll(".navegacion a");
// console.log(enlaces);
// enlaces[0].textContent = "nuevo enlace"; // cambio el contenido
// enlaces[0].classList.add("nueva-clase"); //agrego una clase
// enlaces[0].classList.remove("navegacion__enlace");
// //enlaces[0].href = "https://www.google.com"; Le cambio el enlace al cual me lleva

// //getelementbyid

// const heading2 = document.getElementById("heading");
// heading.textContent = "Nuevo Contenido from by id"

// console.log(heading2)

// //generar codigo html
// //generar nuevo enlace

// const nuevoEnlace = document.createElement('A');

// // agragar href al enlace

// nuevoEnlace.href = 'nuevo-enlace.html';

// //agregamos texto al enlace
// nuevoEnlace.textContent = "otro nuevo enlace";

// //agregar clase al enlace

// nuevoEnlace.classList.add('navegacion__enlace');

// //agregarlo al documentos
// const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(nuevoEnlace);

// console.log(nuevoEnlace);


//Eventos JS


// console.log(1);

// window.addEventListener('load', function() { // load espera a que se JS y los archivos que dependen del html esten listos
//         console.log(2);
//     })
//     //Otra forma
// window.onload = function() {
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function() { //este espera a que se descarge el html
//     console.log(4);
// })


// console.log(5);

// window.onscroll = function() {
//     console.log("bajando....")
// }

// SELECIONAR ELEMENTOS Y ASOCIARLES UN EVENTO

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault(); //previene que se realice el evento por default
//     console.log("enviando datos");
// });


//Eventos de los input o textarea

const data = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    //validar formulario
    const { nombre, email, mensaje } = data;
    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    }
    //mensaje de confirmacion;
    mostrarAlerta('Datos enviados de forma correcta');
    //enviar formulario
});

function mostrarErrores(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);
    //que desaparezca el mensaje de error
    setTimeout(function() {
        error.remove();
    }, 5000);
}

function mostrarConfirmacion(mensaje) {
    const confirmacion = document.createElement('P');
    confirmacion.textContent = mensaje;
    confirmacion.classList.add('correcto');
    formulario.appendChild(confirmacion);
    console.log(confirmacion);
    setTimeout(function() {
        confirmacion.remove();
    }, 5000)
}

// las dos funciones se pueden refatorizar en la sigiente funcion

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    setTimeout(function() {
        alerta.remove();
    }, 5000)
}

function leerTexto(e) {
    // console.log(e.target.value);
    data[e.target.id] = e.target.value;
}