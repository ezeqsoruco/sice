var enlaces = document.querySelectorAll(".nav-link");
var tabs = document.querySelectorAll(".tab-opciones__link");

function agregarClaseActive(event) {
  event.preventDefault();

  enlaces.forEach(function (enlace) {
    enlace.classList.remove("active");
  });

  this.classList.add("active");

  if (this.href) {
    location.href = this.href;
  }
}

function filtrarServicios(event) {
  event.preventDefault();

  let seccion = this.name;

  let bloques = document.querySelectorAll(".tab__bloques");

  bloques.forEach(function (bloque) {
    bloque.classList.remove("d-none");
  });

  if (seccion === "todos") {
    bloques.forEach(function (bloque) {
      bloque.classList.add("d-block");
    });
    return;
  }

  bloques.forEach(function (bloque) {
    if (bloque.id !== seccion) {
      bloque.classList.add("d-none");
    }
    bloque.classList.add("d-block");
  });
}

function efectoBarraProgreso() {
  let barras = document.querySelectorAll(".progress-bar");

  barras.forEach((x, index) => {
    x.classList.remove("inicio");
    x.classList.add("final" + (index + 1));
  });
}

function mostrarCard(element) {
  let card = element.nextElementSibling;

  element.classList.add("d-none");

  card.classList.remove("d-none");
}

function cerrarCard(element, button) {
  let card = button.offsetParent;
  card.classList.add("d-none");

  let imagen = document.getElementById(element).children[0];
  imagen.classList.remove("d-none");
}

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", agregarClaseActive);
});

tabs.forEach(function (tab) {
  tab.addEventListener("click", filtrarServicios);
});

efectoBarraProgreso();
