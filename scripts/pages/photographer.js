import { photographerPageTemplate } from "../templates/photographer_page.js";

// Test de getPhotographersDetails
//getPhotographersDetails(243)
//.then(result => console.log(result));
 
async function getPhotographersDetails(photographerId) {
        // Recupere toutes les data de photographers.json
        const photographersDataResponse = await fetch('./data/photographers.json');
        const photographersData = await photographersDataResponse.json();
        
        const photographers = photographersData.photographers;
        const medias = photographersData.media;
        
        // Retrouve les infos du photographe
        // sous forme de dictionnaire {id : 12, name : "Tysona", comportement : "exemplaire"}
        // Pour accéder a un element du dico :
        // dico[name] ca donne "Tysona"
        // infos sur array.find() parce que chatgpt c'est bien
        // mais faut lire la documentation
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
        const photograph = photographers.find(candidat => candidat["id"] == photographerId);
        
        // check pour chaque photo si l'id du photographe correspond 
        // mediaDetails -> [{photo1}, {photo2}, {photo3}] liste de dictionnaires
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        const mediaDetails = [];
        medias.forEach(media => {
            if (media["photographerId"] == photographerId) {
                mediaDetails.push(media);
            }
        })
        // Et ces deux trucs la sont dans une array 
        // une array de longueur 2 avec un dico puis une array de dico, c'est naze mais bon ahah
        // array = [{name : "Tysona", age = 1}, [{name : "Ouli", age = "1"}, {name : "Fanny", ageMental = 12}]]
        // array[0][name] => "Tysona"
        // array[1][1][ageMental] => 12
        return [photograph, mediaDetails];
    }

    async function displayPhotographerData(photographer, mediaDetails) {
        const photographerSection = document.querySelector(".photograph-header");

        // Appeler la fonction photographerPageTemplate avec les données du photographe
        const photographerPageModel = photographerPageTemplate(photographer, mediaDetails);
    
        // Obtenir le DOM de l'info du photographe à partir du modèle
        const photographerInfoDom = photographerPageModel.getPhotographerInfoDom();
        const photographerMediaDom = photographerPageModel.getPhotographerMediaSection(mediaDetails);
    
        // Ajouter le DOM de l'info du photographe à la section
        photographerSection.appendChild(photographerInfoDom);
        photographerSection.appendChild(photographerMediaDom);
    }

    //L'événement DOMContentLoaded écoute le chargement de la page.
    window.addEventListener('DOMContentLoaded', async () => {
        // Récupérer l'ID du photographe à partir de l'URL
        const urlParams = new URLSearchParams(window.location.search);
        const photographerId = urlParams.get('id');
        
        // Appeler la fonction getPhotographerDetails avec l'ID du photographe récupéré
        const [photographer, mediaDetails] = await getPhotographersDetails(photographerId);

        // Passer les données du photographe à displayPhotographerData
        displayPhotographerData(photographer, mediaDetails);
    });