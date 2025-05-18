<template>
    <section id="section-blog">
        <h1>{{ t('articles') }}</h1>

        <div class="blog-preview" v-if="posts.length > 0">
            <router-link v-for="post in recentPosts" :key="post.slug" :to="`/blog/${post.slug}`" class="post-item-link">
                <article class="post-item">
                    <h2>{{ post.title }}</h2>
                    <div class="post-date">{{ formatDate(post.date) }}</div>
                    <p class="post-desc">{{ post.description }}</p>
                </article>
            </router-link>

            <div class="view-all">
                <router-link to="/blog" class="view-all-link">
                    {{ t('view_all_posts') }} <i class="fas fa-arrow-right"></i>
                </router-link>
            </div>
        </div>
        <div v-else class="no-posts">
            {{ t('no_posts') }}
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from "../../locales/i18n";
import { usePosts } from "../../stores/usePosts";
import { formatDate } from "../../utils/formatDate";

const { t } = useI18n();
const posts = usePosts();
const recentPosts = computed(() => posts.slice(0, 3));
</script>

<style scoped>
section {
    background-color: var(--color-background-secondary);
    color: var(--color-text-primary);
    padding: 5%;
}

h1 {
    text-align: center;
    margin-bottom: 2rem;
}

.blog-preview {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.post-item-link {
    text-decoration: none;
    color: inherit;
}

.post-item {
    padding: 1.5rem;
    background-color: var(--color-background-primary);
    border-radius: 8px;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.post-item:hover {
    transform: translateY(-5px);
}

.post-item h2 {
    margin: 0 0 0.5rem;
    font-size: 1.4rem;
}

.post-date {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin-bottom: 1rem;
}

.post-desc {
    color: var(--color-text-secondary);
}

.view-all {
    text-align: center;
    margin-top: 1.5rem;
}

.view-all-link {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background-color: var(--color-accent);
    color: white;
    text-decoration: none;
    border-radius: 4px;
    font-weight: 500;
    transition: background-color 0.3s ease;
}

.view-all-link:hover {
    background-color: var(--color-text-primary);
    color: var(--color-background-primary);
}

.no-posts {
    text-align: center;
    padding: 2rem;
    color: var(--color-text-secondary);
}

@media (max-width: 768px) {
    section {
        padding: 15% 5%;
    }
}
</style>