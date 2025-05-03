import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useThemeStore } from "./stores/themeStore";
import { useLanguageStore } from "./stores/languageStore";
import "./assets/styles/main.css";
import "./assets/styles/variables.css";

import "@fortawesome/fontawesome-free/css/all.css";

import { initGoogleAnalytics } from "./services/analytics";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

initGoogleAnalytics();

const themeStore = useThemeStore(pinia);
themeStore.applyTheme();

const languageStore = useLanguageStore(pinia);

app.mount("#app");
