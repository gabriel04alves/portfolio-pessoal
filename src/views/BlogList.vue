<template>
    <div class="blog-list">
        <HeaderComponent />
        <section class="blog-section">
            <h1>{{ t('articles') }}</h1>
            <div class="posts-container">
                <article v-for="post in posts" :key="post.slug" class="post-card">
                    <router-link :to="`/blog/${post.slug}`" class="post-link">
                        <h2>{{ post.title }}</h2>
                        <div class="post-meta">
                            <time>{{ formatDate(post.date) }}</time>
                        </div>
                        <p class="post-description">{{ post.description }}</p>
                    </router-link>
                </article>
            </div>
        </section>
    </div>
</template>

<script setup>
import { usePosts } from '../stores/usePosts';
import { useI18n } from '../locales/i18n';
import { formatDate } from '../utils/formatDate';
import HeaderComponent from "../components/layout/HeaderComponent.vue";
const { t } = useI18n();
const posts = usePosts();
</script>

<style scoped>
.blog-section {
    padding: 12% 10% 5%;
    min-height: 60vh;
    color: var(--color-text-primary);
}

h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
}

.posts-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.post-card {
    background-color: var(--color-background-secondary);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    height: 100%;
}

.post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.post-link {
    display: block;
    padding: 1.5rem;
    color: var(--color-text-primary);
    text-decoration: none;
    height: 100%;
}

.post-link h2 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
}

.post-meta {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
}

.post-description {
    color: var(--color-text-secondary);
    line-height: 1.5;
}

@media (max-width: 768px) {
    .posts-container {
        grid-template-columns: 1fr;
    }

    .blog-section {
        padding: 25% 5% 5%;
    }
}
</style>
