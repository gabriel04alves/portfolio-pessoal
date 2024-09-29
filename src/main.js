import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { useThemeStore } from "./stores/themeStore";
import "./assets/styles/main.css";
import "./assets/styles/variables.css";

import "@fortawesome/fontawesome-free/css/all.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);

const themeStore = useThemeStore(pinia);
themeStore.applyTheme();

app.mount("#app");
