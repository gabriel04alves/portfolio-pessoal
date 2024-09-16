<template>
  <header>
    <a href="" class="">
      <b>Gabriel Alves</b>
    </a>
    <div>
      <button @click="switchTheme">
        <i v-if="themeStore.currentTheme === 'dark'" class="fas fa-moon"></i>
        <i v-else class="fas fa-sun"></i>
      </button>
    </div>
  </header>
</template>

<script>
import { useThemeStore } from "../stores/themeStore";

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
  justify-content: space-between;
  align-items: center;
  padding: 2vh 4vw;
  font-size: larger;
}

a {
  text-decoration: none;
  color: var(--font-color-main);
}

button {
  border: none;
  font-size: larger;
  background-color: transparent;
  cursor: pointer;
}
</style>
