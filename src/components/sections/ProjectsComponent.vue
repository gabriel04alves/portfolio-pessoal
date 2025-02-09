<template>
    <section id="section-projects">
        <h1><b>Projetos</b></h1>
        <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="50" navigation :loop="true"
            :pagination="{ clickable: true }" :autoplay="{ delay: 6000, disableOnInteraction: false }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="project in projects" :key="project.id">
                <div class="card">
                    <a :href="project.deploy">
                        <img :src="project.image" alt="Project Image" />
                    </a>
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                    <div class="links">
                        <a :href="project.github" target="_blank">
                            <i class="fab fa-github"></i>
                            Veja o código
                        </a>
                        <a :href="project.deploy" target="_blank">
                            <i class="fa fa-link"></i>
                            Veja o projeto
                        </a>
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
    padding: 10% 0%;
    background-color: var(--color-background-secondary);
    color: var(--color-text-primary);
}

h1 {
    text-align: center;
    font-size: 2rem;
}

h3 {
    font-weight: 400;
    font-size: 1.5rem;
}

p {
    text-align: center;
    max-width: 70%;
    color: var(--color-text-focus);
}

img {
    display: none;
    height: 40vh;
    z-index: 0;
    border-radius: 10px;
    margin-bottom: 3vh;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vh;
    margin-top: 5%;
    padding-bottom: 10%;
}

.links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3vw;
}

a {
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--color-text-secondary)
}

a:hover {
    color: var(--color-text-primary);
}


@media (min-width: 600px) and (max-width: 1365px) {
    .swiper {
        margin: 0 5vw;
    }

    img {
        display: block;
        height: 400px;
    }
}



@media (min-width: 1366px) {
    section {
        padding: 4% 10%;
    }

    img {
        display: block;
    }

    h3 {
        font-weight: normal;
    }

    .card {
        gap: 2vh;
        margin-top: 2%;
        padding-bottom: 3%;
    }

    p,
    a {
        font-size: 1.25rem;
    }
}
</style>
