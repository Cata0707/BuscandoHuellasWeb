// Array para almacenar las entradas de mascotas perdidas
let entradasMascotas = [];

// Función para agregar una nueva entrada desde el formulario
function agregarEntrada() {
  const nombre = document.getElementById("nombre").value;
  const genero = document.getElementById("genero").value; // Nuevo
  const descripcion = document.getElementById("descripcion").value;
  const fotoInput = document.getElementById("foto");
  const foto = fotoInput.files[0];
  const fechaHora = document.getElementById("fechaHora").value;
  const ubicacion = document.getElementById("ubicacion").value;
  const dueño = document.getElementById("dueño").value;
  const telefonoDueño = document.getElementById("telefonoDueño").value;

  // Objeto entrada
  const nuevaEntrada = {
    nombre,
    foto: foto.name,
    descripcion,
    genero,
    fechaHora,
    ubicacion,
    dueño,
    telefonoDueño,
  };

  // Agregar la entrada al array de entradasMascotas
  entradasMascotas.push(nuevaEntrada);
  mostrarEntrada(nuevaEntrada);
  document.getElementById("mascota-form").reset();
  // Guardar el array en el Local Storage
  localStorage.setItem("entradasMascotas", JSON.stringify(entradasMascotas));
}

// Función para aplicar colores aleatorios a las tarjetas de entrada
function asignarColoresAleatorios() {
  const tarjetas = document.querySelectorAll(".entrada");
  const colores = ["color-1", "color-2", "color-3"];

  tarjetas.forEach((tarjeta, index) => {
    const colorAleatorio = colores[index % colores.length]; // Obtén un color de la lista
    tarjeta.classList.add(colorAleatorio);
  });
}

// Función para mostrar una entrada en la sección de resultados
function mostrarEntrada(entrada) {
  const resultadosSection = document.getElementById("resultados");
  const entradaDiv = document.createElement("div");
  entradaDiv.classList.add("entrada");
  const colores = ["color-1", "color-2", "color-3"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  entradaDiv.classList.add(colorAleatorio);

  const fechaHora = new Date(entrada.fechaHora);
  const dia = fechaHora.getDate();
  const mes = fechaHora.getMonth() + 1;
  const año = fechaHora.getFullYear().toString().slice(-2);
  const horas = fechaHora.getHours();
  const minutos = fechaHora.getMinutes();
  const minutosFormateados = minutos < 10 ? `0${minutos}` : minutos;
  const fechaHoraFormateada = `${dia}/${mes}/${año} - ${horas}:${minutosFormateados} Hs`;
  const fotoURL = `imagenes/${entrada.foto}`;

  // Agregar el nombre al div de la entrada
  const nombreEntrada = document.createElement("h3");
  nombreEntrada.textContent = entrada.nombre;
  entradaDiv.appendChild(nombreEntrada);

  // Agregar la imagen al div de la entrada
  const imagen = new Image();
  imagen.src = fotoURL;
  imagen.alt = entrada.nombre;
  entradaDiv.appendChild(imagen);

  // Agregar el resto de la información
  entradaDiv.innerHTML += `
        <p class="descripcion-entrada"><strong><em>${entrada.descripcion}</em></strong></p>
        <p class="genero-entrada"><strong>Sexo:</strong> ${entrada.genero}</p>
        <p class="info-entrada"><strong>Fecha y Hora Desaparición:</strong> ${fechaHoraFormateada}</p>
        <p class="info-entrada"><strong>Lugar:</strong> ${entrada.ubicacion}</p>
        <p class="info-entrada"><strong>Dueño:</strong> ${entrada.dueño}</p>
        <p class="info-entrada"><strong>Teléfono:</strong> ${entrada.telefonoDueño}</p>
    `;

  resultadosSection.insertBefore(entradaDiv, resultadosSection.firstChild);
}
// Maneja el evento submit del formulario de mascotas
document
  .getElementById("mascota-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    agregarEntrada();
  });

// Al cargar la página
window.addEventListener("load", () => {
  asignarColoresAleatorios();

  // Cargar las entradas desde el archivo JSON
  cargarEntradasDesdeJSON();

  // Verificar si hay una nueva entrada en el Local Storage
  const nuevaEntradaString = localStorage.getItem("nuevaEntrada");
  if (nuevaEntradaString) {
    const nuevaEntrada = JSON.parse(nuevaEntradaString);
    mostrarEntrada(nuevaEntrada);

    // Limpiar la nueva entrada en el Local Storage después de mostrarla
    localStorage.removeItem("nuevaEntrada");
  }
});

// Función para cargar las entradas desde el archivo JSON
function cargarEntradasDesdeJSON() {
  fetch("entradas.json")
    .then((response) => response.json())
    .then((data) => {
      entradasMascotas = data;
      entradasMascotas.forEach(function (entrada) {
        mostrarEntrada(entrada);
      });
    })
    .catch((error) => {
      console.error("Error al cargar entradas desde el archivo JSON:", error);
    });
}

