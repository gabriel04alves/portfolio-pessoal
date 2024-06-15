import { connectApi } from "./connectApi.js";

const swiperWrapper = document.querySelector(".swiper-wrapper");

export default function projectCard(id, name, description, github, deploy, image) {
    const projectSlide = document.createElement('div');
    projectSlide.className = 'swiper-slide';

    const projectContainer = document.createElement('div');
    projectContainer.className = 'project-container';

    projectContainer.innerHTML = `
        <h3>${name}</h3>
        <h4>${description}</h4>
        <div class="project-links">
            <a href="${github}" class="project-github-url project-url-item">
                <i class="fab fa-github"></i>
                <p>${github}</p>
            </a>
            <a href="${deploy}" class="project-deploy-url project-url-item">
                <i class="fa fa-link"></i>
                <p>${deploy}</p>
            </a>
        </div>
        <div class="project-image-container">
            <a href="${deploy}">
                <img class="project-image" src="${image}" alt="${name}">
            </a>  
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    `;

    projectSlide.appendChild(projectContainer);

    return projectSlide;
}

async function showProjects() {
    try {
        const getFromApi = await connectApi.getData();
        getFromApi.forEach(project => {
            swiperWrapper.appendChild(
                projectCard(project.id, project.name, project.description, project.github, project.deploy, project.image)
            );
        });

        // Inicializar o Swiper após adicionar todos os projetos
        new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } catch (error) {
        swiperWrapper.innerHTML = `
            <h2>Não há nada por aqui ainda...</h2>
            <iframe src="https://giphy.com/embed/7XsgQ0fmpLM8HJjbk2" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            <p><a href="https://giphy.com/gifs/SportsManias-emoji-sportsmanias-7XsgQ0fmpLM8HJjbk2">via GIPHY</a></p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', showProjects);
