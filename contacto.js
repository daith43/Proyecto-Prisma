
      /* Formulario rotativo */
      const next = document.querySelector(".btn");

      next.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".front").style.transform =
          "perspective(600px) rotateY(180deg)";
        document.querySelector(".back").style.transform =
          "perspective(600px) rotateY(360deg)";
      });

      /* Boton de enviar en el formulario */

      const modal = document.querySelector(".modal");

      document.getElementById('form').addEventListener('submit', (e)=> {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario


        const form = e.target;
        const formData = new FormData(form);
    
        // Crear un objeto URLSearchParams para construir la query string
        const params = new URLSearchParams();
    
        for (const pair of formData.entries()) {
            params.append(pair[0], pair[1]);
        }
    
        // Crear la nueva URL con los parámetros
        const newUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;
    
     // Actualizar la URL sin recargar la página
     history.pushState(null, '', newUrl);

     // Llamar otras funciones que necesiten ejecutarse al enviar el formulario
     myOtherFunctions();
 });
 
 function myOtherFunctions() {
  document.body.style.background = "url(favicon/mockup3.jpg)";
  document.body.style.backgroundSize = "cover"; // Ajustar el tamaño de la imagen para cubrir todo el fondo
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundPosition = "center"; 
  document.body.style.transition = "background 1000ms";

  /* Ventana Modal */
  modal.style.display = "block";
  modal.style.opacity = 1;


  setTimeout(() => {
    modal.style.display = "none";
    modal.style.transition = "opacity .2s";
    modal.style.opacity = 0;

  }, 3000); 
}