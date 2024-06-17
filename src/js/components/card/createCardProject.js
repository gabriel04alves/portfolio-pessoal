export function card(id, name, description, github, deploy, image) {
    const projectSlide = document.createElement('div');
    projectSlide.className = 'swiper-slide';

    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';

    projectContainer.innerHTML = `
        <div class="project-card">
            <h3>${name}</h3>
            <h4>${description}</h4>
            <div class="project-links">
                <a href="${github}" class="project-github-url project-url-item">
                    <i class="fab fa-github"></i>
                    <p>Veja o código</p>
                </a>
                <a href="${deploy}" class="project-deploy-url project-url-item">
                    <i class="fa fa-link"></i>
                    <p>Veja o projeto</p>
                </a>
            </div>
            <div class="project-image-container">
                <a href="${deploy}">
                    <img class="project-image" src="${image}" alt="${name}">
                </a>  
            </div>
        </div>
    `;

    projectSlide.appendChild(projectContainer);
    return projectSlide;
}
