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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["fetchNfts", "fetchArtists"]),
    checkResize() {
      this.$store.dispatch("checkScreenSize");
      this.$store.dispatch("checkScreenDevice");
    },
  },
  async created() {
    this.checkResize();
    window.addEventListener("resize", this.checkResize);

    await this.fetchNfts();
    await this.fetchArtists();
  },
  computed: { ...mapGetters(["getNfts", "getArtists"]) },
  mounted() {
    console.log(this.getNfts);
    console.log(this.getArtists);
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
