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