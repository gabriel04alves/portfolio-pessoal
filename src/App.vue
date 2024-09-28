<template>
  <main>
    <Header />
    <PresentationComponent />
    <AboutmeComponent />
    <SkillsComponent />
  </main>
</template>

<script>
import Header from "./components/templates/HeaderComponent.vue";
import PresentationComponent from "./components/sections/PresentationComponent.vue";
import AboutmeComponent from "./components/sections/AboutmeComponent.vue";
import SkillsComponent from "./components/sections/SkillsComponent.vue";

export default {
  components: {
    Header,
    PresentationComponent,
    AboutmeComponent,
    SkillsComponent,
  },
};
</script>

<style scoped></style>
