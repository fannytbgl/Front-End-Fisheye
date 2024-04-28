export function photographerTemplate(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/portraits/${portrait}`;
    const url = `photographer.html?id=${id}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        // Création de l'image et du lien
        const imgLink = document.createElement('a');
        imgLink.setAttribute('href', url);
        imgLink.appendChild(document.createElement('img')).setAttribute('src', picture);
        article.appendChild(imgLink);

        // Création du H2 et du lien
        const titleLink = document.createElement('a');
        titleLink.setAttribute('href', url);
        titleLink.appendChild(document.createElement('h2')).textContent = name;
        article.appendChild(titleLink);

        // Création des paragraphes
        const pLocation = document.createElement('p');
        pLocation.classList.add("location");
        pLocation.textContent = `${city}, ${country}`;
        const pTagline = document.createElement('p');
        pTagline.classList.add("tagline");
        pTagline.textContent = tagline;
        const pPrice = document.createElement('p');
        pPrice.classList.add("price");
        pPrice.textContent = `${price}€/jour`;

        article.appendChild(pLocation);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}