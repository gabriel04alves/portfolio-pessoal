<template>
    <section id="section-blog">
        <h1>{{ t('articles') }}</h1>
    </section>
</template>

<script setup>
import { useI18n } from "../../locales/i18n";

const { t } = useI18n();

</script>

<style scoped>
section {
    background-color: var(--color-background-secondary);
    color: var(--color-text-primary);
    padding: 10%;
}

h1 {
    text-align: center;
}
</style>