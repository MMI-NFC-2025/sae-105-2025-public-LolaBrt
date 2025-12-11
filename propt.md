<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Chorus Symphony: festival de musique classique à la Citadelle de Besançon, France. Découvrez des performances envoûtantes, des artistes renommés et une ambiance unique au cœur de l'histoire." />
    <title>Programme</title>

    <link rel="icon" type="image/png" href="/assets/icons/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/svg+xml" href="/assets/icons/favicon.svg" />
    <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />
    <meta name="apple-mobile-web-app-title" content="MyWebSite" />
    <link rel="manifest" href="/assets/icons/site.webmanifest" />

    <link rel="stylesheet" href="/src/css/style.css" />
    <script type="module" src="/src/js/script.js"></script>

    <style>
        .filters {
            background: #f5f5f5;
            padding: 2rem;
            margin: 2rem auto;
            max-width: 1200px;
        }

        .filters__group {
            margin-bottom: 1.5rem;
        }

        .filters__label {
            display: block;
            font-weight: bold;
            margin-bottom: 0.5rem;
            font-size: 1.1rem;
        }

        .filters__buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .filter-btn {
            padding: 0.5rem 1rem;
            border: 2px solid #333;
            background: white;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 0.9rem;
        }

        .filter-btn:hover {
            background: #333;
            color: white;
        }

        .filter-btn.active {
            background: #333;
            color: white;
        }

        .event-section {
            transition: opacity 0.3s;
        }

        .event-section.hidden {
            display: none;
        }
    </style>

</head>

