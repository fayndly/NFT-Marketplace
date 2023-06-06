<template>
  <headerBase />
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <footerBase />
</template>

<script>
export default {
  name: "App",
  methods: {
    checkResize() {
      this.$store.dispatch("checkScreenSize");
      this.$store.dispatch("checkScreenDevice");
    },
  },
  created() {
    this.checkResize();
    window.addEventListener("resize", this.checkResize);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/base/index.scss";

#app {
  // width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
}

.route-enter-active {
  transition: opacity 0.3s ease;
}
.route-leave-active {
  transition: opacity 0.3s ease;
}

.route-enter-from {
  opacity: 0;
}
.route-leave-to {
  opacity: 0;
}
</style>
