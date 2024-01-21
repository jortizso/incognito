// Variable para almacenar las respuestas
var respuestas = new Array(10).fill(null);

// Función para manejar la respuesta a una pregunta
function respuesta(indicePregunta, seleccion) {
    // Guarda la respuesta en el array de respuestas
    respuestas[indicePregunta] = seleccion.value;

    // Oculta la sección actual
    var seccionActual = document.getElementById("p" + indicePregunta);
    seccionActual.classList.add("hidden");

    // Muestra la siguiente sección si existe
    var siguienteIndice = indicePregunta + 1;
    var siguienteSeccion = document.getElementById("p" + siguienteIndice);

    if (siguienteSeccion) {
        siguienteSeccion.classList.remove("hidden");
    } else {
        // Si es la última pregunta, verifica y muestra el puntaje en la página
        verificarYMostrarPuntaje();
    }
}

function verificarYMostrarPuntaje() {
    // Verifica si todas las preguntas fueron respondidas
    if (respuestas.includes(null)) {
        alert("Por favor, responde todas las preguntas antes de verificar.");
    } else {
        // Calcula el resultado y almacena el puntaje en localStorage
        var resultado = calcularResultado();
        localStorage.setItem('puntaje', resultado);

        // Redirige a resultados.html
        window.location.href = 'resultados.html';
    }
}

// Función para calcular el resultado del cuestionario
function calcularResultado() {
    // Lógica de cálculo del resultado (puedes personalizarla según tus criterios)
    var respuestasCorrectas = ["2", "2", "2", "1", "2", "2", "1", "3", "2", "1"];
    var puntaje = 0;

    for (var i = 0; i < respuestas.length; i++) {
        if (respuestas[i] === respuestasCorrectas[i]) {
            puntaje++;
        }
    }

    return puntaje + " / 10";
}

// Función para mostrar el puntaje en la página
function mostrarPuntajeEnPagina(puntaje) {
    // Obtén el elemento de párrafo por su ID
    var puntajeEnPagina = document.getElementById("puntajeEnPagina");

    // Verifica si el elemento existe y el puntaje no es "Puntaje no disponible"
    if (puntajeEnPagina && puntaje !== "Puntaje no disponible") {
        console.log("Mostrando puntaje:", puntaje); // Agrega esta línea para depurar

        // Actualiza el contenido del párrafo con el mensaje personalizado
        puntajeEnPagina.textContent = "<p style='text-align: center;>Has respondido " + puntaje + " correctamente</p>";
    }
}
// Función para reiniciar el cuestionario
function reiniciarCuestionario() {
    // Reinicia la variable de respuestas
    respuestas = new Array(10).fill(null);

    // Muestra la primera sección
    var primeraSeccion = document.getElementById("p0");
    primeraSeccion.classList.remove("hidden");

    // Oculta las demás secciones
    for (var i = 1; i <= 9; i++) {
        var seccion = document.getElementById("p" + i);
        seccion.classList.add("hidden");
    }

    // Limpia el puntaje en la página
    mostrarPuntajeEnPagina("");

    // Limpia el resultado anterior
    document.getElementById("resultado").innerText = "";
}

// Función para obtener el puntaje de la URL
function obtenerPuntajeDeURL() {
    // Obtiene la cadena de consulta (?puntaje=...) de la URL
    var queryString = window.location.search;

    // Utiliza el objeto URLSearchParams para obtener el valor del parámetro "puntaje"
    var urlParams = new URLSearchParams(queryString);
    var puntaje = urlParams.get('puntaje');

    // Imprime mensajes de depuración en la consola
    console.log("Cadena de consulta:", queryString);
    console.log("Valor de puntaje:", puntaje);

    // Verifica si el puntaje es null o undefined
    if (puntaje === null || puntaje === undefined) {
        console.error("No se pudo obtener el puntaje de la URL.");
        return "Puntaje no disponible";
    }

    return puntaje;
}

// Llama a la función para mostrar el puntaje cuando la página haya cargado
document.addEventListener('DOMContentLoaded', function () {
    mostrarPuntajeEnPagina(obtenerPuntajeDeURL());
});
