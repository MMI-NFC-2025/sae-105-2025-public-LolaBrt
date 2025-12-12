document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu__link');
    const body = document.body;

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', function () {
            const isOpen = menu.classList.contains('is-active');

            if (isOpen) {
                menu.classList.remove('is-active');
                menuBtn.setAttribute('aria-expanded', 'false');
                body.classList.remove('u-noscroll');
            } else {
                menu.classList.add('is-active');
                menuBtn.setAttribute('aria-expanded', 'true');
                body.classList.add('u-noscroll');
            }
        });
    }

    // Fermer le menu quand on clique sur un lien
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menu.classList.remove('is-active');
            menuBtn.setAttribute('aria-expanded', 'false');
            body.classList.remove('u-noscroll');
        });
    });

    // Fermer le menu si on clique sur le fond
    if (menu) {
        menu.addEventListener('click', function (e) {
            if (e.target === menu) {
                menu.classList.remove('is-active');
                menuBtn.setAttribute('aria-expanded', 'false');
                body.classList.remove('u-noscroll');
            }
        });
    }

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
            menuBtn.setAttribute('aria-expanded', 'false');
            body.classList.remove('u-noscroll');
        }
    });
});

/*filtre*/
document.addEventListener('DOMContentLoaded', function () {
    let selectedDate = 'all';
    let selectedScene = 'all';

    const dateBtns = document.querySelectorAll('.filter-date');
    const sceneBtns = document.querySelectorAll('.filter-scene');
    const eventSections = document.querySelectorAll('.event-section');

    function filterEvents() {
        eventSections.forEach(section => {
            const sectionDate = section.getAttribute('data-date');
            const sectionScenes = section.getAttribute('data-scenes').split(' ');

            const dateMatch = selectedDate === 'all' || sectionDate === selectedDate;
            const sceneMatch = selectedScene === 'all' || sectionScenes.includes(selectedScene);

            if (dateMatch && sceneMatch) {
                section.classList.remove('hidden');
            } else {
                section.classList.add('hidden');
            }
        });
    }

    dateBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            dateBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedDate = this.getAttribute('data-date');
            filterEvents();
        });
    });

    sceneBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            sceneBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedScene = this.getAttribute('data-scene');
            filterEvents();
        });
    });
});