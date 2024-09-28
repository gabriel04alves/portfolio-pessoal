<template>
  <main>
    <Header />
    <PresentationComponent />
    <AboutmeComponent />
  </main>
</template>

<script>
import Header from "./components/templates/HeaderComponent.vue";
import PresentationComponent from "./components/sections/PresentationComponent.vue";
import AboutmeComponent from "./components/sections/AboutmeComponent.vue";

export default {
  components: {
    Header,
    PresentationComponent,
    AboutmeComponent,
  },
};
</script>

<style scoped></style>
