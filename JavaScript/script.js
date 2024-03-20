document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector(".toggle");
    const navlist = document.querySelector(".nav-list");

    if (navToggle && navlist) {
        navToggle.addEventListener("click", () => {
            navlist.classList.toggle("nav-list-visible");
            if(navlist.classList.contains("nav-list-visible")){
                navToggle.setAttribute("aria-label", "Cerrar menú")
            }else{
                navToggle.setAttribute("aria-label", "Abrir menú")
            }


        });
    } else {
        console.error("No se encontraron elementos .toggle o .nav-list en el DOM.");
    }
});