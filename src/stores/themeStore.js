import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "day",
    themes: {
      day: {
        "--bg-color-main": "#ededed",
        "--font-color-main": "#464646",
        "--font-color-second": "#959595",
        "--font-color-focus-main": "#1c1c1c",
        "--section-bg-color-soft": "#cee2fe",
        "--item-color-accent": "#2a7ae4",
        "--image-bg": "#fff",
        "--footer-bg-color": "#fdfdfd",
      },
      dark: {
        "--bg-color-main": "#202020",
        "--font-color-main": "#ededed",
        "--font-color-second": "#959595",
        "--font-color-focus-main": "#959595",
        "--section-bg-color-soft": "#002f40",
        "--item-color-accent": "#2a7ae4",
        "--image-bg": "#fff",
        "--footer-bg-color": "#272727",
      },
    },
  }),
  actions: {
    switchTheme() {
      this.theme = this.theme === "day" ? "dark" : "day";
      this.applyTheme();
    },
    applyTheme() {
      const themeVariables = this.themes[this.theme];
      Object.keys(themeVariables).forEach((key) => {
        document.documentElement.style.setProperty(key, themeVariables[key]);
      });
    },
  },
  getters: {
    currentTheme: (state) => state.theme,
  },
});
