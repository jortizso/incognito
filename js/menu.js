(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const navLinks = document.querySelectorAll('.nav__link a');

    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    // Agrega un evento de clic a cada enlace dentro del menú
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cierra el menú al hacer clic en un enlace
            menu.classList.remove('nav__link--show');
        });
    });
})();
