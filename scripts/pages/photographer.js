/*export async function getPhotographerDetails(photographerId) {
    try {
        // Assuming you have a local data structure with photographer details
        const photographerDataResponse = await fetch(`./data/photographers/${photographerId}.json`);

        if (!photographerDataResponse.ok) {
            throw new Error('Erreur lors du chargement des détails du photographe');
        }

        const photographerDetails = await photographerDataResponse.json();
        return photographerDetails;
    } catch (error) {
        console.error('Erreur lors de la récupération des détails du photographe ', error);
        // Handle the error according to your needs
    }
}*/

window.addEventListener('DOMContentLoaded', async () => {
    // Récupérer l'ID du photographe à partir de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const photographerId = urlParams.get('id');
    getPhotographerDetails(photographerId);
})