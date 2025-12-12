const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const logo = document.querySelector(".header__logo");
const page = document.body;

// Vérifier si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.ariaExpanded === "true";
        const isClosed = !isOpen;

        // Mise à jour des attributs ARIA pour accessibilité
        toggle.ariaExpanded = isClosed;
        nav.hidden = isOpen;
        logo.classList.toggle("header__logo--extend", isClosed);
        page.classList.toggle("u-noscroll", isClosed);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.header__menu');

    menuBtn.addEventListener('click', function () {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        this.setAttribute('aria-expanded', !isExpanded);

        if (!isExpanded) {
            menu.removeAttribute('hidden');
            document.body.style.overflow = 'hidden'; // Empêche le scroll
        } else {
            menu.setAttribute('hidden', '');
            document.body.style.overflow = ''; // Réactive le scroll
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