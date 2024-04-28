import { photographerTemplate } from "../templates/photographer.js";
    
    async function getPhotographers() {
        try {
            const photographersDataResponse = await fetch('./data/photographers.json');
    
            if (!photographersDataResponse.ok) {
                throw new Error('Erreur de chargement des données des photographes');
            }
    
            const photographersData = await photographersDataResponse.json();
    
            // Extrait le groupe de photographes du fichier JSON
            const photographers = photographersData.photographers;

            console.log(photographers);

            return photographers;
        } catch (error) {
            console.error('Erreur lors de la récupération des données ', error);
            // Gérez l'erreur selon vos besoins
        }
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerTemplate(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    function navigateToPhotographerPage(photographerId) {
        // Redirect to photographer page with the photographerId in the URL
        window.location.href = `photographer.html?id=${photographerId}`;
    }

    async function init() {
        try {
            // Récupère les datas des photographes
            const photographers = await getPhotographers();
            displayData(photographers)

            // Add event listeners to photographer links
        const photographerLinks = document.querySelectorAll('.photographer-card');
        photographerLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const photographerId = link.dataset.photographerId;
                navigateToPhotographerPage(photographerId);
            });
        })
        } catch (error) {
            console.error('Erreur lors de l\'initialisation ', error);
            // Gérez l'erreur selon vos besoins
        }
    }
    
    init();
    