// Función para mostrar el modal del formulario de adopción
function mostrarFormularioAdopcion() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
    limpiarFormularioAdopcion();
    resetConfirmacion(); // Llamada a la función de reinicio

}
function validarFormatoEmail(email) {
  // Utilizando una expresión regular para validar el formato del correo electrónico
  var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return formatoEmail.test(email);
}
// Función para enviar el formulario de adopción y redireccionar si es necesario
function enviarFormularioAdopcion(event) {
  console.log("Iniciando enviar formulario de adopción...");
  if (event) {
    event.preventDefault();
  }
  console.log("Enviando formulario de adopción...");
  var nombreAdoptante = document.getElementById("nombreAdoptante").value;
  var edadAdoptante = document.getElementById("edadAdoptante").value;
  var tipoVivienda = document.getElementById("tipoVivienda").value;
  var ninosHogar = document.getElementById("ninosHogar").value;
  var tienePatio = document.getElementById("tienePatio").value;
  var veterinario = document.getElementById("veterinario").value;
  var animalAdoptar = document.getElementById("animalAdoptar").value;
  var otrasMascotas = document.getElementById("otrasMascotas").value;
  var trabaja = document.getElementById("trabaja").value;
  var horasTrabajo = document.getElementById("horasTrabajo").value;
  var tienesMovilidad = document.getElementById("tienesMovilidad").value;
  var tipoMovilidad = document.getElementById("tipoMovilidad").value;
  var razonAdopcion = document.getElementById("razonAdopcion").value;
  var telefonoAdoptante = document.getElementById("telefonoAdoptante").value;
  var emailAdoptante = document.getElementById("emailAdoptante").value;
  if (!validarFormatoEmail(emailAdoptante)) {
    console.log("Formato de correo electrónico inválido");
    // Puedes mostrar un mensaje al usuario indicando que el formato del correo es inválido.
    return;
  }
  console.log("Cargando datos form");
  // Crear un objeto con los datos del formulario
  var datosAdopcion = {
    nombreAdoptante: nombreAdoptante,
    edadAdoptante: edadAdoptante,
    tipoVivienda: tipoVivienda,
    ninosHogar: ninosHogar,
    tienePatio: tienePatio,
    veterinario: veterinario,
    animalAdoptar: animalAdoptar,
    otrasMascotas: otrasMascotas,
    trabaja: trabaja,
    horasTrabajo: horasTrabajo,
    tienesMovilidad: tienesMovilidad,
    tipoMovilidad: tipoMovilidad,
    razonAdopcion: razonAdopcion,
    telefonoAdoptante: telefonoAdoptante,
    emailAdoptante: emailAdoptante,
  };
  // Convertir el objeto a formato JSON y almacenar en localStorage
  localStorage.setItem("datosAdopcion", JSON.stringify(datosAdopcion));
  console.log("Cargando datos en localStorage");

 // Mostrar la pantalla de confirmación
  mostrarConfirmacion();
}

// Función para cerrar el formulario de adopción y mostrar la confirmación
function cerrarFormularioAdopcion() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Función para mostrar la pantalla de confirmación
function mostrarConfirmacion() {
  var modalConfirmacion = document.getElementById("modalConfirmacion");
  modalConfirmacion.style.display = "block";
}
// Función para mostrar y ocultar campos según la selección del usuario
function mostrarHorasTrabajo() {
  const trabajaSelect = document.getElementById("trabaja");
  const horasTrabajoDiv = document.getElementById("horasDeTrabajo");
  horasTrabajoDiv.style.display =
    trabajaSelect.value === "si" ? "block" : "none";
}

function mostrarTipoMovilidad() {
  const tienesMovilidadSelect = document.getElementById("tienesMovilidad");
  const tipoMovilidadDiv = document.getElementById("tipoDeMovilidad");
  tipoMovilidadDiv.style.display =
    tienesMovilidadSelect.value === "si" ? "block" : "none";
}
// Función para reiniciar el estado del formulario de confirmación
function resetConfirmacion() {
  var modalConfirmacion = document.getElementById("modalConfirmacion");
  modalConfirmacion.style.display = "none";
}

// Asociar las funciones a los eventos de cambio en los select correspondientes
document
  .getElementById("trabaja")
  .addEventListener("change", mostrarHorasTrabajo);
document
  .getElementById("tienesMovilidad")
  .addEventListener("change", mostrarTipoMovilidad);

//Nueva función para limpiar el formulario de adopción
function limpiarFormularioAdopcion() {
  // Obtén los elementos de formulario y restablece su valor a ''
  document.getElementById("nombreAdoptante").value = "";
  document.getElementById("edadAdoptante").value = "";
  document.getElementById("tipoVivienda").value = "";
  document.getElementById("ninosHogar").value = "";
  document.getElementById("tienePatio").value = "";
  document.getElementById("veterinario").value = "";
  document.getElementById("animalAdoptar").value = "";
  document.getElementById("otrasMascotas").value = "";
  document.getElementById("trabaja").value = "";
  document.getElementById("horasTrabajo").value = "";
  document.getElementById("tienesMovilidad").value = "";
  document.getElementById("tipoMovilidad").value = "";
  document.getElementById("razonAdopcion").value = "";
  document.getElementById("telefonoAdoptante").value = "";
  document.getElementById("emailAdoptante").value = "";
}

