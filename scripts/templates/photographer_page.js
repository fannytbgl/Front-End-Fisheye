export function photographerPageTemplate(data) {

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

    // Retourner un objet avec la méthode getPhotographerInfoDom
    return {
        getPhotographerInfoDom: getPhotographerInfoDom
    };
}