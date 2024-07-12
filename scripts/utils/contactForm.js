function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
    modal.setAttribute('aria-hidden', 'false');
    const firstFocusableElement = modal.querySelector('input, textarea, button');
    firstFocusableElement.focus();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    const contactButton = document.querySelector('.contact_button');
    contactButton.focus();
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("contact_modal");
    const focusableElements = modal.querySelectorAll('input, textarea, button, img[role="button"]');
    const focusableElementsArray = Array.prototype.slice.call(focusableElements);
    
    modal.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            const focusIndex = focusableElementsArray.indexOf(document.activeElement);
            if (e.shiftKey && focusIndex === 0) {
                e.preventDefault();
                focusableElementsArray[focusableElementsArray.length - 1].focus();
            } else if (!e.shiftKey && focusIndex === focusableElementsArray.length - 1) {
                e.preventDefault();
                focusableElementsArray[0].focus();
            }
        }
    });

    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data);
        closeModal();
    });
});
