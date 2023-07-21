export default {
  state() {
    return {
      screenSize: 1200,
      screenDevice: "desktop",
    };
  },
  getters: {
    getScreenSize(state) {
      return state.screenSize;
    },
    getScreenDevice(state) {
      return state.screenDevice;
    },
  },
  mutations: {
    updateScreenSize(state, newSize) {
      state.screenSize = newSize;
    },
    updateScreenDevice(state, newDevice) {
      state.screenDevice = newDevice;
    },
  },
  actions: {
    checkScreenSize(ctx) {
      const windowWidth =
        window.innerWidth ||
        window.screen.width ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      ctx.commit("updateScreenSize", windowWidth);
    },
    checkScreenDevice(ctx) {
      const windowWidth =
        window.innerWidth ||
        window.screen.width ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      let device;
      if (windowWidth >= 1200) {
        device = "desktop";
      } else if ((windowWidth >= 834) & (windowWidth < 1200)) {
        device = "tablet";
      } else if ((windowWidth < 834) & (windowWidth > 425)) {
        device = "tabletMini";
      } else if (windowWidth <= 425) {
        device = "mobile";
      }
      ctx.commit("updateScreenDevice", device);
    },
  },
};
