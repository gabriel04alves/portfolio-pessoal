import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: localStorage.getItem("theme") || "dark",
  }),
  actions: {
    switchTheme() {
      this.theme = this.theme === "day" ? "dark" : "day";
      this.applyTheme();
      localStorage.setItem("theme", this.theme);
    },
    applyTheme() {
      const themeClass = this.theme === "dark" ? "dark-theme" : "day-theme";
      document.documentElement.className = themeClass;
    },
  },
  getters: {
    currentTheme: (state) => state.theme,
  },
});
