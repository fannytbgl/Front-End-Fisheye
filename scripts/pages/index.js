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

    async function init() {
        try {
            // Récupère les datas des photographes
            const photographers = await getPhotographers();
            displayData(photographers)
        } catch (error) {
            console.error('Erreur lors de l\'initialisation ', error);
            // Gérez l'erreur selon vos besoins
        }
    }
    
    init();
    
