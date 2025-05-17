<template>
  <transition name="fade" mode="out-in">
    <div :key="lang">
      <RouterView />
    </div>
  </transition>
</template>

<script>
import { RouterView } from 'vue-router'
import { useI18n } from "./locales/i18n";

export default {
  components: {
  },
  setup() {
    const { lang } = useI18n();
    return { lang };
  }
};
</script>

<style scoped>
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
