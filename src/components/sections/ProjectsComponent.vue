<template>
    <section id="section-projects">
        <h1><b>Projetos</b></h1>
        <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="50" navigation :loop="true"
            :pagination="{ clickable: true }" :autoplay="{ delay: 6000, disableOnInteraction: false }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="project in projects" :key="project.id">
                <div class="box--content-main">
                    <div class="card">
                        <h3>{{ project.name }}</h3>
                        <p>{{ project.description }}</p>
                        <div class="tags--technologies">
                            <tag v-for="technology in project.technologies" :key="technology">{{ technology }}</tag>
                        </div>
                        <div class="links">
                            <a :href="project.github" target="_blank">
                                <i class="fab fa-github"></i>
                                Veja no GitHub
                            </a>
                            <a v-if="project.deploy && project.deploy !== 'None'" :href="project.deploy" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fa fa-link"></i>
                                Demo ao vivo
                            </a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>

</template>

<script>
import { swiperModules, SwiperComponents } from '../../services/swiperConfig';
import { fetchProjects } from '../../services/getProjects';

export default {
    components: {
        ...SwiperComponents,
    },
    data() {
        return {
            projects: [],
            modules: swiperModules,
        };
    },
    methods: {
        async loadProjects() {
            try {
                this.projects = await fetchProjects();
            } catch (error) {
                console.error('Error loading projects:', error);
            }
        },
    },
    mounted() {
        this.loadProjects();
    },
};
</script>

<style scoped>
section {
    padding: 5% 0%;
    background-color: var(--color-background-secondary);
    color: var(--color-text-primary);

}

h1 {
    text-align: center;
    font-size: 2rem;
}

h3 {
    font-weight: 500;
    font-size: 1.5rem;
    text-align: center;
}

p {
    text-align: center;
    max-width: 70%;
    color: var(--color-text-focus);
}

.box--content-main {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 5vh;
    padding-bottom: 5vh;
}

.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 3vh;
    width: 50%;
    padding: 5vh;
    border-radius: 10px;

    background-color: var(--color-background-primary);
    color: var(--color-text-focus);
}

.links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3vw;
}

a {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--color-text-secondary)
}

a:hover {
    color: var(--color-text-primary);
}

.tags--technologies {
    display: flex;
    justify-content: center;
    flex-flow: wrap;
    gap: 0.5vw;
}

tag {
    color: var(--color-background-primary);
    font-weight: 600;
    text-wrap: nowrap;

    background-color: var(--color-text-secondary);
    padding: 0.3rem;
    border-radius: 5px;

    cursor: pointer;
}

@media (min-width: 0) and (max-width: 999px) {
    .card {
        width: 75%;
        height: 40vh;
        padding: 1vh 2vw;
    }
}
</style>
