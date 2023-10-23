document.addEventListener('DOMContentLoaded', function () {
  fetch('./project/project.json')
    .then(response => response.json())
    .then(data => {
      const projectsContainer = document.querySelector('.borderProject');

      data.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'borderProject__01';

        ['top', 'left', 'right', 'bottom'].forEach(position => {
          const borderElement = document.createElement('div');
          borderElement.className = `borderProject__${position}`;
          projectElement.appendChild(borderElement);
        });

        const sliderElement = document.createElement('div');
        sliderElement.className = 'slider';
        projectElement.appendChild(sliderElement);

        const nextButton = document.createElement('button');
        nextButton.className = 'next';
        const triangleBlanc = document.createElement('span');
        triangleBlanc.className = 'triangle-blanc';
        nextButton.appendChild(triangleBlanc);
        sliderElement.appendChild(nextButton);

        project.slides.forEach((slide, index) => {
          const slideElement = document.createElement('div');
          slideElement.className = 'slide';
          slideElement.id = 'slide' + (index + 1);
          const imgElement = document.createElement('img');
          imgElement.src = slide.imgSrc;
          imgElement.alt = slide.imgAlt;
          slideElement.appendChild(imgElement);
          sliderElement.appendChild(slideElement);
        });

        const titleElement = document.createElement('h3');
        titleElement.className = 'recentProject__titleProject';
        titleElement.textContent = project.title;
        projectElement.appendChild(titleElement);

        const textElement = document.createElement('p');
        textElement.className = 'recentProject__text';
        textElement.textContent = project.text;
        projectElement.appendChild(textElement);

        const buttonElement = document.createElement('div');
        buttonElement.className = 'button__visitWebsite';
        buttonElement.textContent = 'Visit Website';
        buttonElement.addEventListener('click', () => window.location.href = project.visitWebsiteLink);
        projectElement.appendChild(buttonElement);

        projectsContainer.appendChild(projectElement);

        initCarousel(sliderElement);
      });
    })
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
});
