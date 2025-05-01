document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img.hover-zoom');

    images.forEach(img => {
        img.style.transition = "transform 0.3s ease";

        img.addEventListener('mouseenter', () => {
            img.style.transform = "scale(1.05)";
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = "scale(1)";
        });
    });
});
