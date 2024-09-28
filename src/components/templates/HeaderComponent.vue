<template>
  <header>
    <a href="" class="">
      <b>Gabriel Alves</b>
    </a>
    <div class="header-container-items">
      <div class="header_links">
        <a href="#section-about_me">Sobre mim</a>
      </div>
      <button @click="switchTheme">
        <i v-if="themeStore.currentTheme === 'dark'" class="fas fa-moon"></i>
        <i v-else class="fas fa-sun"></i>
      </button>
    </div>
  </header>
</template>

<script>
import { useThemeStore } from "../../stores/themeStore.js";

export default {
  setup() {
    const themeStore = useThemeStore();
    return {
      themeStore,
      switchTheme: themeStore.switchTheme,
    };
  },
};
</script>

<style scoped>
.fa-sun {
  color: #ffd700;
}
.fa-moon {
  color: #ffd700;
}

header {
  display: flex;
  align-items: center;
  background-color: var(--color-background-primary);
  position: fixed;
  width: 100%;
  padding: 3% 6%;
  justify-content: space-between;
  font-size: 1.2rem;
  box-sizing: border-box;
}

.header-container-items {
  display: flex;
  flex-direction: row;
}

.header_links {
  display: none;
}

a {
  text-decoration: none;
  color: var(--color-text-primary);
}

button {
  border: none;
  font-size: larger;
  background-color: transparent;
  cursor: pointer;
}

@media (min-width: 600px) {
  header {
    font-size: 1.6rem;
    padding: 2vh 6%;
  }

  .header_links {
    display: flex;
    align-items: center;
    gap: 3vw;
    margin: 0 3vw;
  }

  .header_links a {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }
  .header_links a:hover {
    transform: translate(-0.5vh, -0.5vh);
    color: var(--color-text-focus);
    font-weight: 600;
  }
}
</style>
