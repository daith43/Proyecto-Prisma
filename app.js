const nav = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-link");
const logo = document.querySelector('.logo');
const arrow = document.querySelector(".arrow-up");


window.addEventListener("scroll", function () {
  let scrollPosition = window.scrollY; // Obtener la posición de desplazamiento vertical

  // Si el desplazamiento es mayor a 10px, mostrar el nav
  /*if (scrollPosition > 10) {
    nav.classList.add("nav-scroll");
    links.forEach((link) => link.classList.add("scrolled"));
    logo.classList.add("logo-scroll");

  } else if (scrollPosition < 10) {
    nav.classList.remove("nav-scroll");
    links.forEach((link) => link.classList.remove("scrolled"));
    logo.classList.remove("logo-scroll");

  }*/

  // Si el desplazamiento es mayor a 300px, mostrar la flecha de subir
  if (scrollPosition > 600) {
    arrow.classList.add("arrow-visible");
  } else if (scrollPosition < 600) {
    arrow.classList.remove("arrow-visible");
  }
});



// RECURSOS, filtro por categoria

document.addEventListener("DOMContentLoaded", function() {
  const categorias = document.querySelectorAll(".categoria");
  
  categorias.forEach(categoria => categoria.addEventListener("click", function() {
    categorias.forEach(c => c.classList.remove("activo"));
    this.classList.add("activo");

    const categoriaSeleccionada = this.getAttribute("data-categoria");


    const productos = document.querySelectorAll(".producto");
    productos.forEach(producto => {
      producto.classList.toggle("mostrar", categoriaSeleccionada === "todos" || producto.classList.contains(categoriaSeleccionada));
    });

    const tituloCat = document.querySelector('.titulo-cat');
    tituloCat.textContent = "Categoria " + categoriaSeleccionada;

  }));

  document.querySelector('.categoria.activo').click();
});