<body>
    <header id="header" class="header">
        <a class="header__link" href="/">
            <img class="header__logo" src="/assets/icons/logoblanc-021.svg" alt="Logo du site Chorus Symphony" />
        </a>

        <button class="header__menu-btn menu-btn" aria-label="menu" aria-expanded="false" aria-controls="mainNav">
            <span class="menu-btn__bar menu-btn__bar--light menu-btn__bar--top" aria-hidden="true"></span>
            <span class="menu-btn__bar menu-btn__bar--light menu-btn__bar--mid" aria-hidden="true"></span>
            <span class="menu-btn__bar menu-btn__bar--light menu-btn__bar--bottom" aria-hidden="true"></span>
        </button>
        <nav class="header__menu menu" id="mainNav" hidden>
            <ul class="menu__list u-list-unstyled">
                <li class="menu__item">
                    <a class="menu__link" href="/programme.html">Programme</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="/artistes.html">Artistes</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="/scenes.html">Scènes</a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="/infos.html">Informations pratiques</a>
                </li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="hero">  
            <img 
            class="hero__image" 
            src="/assets/img/prog/prog.webp" 
            alt="photo d'un piano" />
            <h1 class="hero__title">Programme</h1>
        </section>

        <!-- Filtres -->
        <section class="filters">
            <div class="filters__group">
                <label class="filters__label">Filtrer par date :</label>
                <div class="filters__buttons">
                    <button class="filter-btn filter-date active" data-date="all">Toutes les dates</button>
                    <button class="filter-btn filter-date" data-date="jeudi">Jeudi 28 août</button>
                    <button class="filter-btn filter-date" data-date="vendredi">Vendredi 29 août</button>
                    <button class="filter-btn filter-date" data-date="samedi">Samedi 30 août</button>
                    <button class="filter-btn filter-date" data-date="dimanche">Dimanche 31 août</button>
                </div>
            </div>

            <div class="filters__group">
                <label class="filters__label">Filtrer par scène :</label>
                <div class="filters__buttons">
                    <button class="filter-btn filter-scene active" data-scene="all">Toutes les scènes</button>
                    <button class="filter-btn filter-scene" data-scene="principale">Scène Principale</button>
                    <button class="filter-btn filter-scene" data-scene="decouverte">Espace Découverte</button>
                    <button class="filter-btn filter-scene" data-scene="recital">Scène Récital</button>
                </div>
            </div>
        </section>
        
        <section class="wrapper">
            <h2 class="wrapper__title">Quatre jours d'émotion à la Citadelle</h2>
            <p class="wrapper__intro">
                Du jeudi 28 au dimanche 31 août, la Citadelle de Besançon se transforme en un écrin vibrant pour la musique classique et
                lyrique. Notre programmation est conçue pour être une symphonie d'expériences, mêlant les grandes œuvres du répertoire à 
                des moments de partage et de découverte.
            </p>
            
            <div class="event-section" data-date="jeudi" data-scenes="decouverte principale recital">
                <h3 class="wrapper__prog--subtitle">Jeudi 28 août 2026 : Soirée d'ouverture</h3>
                <p class="wrapper__prog">
                    18h00 : Espace découverte

                    Atelier participatif : initiation au chant lyrique

                    20h00 : Scène  principale 

                    Grand concert d'ouverture : Guillaume Connesson, compositeur

                    22h30 Scène récital 

                    Récital de piano: 
                    VK, pianiste
                </p>
                <img 
                    class="wrapper__img" 
                    src="/assets/img/prog/prog-jeudi.webp" 
                    alt="homme jouant du piano" 
                    loading="lazy" />
            </div>

            <div class="event-section" data-date="vendredi" data-scenes="decouverte recital principale">
                <h3 class="wrapper__prog--subtitle">Vendredi 29 août 2026 : Soirée thématique</h3>
                <p class="wrapper__prog">
                    15h00 : Espace découverte
                    
                    Théâtre Citoyen : Représentation et Échanges
                    
                    17h00 : Scène récital
                    
                    Récital de Musique de Chambre : quatre quatuors à cordes de Schönberg
                    
                    20h30 : Scène principale
                    
                    Concert Lyrique : Nathalie Dessay, chanteuse
                </p>
                <img 
                    class="wrapper__img" 
                    src="/assets/img/prog/prog-vend.webp" 
                    alt="Nathalie Dessay" 
                    loading="lazy" />
            </div>

            <div class="event-section" data-date="samedi" data-scenes="decouverte recital principale">
                <h3 class="wrapper__prog--subtitle">Samedi 30 août 2026 : Le grand rendez-vous</h3>
                <p class="wrapper__prog">
                    Le grand rendez-vous
                    
                    15h00 : Espace découverte
                    
                    Atelier Famille : Découverte des instruments classiques
                    
                    17h00 : Scène récital
                    
                    Récital Soliste : Léon Phal, saxophoniste
                    
                    20h30 : Scène principale
                    
                    Concert Symphonique : Le Consort, Ensemble
                </p>
                <img 
                    class="wrapper__img" 
                    src="/assets/img/prog/prog-sam.webp" 
                    alt="homme jouant du saxophone" 
                    loading="lazy" />
            </div>

            <div class="event-section" data-date="dimanche" data-scenes="decouverte recital principale">
                <h3 class="wrapper__prog--subtitle">Dimanche 31 2026: Clôture en symphonie</h3>
                <p class="wrapper__prog">
                    15h00 : Espace découverte
                    
                    Grande Chorale Participative : Répétition Finale
                    
                    17h00 : Scène récital
                    
                    Récital Jeune Soliste : Arielle, violoniste
                    
                    20h30 : Scène principale
                    
                    Concert de Clôture : Orchestre de l'Opéra
                    de Toulon
                </p>
                <img 
                    class="wrapper__img" 
                    src="/assets/img/prog/prog-dim.webp" 
                    alt="petite fille jouant du violon" 
                    loading="lazy" />
            </div>
        </section>

        <section class="CTA">
            <a href="https://youtu.be/xvFZjo5PgG0?si=-efEmiaGulxBkw8G">
                <button class="CTA__btn CTA__btn--billetterie" aria-label="Accéder à la billetterie">Je prends mon billet !
                </button>
            </a>
            <a href="/assets/médias/Lola Brouart Portfolio.pdf" download class="btn-dl">
                <button class="CTA__btn CTA__btn--dl" aria-label="Télécharger le PDF du programme">Je télécharge le PDF
                    !
                </button>
            </a>
        </section>

        <section class="list__cards">
            <li class="cards-nav">
                <li class="cards-nav">
                    <img class="cards-nav__img" src="/assets/img/home/card-artistes.webp" alt="photo d'une femme jouant de la harpe"
                        loading="lazy" />
                    <a class="cards-nav__desc" href="/artistes.html">> Artistes
                    </a>
                </li>
                <li class="cards-nav">
                <img 
                    class="cards-nav__img" 
                    src="/assets/img/prog/card-scenes.webp" 
                    alt="photo d'une femme jouant de la harpe"
                    loading="lazy" />
                <a class="cards-nav__desc" href="/scenes.html">> Scènes
                </a>
                </li>
        </section>
    </main>

    <footer class="footer">
        <nav class="footer__nav">
            <ul class="u-list-unstyled footer__list">
                <li class="footer__item">
                    <a class="footer__link" href="/programme.html">Programme</a>
                </li>
                <li class="footer__item">
                    <a class="footer__link" href="/infos.html">Informations pratiques</a>
                </li>
                <li class="footer__item">
                    <a class="footer__link" href="/about.html">À propos</a>
                </li>
                <li class="footer__item">
                    <a class="footer__link" href="/contact.html">Contact</a>
                </li>
            </ul>
            <ul class="u-list-unstyled footer__list">
                <li class="footer__item">
                    <a class="footer__link" href="https://www.instagram.com/lola.nov.art/">Instagram</a>
                </li>
                <li class="footer__item">
                    <a class="footer__link" href="https://www.facebook.com/Lola.Nov.Art?locale=fr_FR">Facebook</a>
                </li>
                <li class="footer__item">
                    <a class="footer__link" href="https://lolanovart.myportfolio.com/">Podcasts</a>
                </li>
            </ul>
        </nav>
        <img class="footer__logo" src="/assets/icons/logoblanc-021.svg" alt="Logo du site Chorus Symphony" />
        <p class="footer__mentions">
            Lola Brouart
        </p>
        <p class="disclaimer">
            Projet réalisé en 2025 dans le cadre d'un exercice pédagogique au
            <a href="https://mmi.univ-fcomte.fr/">département MMi de Montbéliard</a>.
        </p>
    </footer>

    <a href="#header" class="ancre">
        <img src="/assets/icons/ancre.svg" alt="Retour en haut" width="24" height="auto">
    </a>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
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
                btn.addEventListener('click', function() {
                    dateBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    selectedDate = this.getAttribute('data-date');
                    filterEvents();
                });
            });

            sceneBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    sceneBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    selectedScene = this.getAttribute('data-scene');
                    filterEvents();
                });
            });
        });
    </script>
</body>
</html>