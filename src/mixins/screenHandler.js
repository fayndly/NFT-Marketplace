export default {
  computed: {
    getScreenSize() {
      return this.$store.getters.getScreenSize;
    },
    getScreenDevice() {
      return this.$store.getters.getScreenDevice;
    },
  },
};
