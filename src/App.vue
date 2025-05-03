<template>
  <transition name="fade" mode="out-in">
    <div :key="lang">
      <Header />
      <PresentationComponent />
      <SkillsComponent />
      <FormationComponent />
      <ProfissionalExpComponent />
      <ProjectsComponent />
      <ContactsComponent />
      <FooterComponent />
    </div>
  </transition>
</template>

<script>
import Header from "./components/layout/HeaderComponent.vue";
import PresentationComponent from "./components/sections/PresentationComponent.vue";
import SkillsComponent from "./components/sections/SkillsComponent.vue";
import FormationComponent from "./components/sections/FormationComponent.vue";
import ProjectsComponent from "./components/sections/ProjectsComponent.vue";
import ContactsComponent from "./components/sections/ContactsComponent.vue";
import FooterComponent from "./components/layout/FooterComponent.vue";
import ProfissionalExpComponent from "./components/sections/ProfissionalExpComponent.vue";
import { useI18n } from "./locales/i18n";

export default {
  components: {
    Header,
    PresentationComponent,
    SkillsComponent,
    FormationComponent,
    ProfissionalExpComponent,
    ProjectsComponent,
    ContactsComponent,
    FooterComponent
  },
  setup() {
    const { lang } = useI18n();
    return { lang };
  }
};
</script>

<style scoped>
/* Fade transition for language switch */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
