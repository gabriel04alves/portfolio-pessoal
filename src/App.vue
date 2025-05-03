<template>
  <Header />
  <PresentationComponent />
  <SkillsComponent />
  <FormationComponent />
  <ProfissionalExpComponent />
  <ProjectsComponent />
  <ContactsComponent />
  <FooterComponent />
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
};
</script>

<style scoped></style>
