import { defineStore } from "pinia";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    language: localStorage.getItem("language") || "pt",
  }),
  actions: {
    switchLanguage() {
      this.language = this.language === "pt" ? "en" : "pt";
      localStorage.setItem("language", this.language);
    },
  },
  getters: {
    currentLanguage: (state) => state.language,
  },
});
