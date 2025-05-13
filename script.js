// Optional JS for interactive effects
document.querySelectorAll('.gallery-container img').forEach(img => {
    img.addEventListener('click', () => {
        window.open(img.src, '_blank');
    });
});
