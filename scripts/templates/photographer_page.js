export function photographerPageTemplate(data, mediaDetails) {

    const { name, id, portrait, city, country, tagline, price } = data;
    console.log(name, city, country, tagline, price);
    const picture = `assets/photographers/portraits/${portrait}`;

    function getPhotographerInfoDom() {
        
        //Création div infos
        const divPhotographerInfo = document.createElement('div');

        //Elements dans la div infos
        const photographerTitle = document.createElement('h1');
        photographerTitle.textContent = `${name}`;
        const pLocation = document.createElement('p');
        pLocation.classList.add("location");
        pLocation.textContent = `${city}, ${country}`;
        const pTagline = document.createElement('p');
        pTagline.classList.add("tagline");
        pTagline.textContent = tagline;

        // Ajouter les éléments à la div infos
        divPhotographerInfo.appendChild(photographerTitle);
        divPhotographerInfo.appendChild(pLocation);
        divPhotographerInfo.appendChild(pTagline);

        // Création de l'élément img pour la photo du photographe
        const photographerImage = document.createElement('img');
        photographerImage.setAttribute('src', picture);

        // Ajout de l'image après la div infos
        divPhotographerInfo.after(photographerImage);

        // Retourner la div infos
        return divPhotographerInfo;
    }

    function getPhotographerMediaSection(mediaDetails) {
        // Création de la section pour les médias
        const mediaSection = document.createElement('section');
        mediaSection.classList.add('media-section');

        // Ajout du titre
        const title = document.createElement('h2');
        title.textContent = 'Media';
        mediaSection.appendChild(title);

        // Ajout des médias
        mediaDetails.forEach(media => {
            const mediaElement = document.createElement('div');
            mediaElement.classList.add('media-item');
            // Ajoutez le code pour afficher chaque média
            // Par exemple, créer un élément img pour les images ou vidéo pour les vidéos
            // Assurez-vous d'ajuster le contenu en fonction du type de média (image, vidéo, etc.)
            // Voici un exemple pour les images :
            const image = document.createElement('img');
            image.src = `assets/photographers/${media.image}`;
            image.alt = media.title;
            mediaElement.appendChild(image);
            mediaSection.appendChild(mediaElement);
        });

        return mediaSection;
    }

    // Retourner un objet contenant les deux fonctions
    return {
        getPhotographerInfoDom: getPhotographerInfoDom,
        getPhotographerMediaSection: getPhotographerMediaSection
    };
}