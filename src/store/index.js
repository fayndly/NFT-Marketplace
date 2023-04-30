import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      ScreanSize: 1200,
    };
  },
  getters: {
    GetScreenSize(state) {
      return state.ScreanSize;
    },
  },
  mutations: {
    updateScreenSize(state, newSize) {
      state.ScreanSize = newSize;
    },
  },
  actions: {
    checkSize(ctx) {
      let size;
      if (innerWidth >= 1200) {
        size = "desctop";
      } else if ((innerWidth >= 834) & (innerWidth < 1200)) {
        size = "laptop";
      } else if ((innerWidth < 834) & (innerWidth > 425)) {
        size = "laptopMini";
      } else if (innerWidth <= 425) {
        size = "mobile";
      }
      ctx.commit("updateScreenSize", size);
    },
  },
  modules: {},
});
