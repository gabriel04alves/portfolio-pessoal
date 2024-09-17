<template>
  <main>
    <Header />
    <PresentationComponent />
  </main>
</template>

<script>
import Header from "./components/templates/HeaderComponent.vue";
import PresentationComponent from "./components/PresentationComponent.vue";

export default {
  components: {
    Header,
    PresentationComponent,
  },
};
</script>

<style scoped></style>
