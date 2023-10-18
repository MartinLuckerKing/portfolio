document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.querySelector('.next');
    const totalSlides = slides.length;
    const radius = 150; 
    const theta = 2 * Math.PI / totalSlides;
    let currSlide = 0;

    function updateCarousel() {
        for (let [index, slide] of slides.entries()) {
            slide.classList.remove('active');
        
            const angle = theta * (index - currSlide);
            const xPosition = Math.sin(angle) * radius;
            let scaleValue = 0.75;
        
            slide.style.zIndex = '1';  
            if (index === currSlide) {
                scaleValue = 1;
                slide.style.zIndex = '2'; 
                slide.classList.add('active');
            }
        
            slide.style.transform = `translateX(${xPosition}px) scale(${scaleValue})`;
        }
    }
    
    nextButton.addEventListener('click', () => {
        currSlide = (currSlide + 1) % totalSlides;
        updateCarousel();
    });

    updateCarousel();
});