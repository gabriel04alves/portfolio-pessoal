<template>
  <main>
    <Header />
    <PresentationComponent />
    <AboutmeComponent />
    <SkillsComponent />
    <FormationComponent />
    <ProjectsComponent />
    <ContactsComponent />
    <FooterComponent />
  </main>
</template>

<script>
import Header from "./components/templates/HeaderComponent.vue";
import PresentationComponent from "./components/sections/PresentationComponent.vue";
import AboutmeComponent from "./components/sections/AboutmeComponent.vue";
import SkillsComponent from "./components/sections/SkillsComponent.vue";
import FormationComponent from "./components/sections/FormationComponent.vue";
import ProjectsComponent from "./components/sections/ProjectsComponent.vue";
import ContactsComponent from "./components/sections/ContactsComponent.vue";
import FooterComponent from "./components/templates/FooterComponent.vue";

export default {
  components: {
    Header,
    PresentationComponent,
    AboutmeComponent,
    SkillsComponent,
    FormationComponent,
    ProjectsComponent,
    ContactsComponent,
    FooterComponent
  },
};
</script>

<style scoped></style>
