<template>
    <section id="section-profissional_exp">
        <h1 class="title--exp_prof">{{ t('experience') }}</h1>
        <div class="container--exp_prof">
            <div class="item--exp_prof">
                <div class="item--line-1">
                    <img class="icon--logo_enterprise"
                        src="https://avatars.githubusercontent.com/u/105930636?s=280&v=4"></img>
                    <h3 class="title--position">{{ t('job_dev') }}</h3>
                    <p class="title--date"> Nov 2024 - {{ t('current') }}</p>
                </div>
                <p class="description--exp_prof">{{ t('desc_dev') }}</p>
            </div>
            <div class="item--exp_prof">
                <div class="item--line-1">
                    <i class="icon--logo_enterprise fa-regular fa-calendar"></i>
                    <h3 class="title--position">{{ t('job_prof_dev') }}</h3>
                    <p class="title--date"> Jan 2024 - Out 2024</p>
                </div>
                <p class="description--exp_prof">{{ t('desc_prof_dev') }}</p>
            </div>
            <div class="item--exp_prof">
                <div class="item--line-1">
                    <img class="icon--logo_enterprise"
                        src="https://multipedidos.com.br/wp-content/uploads/2022/02/marca-mp-vertical-colorida-405x400-1.png"
                        alt="">
                    <h3 class="title--position">{{ t('job_intern') }}</h3>
                    <p class="title--date"> Set 2023 - Jan 2024</p>
                </div>
                <p class="description--exp_prof">
                    {{ t('desc_intern') }}
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useI18n } from "../../locales/i18n";
const { t } = useI18n();
</script>

<style scoped>
section {
    padding: 5% 15%;
    font-size: 1rem;
    color: var(--color-text-primary);
    background-color: var(--color-background-secondary);
}

.container--exp_prof {
    display: flex;
    flex-flow: column wrap;
    gap: 2rem;
    margin-top: 2rem;
}

.item--exp_prof {
    margin-top: 1vh;
}

.title--exp_prof {
    text-align: center;
    font-size: clamp(1.5rem, 2.5vw, 1.75rem);
    color: var(--color-text-primary);
}

.item--line-1 {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    font-size: clamp(1rem, 1.5vw, 1.25rem);
}

.title--position {
    text-align: left;
    font-weight: 500;
    flex: 1;
    padding: 0.5rem;
}

.description--exp_prof {
    margin-top: 1rem;
    color: var(--color-text-secondary);
    font-size: clamp(0.9rem, 1.2vw, 1.1rem);
    line-height: 1.5;
}

.title--date {
    color: var(--color-text-secondary);
    text-align: right;
    white-space: nowrap;
}

.icon--logo_enterprise {
    width: clamp(2.5rem, 4vw, 3rem);
    height: auto;
    font-size: clamp(2rem, 3vw, 2.5rem);
    color: var(--color-accent);
}

@media (max-width: 1024px) {
    section {
        padding: 5% 15%;
    }
}

@media (max-width: 768px) {
    section {
        padding: 8% 15%;
    }

    .item--line-1 {
        flex-wrap: wrap;
    }

    .title--position {
        order: 1;
        width: calc(100% - 4rem);
    }

    .title--date {
        order: 2;
        width: 100%;
        text-align: left;
        padding-left: 4rem;
    }
}

@media (max-width: 480px) {
    section {
        padding: 10% 10%;
    }

    .title--position {
        width: 100%;
        padding: 0.5rem 0;
    }

    .title--date {
        padding-left: 0;
    }

    .description--exp_prof {
        font-size: 0.9rem;
    }
}
</style>