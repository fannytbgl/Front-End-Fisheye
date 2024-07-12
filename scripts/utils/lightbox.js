document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightbox_modal');
    const lightboxImage = document.querySelector('.lightbox-image');
    const mediaWrappers = document.querySelectorAll('.media-wrapper');

    console.log('mediaWrappers:', mediaWrappers);
    
    // Ajouter un événement clic à chaque media-wrapper
    mediaWrappers.forEach(mediaWrapper => {
        mediaWrapper.addEventListener('click', () => {
            console.log("click");
            lightboxModal.style.display = 'flex';
        });
    });

    // Ajouter un événement clic à la lightbox pour fermer en cliquant en dehors de l'image
    lightboxModal.addEventListener('click', (event) => {
        if (event.target === lightboxModal) {
            closeLightbox();
        }
    });
});