<template>
    <Header />
    <div class="blog-post">
        <div v-if="post" class="post-content">
            <div class="post-header">
                <router-link to="/blog" class="back-link">
                    <i class="fas fa-arrow-left"></i> {{ t('view_all_posts') }}
                </router-link>
                <h1>{{ post.title }}</h1>
                <div class="post-meta">
                    <time>{{ formatDate(post.date) }}</time>
                </div>
            </div>
            <div class="markdown-content">
                <component :is="post.component" />
            </div>
        </div>
        <div v-else class="not-found">
            <h2>{{ t('post_not_found') }}</h2>
            <router-link to="/blog">{{ t('back_to_articles') }}</router-link>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePosts } from '../stores/usePosts';
import { useI18n } from '../locales/i18n';
import { formatDate } from '../utils/formatDate';
import Header from '../components/layout/HeaderComponent.vue';

const route = useRoute();
const posts = usePosts();
const { t } = useI18n();

const post = computed(() => {
    return posts.find(p => p.slug === route.params.slug);
});
</script>

<style scoped>
.blog-post {
    color: var(--color-text-primary);
}

.post-content {
    padding: 5%;
    max-width: 70vw;
    margin: 0 auto;
}

.post-header {
    margin-bottom: 2rem;
}

.back-link {
    display: inline-block;
    margin-bottom: 1rem;
    color: var(--color-accent);
    text-decoration: none;
}

.post-meta {
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    margin-top: 0.5rem;
}

.markdown-content {
    line-height: 1.8;
    font-size: 1.1rem;
}

.markdown-content :deep(h1),
.markdown-content :deep(h2),
.markdown-content :deep(h3) {
    margin: 1.5rem 0 1rem;
}

.markdown-content :deep(p) {
    margin-bottom: 1.2rem;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
    margin-left: 1.5rem;
    margin-bottom: 1.2rem;
}

.markdown-content :deep(code) {
    background-color: var(--color-background-secondary);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
}

.markdown-content :deep(pre) {
    background-color: var(--color-background-secondary);
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin-bottom: 1.5rem;
}

.not-found {
    padding: 15% 10% 5%;
    text-align: center;
}

.not-found a {
    color: var(--color-accent);
    text-decoration: none;
}

@media (max-width: 768px) {
    .post-content {
        padding: 25% 5% 5%;
    }

    .markdown-content {
        font-size: 1rem;
    }
}
</style>
