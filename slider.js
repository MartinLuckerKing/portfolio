function initCarousel(sliderElement) {
    const slides = sliderElement.querySelectorAll('.slide');
    const nextButton = sliderElement.querySelector('.next');
    const totalSlides = slides.length;
    const radius = 150;
    const theta = 2 * Math.PI / totalSlides;
    let currSlide = 0;
  
    function getResponsiveScale() {
      const width = window.innerWidth;
  
      let newRadius = radius; 
      
      let scales = {
          active: 1,
          inactive: 0.75
      };
      
      if (width <= 320) {
          newRadius = 70;
          scales = { active: 0.65, inactive: 0.45 };
  
      }  else if (width <= 375) {
          newRadius = 90;
          scales = { active: 0.75, inactive: 0.45 };
  
  
      }  else if (width <= 425) {
          newRadius = 90;
          scales = { active: 0.85, inactive: 0.55 };
  
      
      }  else if (width <= 600) {
          newRadius = 80;
          scales = { active: 0.60, inactive: 0.35 };
  
  
      } else if (width <= 768) {
          newRadius = 120;
          scales = { active: 1, inactive: 0.7 };
  
      } 
  
      return { ...scales, radius: newRadius };
    }
  
    function updateCarousel() {
      const config = getResponsiveScale();
      const radius = config.radius;
  
      for (let [index, slide] of slides.entries()) {
        slide.classList.remove('active');
        const angle = theta * (index - currSlide);
        const xPosition = Math.sin(angle) * radius;
        let scaleValue = config.inactive;
  
        slide.style.zIndex = '1';  
        if (index === currSlide) {
          scaleValue = config.active;
          slide.style.zIndex = '2'; 
          slide.classList.add('active');
        }
        slide.style.transform = `translate(-50%, -50%) translateX(${xPosition}px) scale(${scaleValue})`;
      }
    }
  
    nextButton.addEventListener('click', () => {
      currSlide = (currSlide + 1) % totalSlides;
      updateCarousel();
    });
  
    updateCarousel();
    window.addEventListener('resize', updateCarousel);
  }