var enlaces = document.querySelectorAll(".nav-link");
var tabs = document.querySelectorAll(".tab-opciones__link");

function agregarClaseActive(event) {
  event.preventDefault();

  enlaces.forEach(function (enlace) {
    enlace.classList.remove("active");
  });

  this.classList.add("active");
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

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", agregarClaseActive);
});

tabs.forEach(function (tab) {
  tab.addEventListener("click", filtrarServicios);
});
