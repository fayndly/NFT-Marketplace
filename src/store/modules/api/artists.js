export default {
  state() {
    return {
      artists: [],
    };
  },
  getters: {
    getArtistPage: (state) => (id) => {
      for (let i = 0; i < state.artists.length; i++) {
        if (state.artists[i].id == id) {
          return state.artists[i];
        }
      }
      return {};
    },
    getArtistCard: (state) => (id) => {
      for (let i = 0; i < state.artists.length; i++) {
        if (state.artists[i].id == id) {
          const artist = state.artists[i];
          return {
            id: artist.id,
            avatar: artist.avatar_image_path,
            name: artist.name,
            stats: artist.stats,
          };
        }
      }
      return {};
    },
    getArtists: (state) => {
      // if (state.artists.length === 0) {
      //   throw new Error("Data is not loaded yet");
      // }

      return state.artists;
    },
    getTopRatedArtists: (state, ctx) => {
      const topRatedArtists = [];
      const sortArtists = state.artists.sort(
        (a, b) => b.stats.stats_volume_rankings - a.stats.stats_volume_rankings
      );
      sortArtists.forEach((element) => {
        topRatedArtists.push(ctx.getArtistCard(element.id));
      });
      return topRatedArtists.slice(0, 20);
    },
    getArtistNftsCreatedCard: (state) => (id) => {
      for (let i = 0; i < state.artists.length; i++) {
        if (state.artists[i].id == id) {
          return state.artists[i].nfts_created;
        }
      }
      return [];
    },
  },
  actions: {
    async fetchArtists({ commit }) {
      const response = await fetch(`${process.env.BASE_URL}mocks/artists.json`);
      const data = await response.json();
      commit("upadateArtists", data);

      // fetch(`${process.env.BASE_URL}mocks/artists.json`)
      //   .then((response) => response.json())
      //   .then((data) => {
      //     ctx.commit("upadateArtists", data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
  mutations: {
    upadateArtists(state, artists) {
      state.artists = artists;
    },
  },
};
