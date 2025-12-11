// Script de filtrage pour la page Programme

document.addEventListener('DOMContentLoaded', function () {
    let selectedDate = 'all';
    let selectedScene = 'all';

    const dateBtns = document.querySelectorAll('.filter-date');
    const sceneBtns = document.querySelectorAll('.filter-scene');
    const eventSections = document.querySelectorAll('.event-section');

    console.log('Boutons date trouvés:', dateBtns.length);
    console.log('Boutons scène trouvés:', sceneBtns.length);
    console.log('Sections événements trouvées:', eventSections.length);

    function filterEvents() {
        console.log('Filtrage avec date:', selectedDate, 'et scène:', selectedScene);

        eventSections.forEach(section => {
            const sectionDate = section.getAttribute('data-date');
            const sectionScene = section.getAttribute('data-scene');

            console.log('Section:', sectionDate, sectionScene);

            const dateMatch = selectedDate === 'all' || sectionDate === selectedDate;
            const sceneMatch = selectedScene === 'all' || sectionScene === selectedScene;

            if (dateMatch && sceneMatch) {
                section.classList.remove('hidden');
                console.log('Affiché');
            } else {
                section.classList.add('hidden');
                console.log('Caché');
            }
        });
    }

    dateBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            console.log('Clic sur date:', this.getAttribute('data-date'));
            dateBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedDate = this.getAttribute('data-date');
            filterEvents();
        });
    });

    sceneBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            console.log('Clic sur scène:', this.getAttribute('data-scene'));
            sceneBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedScene = this.getAttribute('data-scene');
            filterEvents();
        });
    });
});