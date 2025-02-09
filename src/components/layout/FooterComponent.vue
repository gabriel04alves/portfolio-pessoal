<template>
    <footer>
        <p> <a href="https://github.com/gabriel04alves">Gabriel Alves</a> | {{ year }} </p>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>

<style scoped>
footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vh 0;
    color: var(--color-text-primary);
    background-color: var(--color-footer-background);
}

a {
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: bold;
}
</style>