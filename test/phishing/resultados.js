// Función para obtener un mensaje personalizado con elementos HTML
function obtenerMensajeSegunPuntaje(puntaje) {
    var mensaje = "";
    var puntajeNumerico = parseInt(puntaje);

    if (puntajeNumerico >= 8) {
        mensaje = "<br>¡Espectacular desempeño! Tu conciencia de las amenazas de phishing demuestra una comprensión excepcional de la seguridad en línea. Te destacas por tu capacidad para identificar y abordar eficazmente situaciones de riesgo. Continuá avanzando en tu viaje de aprendizaje, explorando aún más a fondo los diversos aspectos de la ciberseguridad. No te conformas con el status quo, sino que buscas continuamente nuevas formas de fortalecer tus habilidades. ¡Sos una verdadera inspiración para aquellos que buscan la excelencia en este fascinante campo!<br><br> No solo te limitas a reconocer las amenazas evidentes; también sos capaz de anticipar posibles vulnerabilidades. Esta capacidad proactiva demuestra tu compromiso inquebrantable con la excelencia. Seguís desafiándote a vos mismo, enfrentándote a desafíos cada vez más complejos con determinación. <br><br> A medida que avanzás en tu travesía, no solo adquirís habilidades, sino que también inspiras a otros a seguir tus pasos. Tu impacto va más allá de tu propio crecimiento personal; te convertís en un faro de conocimiento y motivación para aquellos que buscan orientación en el vasto océano de la ciberseguridad.<br><br>En resumen, tu espectacular desempeño no solo refleja tu competencia técnica, sino también tu compromiso constante con la mejora contínua. Sos un pionero en el campo de la ciberseguridad, y tu influencia perdurará en la comunidad. ¡Continuá iluminando el camino hacia un ciberespacio más seguro y protegido!<br><br>Te recomendamos: <br><br> <a href='#'><img style='width: 30%;' src='../../images/banner.png'></a><a href='#'><img style='width: 30%;' src='../../images/banner.png'></a><a href='#'><img style='width: 30%;' src='../../images/banner.png'></a>";

    } else if (puntajeNumerico >= 5) {
        mensaje = "<br>Te felicitamos por el excelente desempeño; tus conocimientos sobre amenazas de phishing son buenos. Sin embargo, siempre es importante recordar que hay espacio para la mejora continua. Te instamos a que vayas más allá y profundices aún más en este campo. Explorá casos prácticos, participá en retos y mantente al tanto de las últimas tendencias en ciberseguridad. Cada nueva lección que abordes es una oportunidad única para perfeccionar tus habilidades y ampliar tu comprensión.<br><br>No te conformes con lo aprendido hasta ahora; buscá activamente formas de desafiarte y de expandir tu conocimiento. La ciberseguridad es un campo en constante evolución, y estar al día con las últimas amenazas y técnicas es esencial. Aprovechá cada oportunidad para aprender y seguí cultivando tus habilidades en seguridad.<br><br>Recordá que la práctica constante y la participación en desafíos te van a brindar una perspectiva práctica que va a complementar tu conocimiento teórico. Estamos seguros de que tu dedicación te va a llevar a alcanzar nuevos niveles de excelencia en el campo de la ciberseguridad. ¡Seguí adelante y continuá tu viaje de aprendizaje en seguridad con entusiasmo y determinación!<br><br>Te recomendamos: <br><br> <a href='#'><img style='width: 30%; display: inline-block' src='../../images/banner.png'></a><a href='#'><img style='width: 30%; display: inline-block' src='../../images/banner.png'></a><a href='#'><img style='width: 30%; display:inline-block;' src='../../images/banner.png'></a>";
    
    } else {
        mensaje = "<br>Es comprensible que todos estemos en un continuo proceso de aprendizaje, y reconocer la necesidad de revisar algunos conceptos de seguridad es un paso crucial hacia el crecimiento. No te desanimes; más bien, tomalo como una oportunidad para fortalecer tus fundamentos en ciberseguridad.<br><br>Dedicá tiempo de manera específica para comprender a fondo los conceptos clave. Sumergite en ejercicios prácticos que te permitan aplicar esos conocimientos de manera tangible. Buscá recursos adicionales, como libros, cursos en línea o tutoriales especializados, que puedan proporcionarte perspectivas adicionales y una comprensión más profunda de los temas en cuestión.<br><br>Recordá que la ciberseguridad es un campo desafiante y dinámico, pero cada obstáculo que encuentres es una oportunidad para crecer. Considerá cada desafío como una lección valiosa que te va a ayudar a perfeccionar tus habilidades. Mantén una mentalidad positiva y proactiva, la determinación en tu proceso de aprendizaje te va a llevar lejos. Seguí comprometido con la mejora continua, establece metas realistas y celebra tus logros, por pequeños que sean.<br><br> La paciencia y la persistencia son clave en este viaje de desarrollo. Con cada paso que tomes para fortalecer tus conocimientos, estarás construyendo una base más sólida en el apasionante mundo de la ciberseguridad. ¡Adelante, seguí aprendiendo y construyendo tu camino hacia el éxito!<br><br>Te recomendamos: <br><br> <a href='#'><img style='width: 30%; display: inline-block' src='../../images/banner.png'></a><a href='#'><img style='width: 30%; display: inline-block' src='../../images/banner.png'></a><a href='#'><img style='width: 30%; display:inline-block;' src='../../images/banner.png'></a>";
    }

    return mensaje;
}



// Función para mostrar el puntaje en la página
function mostrarPuntajeEnPagina(puntaje) {
    var puntajeEnPagina = document.getElementById("puntajeEnPagina");

    if (puntajeEnPagina && puntaje !== "Puntaje no disponible") {
        // Actualiza el contenido del párrafo con el mensaje personalizado
        puntajeEnPagina.innerHTML = "<p style='text-align: center;'><strong>Has respondido " + puntaje + " correctamente";
    }
}

// Obtén el puntaje almacenado en localStorage
var puntaje = localStorage.getItem('puntaje');

// Muestra el puntaje en la página
mostrarPuntajeEnPagina(puntaje);

// Agrega lógica para mensajes personalizados según el puntaje
var mensaje = obtenerMensajeSegunPuntaje(puntaje);

// Encuentra la sección específica donde deseas agregar el mensaje
var seccionPuntaje = document.getElementById("puntajeEnPagina");

// Crea un nuevo elemento de párrafo y establece el mensaje
var mensajeElemento = document.createElement("p");
mensajeElemento.innerHTML = mensaje;

// Agrega el elemento a la sección específica
seccionPuntaje.appendChild(mensajeElemento);