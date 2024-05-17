export function photographerPageTemplate(data, mediaDetails) {

    const { name, id, portrait, city, country, tagline, price } = data;
    console.log(name, city, country, tagline, price);
    const picture = `assets/photographers/portraits/${portrait}`;

    // Création de la section dédiée aux informations du photographe
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

    // Gestion des médias en fonction du format vidéo ou image (factory Media)
    function mediaElementFactory(media) {

        // Création de la div contenant les medias
        const mediaWrapper = document.createElement('div');
        mediaWrapper.classList.add('media-wrapper');

        if (media.image) {
            const image = document.createElement('img');
            image.src = `assets/photographers/pictures/${media.image}`;
            image.alt = media.title;
            mediaWrapper.appendChild(image);
        } else if (media.video) {
            const video = document.createElement('video');
            video.src = `assets/photographers/pictures/${media.video}`;
            video.alt = media.title;
            video.controls = true;
            mediaWrapper.appendChild(video);
        } else {
            // Gérer les autres types de médias si nécessaire
            console.error('Média non pris en charge :', media);
            return null;
        }

        return mediaWrapper;
    }
    
    // Création de la section dédiée aux médias
    function getPhotographerMediaSection(mediaDetails) {
        
        const mediaSection = document.createElement('section');
        mediaSection.classList.add('media-section');
    
        mediaDetails.forEach(media => {
            const mediaElement = document.createElement('div');
            mediaElement.classList.add('media-item');
            const mediaContent = mediaElementFactory(media);
            if (mediaContent) {
                mediaSection.appendChild(mediaContent); // Ajoutez mediaContent au lieu de mediaElement
            }
        });
    
        return mediaSection;
    }

    // Retourner un objet contenant les deux fonctions
    return {
        getPhotographerInfoDom: getPhotographerInfoDom,
        getPhotographerMediaSection: getPhotographerMediaSection
    };
}