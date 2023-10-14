document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const totalSlides = slides.length;
    const radius = 150; // ajustez cette valeur pour modifier l'écart entre les images
    const theta = 2 * Math.PI / totalSlides;
    let currSlide = 0;

function updateCarousel() {
    for (let [index, slide] of slides.entries()) {
        slide.classList.remove('active'); // Retirez la classe 'active' de toutes les diapositives pour commencer

        const angle = theta * (index - currSlide);
        const xPosition = Math.sin(angle) * radius;
        const zPosition = Math.cos(angle) * radius - radius;
        let scaleValue = 0.75;

        if (index === currSlide) {
            scaleValue = 1;
            slide.style.zIndex = 3; // Bring the middle slide to the front
            slide.classList.add('active');  // Ajoutez la classe 'active' à la diapositive du milieu
        } else {
            slide.style.zIndex = 1; // Push other slides to the back
        }

        slide.style.transform = `translateX(${xPosition}px) translateZ(${zPosition}px) scale(${scaleValue})`;
    }
}

    prevButton.addEventListener('click', () => {
        currSlide = (currSlide - 1 + totalSlides) % totalSlides; // This ensures we loop correctly
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currSlide = (currSlide + 1) % totalSlides; // Looping as well
        updateCarousel();
    });

    // Initial setup
    updateCarousel();
});
