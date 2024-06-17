import { connectApi } from "./connectApiProjects.js";
import { card } from "./createCardProject.js";
import { initSwiper } from "./initSwiper.js";

const swiperWrapper = document.querySelector(".swiper-wrapper");

async function showProjects() {
    try {
        const getFromApi = await connectApi.getData();
        console.log(getFromApi.projects)
        getFromApi.projects.forEach(project => {
            swiperWrapper.appendChild(
                card(project.id, project.name, project.description, project.github, project.deploy, project.image)
            );
        });

        initSwiper(); 
    } catch(error) {
        swiperWrapper.innerHTML = `
            <p style="font-weight: 300; padding: 4rem;">Ocorreu algum erro ao buscar os projetos... Enquanto resolvo isso, você pode visualizar os projetos no 
                <a href="https://github.com/gabriel04alves" style="text-decoration: underline"> GitHub</a>.
            </p>
        `;
    }
}

showProjects();
