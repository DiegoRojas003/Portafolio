var mediaQuery = window.matchMedia("(max-width: 767px)");

// Función para manejar el cambio en la media query
function handleMediaQueryChange(mediaQuery) {
    if (!mediaQuery.matches) { // Si la media query no se cumple
      window.sr = ScrollReveal();

      sr.reveal('.contenedor-header',{
          duration: 3000,
          origin: 'bottom',
          distance: '-100px'
       });
      
       sr.reveal('.container-inicio',{
          origin: 'left',
          duration: 3000,
          distance: '100px',
          opacity: 0.1
       });
       sr.reveal('.about-container',{
          duration: 2000,
          origin: 'bottom',
          distance: '100px'
       });
       sr.reveal('.center-text',{
          duration: 2000,
          origin: 'bottom',
          distance: '100px'
       });
       
       sr.reveal('.row:nth-child(1)',{
          duration: 2000,
          origin: 'left',
          distance: '200px'
       });
       sr.reveal('.row:nth-child(2)',{
          duration: 2000,
          origin: 'right',
          distance: '200px'
       });
       sr.reveal('.row:nth-child(3)',{
          duration: 2000,
          origin: 'left',
          distance: '200px'
       });
       sr.reveal('.row:nth-child(4)',{
          duration: 2000,
          origin: 'right',
          distance: '200px'
       });sr.reveal('.row:nth-child(5)',{
          duration: 2000,
          origin: 'left',
          distance: '200px'
       });
       sr.reveal('.row:nth-child(6)',{
          duration: 2000,
          origin: 'right',
          distance: '200px'
       });
       
       sr.reveal('.contacto',{
          duration: 2000,
          origin: 'bottom',
          distance: '100px'
       });
       sr.reveal('footer',{
         duration: 3000,
         origin: 'bottom',
         distance: '100px'
      });
    }
}

// Llamar a la función inicialmente para manejar el estado actual de la media query
handleMediaQueryChange(mediaQuery);

// Agregar un listener para detectar cambios en la media query
mediaQuery.addListener(handleMediaQueryChange);
