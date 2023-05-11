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
      ctx.commit("updateScreenSize", innerWidth);
    },
    checkScreenDevice(ctx) {
      let device;
      if (innerWidth >= 1200) {
        device = "desktop";
      } else if ((innerWidth >= 834) & (innerWidth < 1200)) {
        device = "tablet";
      } else if ((innerWidth < 834) & (innerWidth > 425)) {
        device = "tabletMini";
      } else if (innerWidth <= 425) {
        device = "mobile";
      }
      ctx.commit("updateScreenDevice", device);
    },
  },
};
