document.addEventListener('DOMContentLoaded', function () {
    // Ocultar la pantalla de carga cuando la página esté completamente cargada
    const loader = document.querySelector('.loader');
    window.addEventListener('load', function () {
        loader.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS
    AOS.init();
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('div[id]');
    const navLinks = document.querySelectorAll('.nav-bar a');

    const options = {
        threshold: 0.6
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const habilidades = document.querySelector('.habilidades');
    habilidades.style.opacity = 0;
    habilidades.style.transition = 'opacity 1s';
    
    window.addEventListener('scroll', function() {
        const top = habilidades.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (top < windowHeight) {
            habilidades.style.opacity = 1;
        }
    });
});

// Codigo scroll para javascript

document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los enlaces con la clase "smooth-scroll"
    var scrollLinks = document.querySelectorAll('.smooth-scroll');

    // Agrega un evento de clic a cada enlace
    scrollLinks.forEach(function(scrollLink) {
        scrollLink.addEventListener('click', function(event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();
            
            // Obtiene el atributo href del enlace
            var targetId = this.getAttribute('href');
            
            // Obtiene la posición de la sección de destino
            var targetPosition = document.querySelector(targetId).offsetTop;
            
            // Desplaza suavemente la página hacia la sección de destino
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
});


