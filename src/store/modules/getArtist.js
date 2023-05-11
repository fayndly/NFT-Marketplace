import artists from "@/mocks/artists";

export default {
  state() {
    return {
      artists,
    };
  },
  getters: {
    getTopRatedArtists(state) {
      return state.artists.slice(0, 20);
    },
    getArtistPage: (state) => (id) => {
      for (let i = 0; i < state.artists.length; i++) {
        if (state.artists[i].id === id) {
          return state.artists[i];
        }
      }
    },
  },
  mutations: {},
  actions: {},
};
