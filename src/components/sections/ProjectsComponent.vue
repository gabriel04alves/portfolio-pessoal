<template>
    <section id="section-projects">
        <h1><b>{{ t('projects') }}</b></h1>
        <swiper class="swiper" :modules="modules" :slides-per-view="1" :space-between="50" navigation :loop="true"
            :pagination="{ clickable: true }" :autoplay="{ delay: 6000, disableOnInteraction: false }"
            @swiper="onSwiper" @slideChange="onSlideChange">
            <swiper-slide v-for="project in projects" :key="project.id">
                <div class="box--content-main">
                    <div class="card">
                        <h3>{{ lang === 'pt' ? project.name_pt : project.name_en }}</h3>
                        <p>{{ lang === 'pt' ? project.description_pt : project.description_en }}</p>
                        <div class="tags--technologies">
                            <tag v-for="technology in project.technologies" :key="technology">{{ technology }}</tag>
                        </div>
                        <div class="links">
                            <a :href="project.github" target="_blank">
                                <i class="fab fa-github"></i>
                                {{ t('see_on_github') }}
                            </a>
                            <a v-if="project.deploy && project.deploy !== 'None'" :href="project.deploy" target="_blank"
                                rel="noopener noreferrer">
                                <i class="fa fa-link"></i>
                                {{ t('live_demo') }}
                            </a>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>

</template>

<script setup>
import { onMounted, ref } from "vue";
import { swiperModules, SwiperComponents } from '../../services/swiperConfig';
import { fetchProjects } from '../../services/getProjects';
import { useI18n } from "../../locales/i18n";

const { t, lang } = useI18n();
const projects = ref([]);
const modules = swiperModules;

defineOptions({
    components: {
        ...SwiperComponents
    }
});

const loadProjects = async () => {
    try {
        projects.value = await fetchProjects();
    } catch (error) {
        console.error('Error loading projects:', error);
    }
};

onMounted(loadProjects);
</script>

<style scoped>
section {
    padding: 5% 0%;
    color: var(--color-text-primary);

}

h1 {
    text-align: center;

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
