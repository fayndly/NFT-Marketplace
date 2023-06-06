export const artists = {
  state() {
    return {
      artists: [],
      topRatedArtists: [],
      rankingTopRatedArtist: {
        today: [],
        thisWeek: [],
        thisMonth: [],
        allTime: [],
      },
    };
  },
  getters: {
    getArtists: (state) => {
      if (state.artists.length === 0) {
        throw new Error("Artists is not loaded yet");
      }

      return state.artists;
    },

    getTopRatedArtists: (state) => {
      return state.topRatedArtists;
    },
    getRankingTopRatedArtists: (state) => (time) => {
      return state.rankingTopRatedArtist[time];
    },
  },
  actions: {
    async fetchArtists({ state, commit }) {
      if (state.artists.length < 1) {
        const response = await fetch(
          `${process.env.BASE_URL}mocks/artists.json`
        );
        const artists = await response.json();
        commit("upadateArtists", artists);
        return state.artists;
      }

      return state.artists;
    },

    async getArtistPageCards({ dispatch }, args) {
      const data = await dispatch("fetchArtists");
      const artistPage = data.find((value) => value.id === args.artistId);

      if (artistPage) {
        let cardIds;
        let actionName;
        let countArg;
        const cards = [];

        if (args.cardType === "collections") {
          cardIds = artistPage.collections;
          actionName = "getCollectionCard";
        } else if (args.cardType === "ownedNfts") {
          cardIds = artistPage.nfts_owned;
          actionName = "getNftCard";
        } else if (args.cardType === "createdNfts") {
          cardIds = artistPage.nfts_created;
          actionName = "getNftCard";
        }

        if (cardIds.length >= args.quantity) {
          countArg = args.quantity;
        } else {
          countArg = cardIds.length;
        }
        for (let i = 0; i < countArg; i++) {
          cards.push(await dispatch(actionName, cardIds[i]));
        }
        return cards;

        // if (args.cardType === "collections") {
        //   const collections = artistPage.collections;
        //   const collectionCards = [];
        //   if (collections.length >= args.quantity) {
        //     for (let i = 0; i < args.quantity; i++) {
        //       console.log(collections[i]);
        //       collectionCards.push(
        //         await dispatch("getCollectionCard", collections[i])
        //       );
        //     }
        //   } else {
        //     for (let i = 0; i < collections.length; i++) {
        //       collectionCards.push(
        //         await dispatch("getCollectionCard", collections[i])
        //       );
        //     }
        //   }
        //   return collectionCards;
        // } else if (args.cardType === "ownedNfts") {
        //   const nfts = artistPage.nfts_owned;
        //   const nftCards = [];
        //   for (let i = 0; i < args.quantity; i++) {
        //     nftCards.push(await dispatch("getNftCard", nfts[i]));
        //   }
        //   return nftCards;
        // } else if (args.cardType === "createdNfts") {
        //   const nfts = artistPage.nfts_created;
        //   const nftCards = [];
        //   for (let i = 0; i < args.quantity; i++) {
        //     nftCards.push(await dispatch("getNftCard", nfts[i]));
        //   }
        //   return nftCards;
        // }
      }
      throw new Error("Artist was not found");
    },

    async getArtistPage({ dispatch }, artistId) {
      const data = await dispatch("fetchArtists");

      const artistPage = data.find((value) => value.id === artistId);
      if (artistPage) {
        return artistPage;
      }
      throw new Error("Artist page was not found");
    },

    async getArtistCard({ dispatch }, id) {
      const data = await dispatch("fetchArtists");

      const artist = data.find((value) => value.id === id);
      if (artist) {
        return {
          id: artist.id,
          avatar: artist.avatar_image_path,
          name: artist.name,
          stats: artist.stats,
        };
      }
      throw new Error("artist card was not found");
    },

    async fetchTopRatedArtists({ commit, dispatch }) {
      const data = await dispatch("fetchArtists");

      const topRatedArtists = [];
      const sortArtists = data.sort(
        (a, b) => b.stats.stats_volume_rankings - a.stats.stats_volume_rankings
      );

      sortArtists.forEach((artist) => {
        const artistCard = {
          id: artist.id,
          avatar: artist.avatar_image_path,
          name: artist.name,
          stats: artist.stats,
        };
        topRatedArtists.push(artistCard);
      });

      commit("upadateTopRatedArtists", topRatedArtists.slice(0, 20));
    },

    async fetchRankingTopRatedArtists({ commit, dispatch, state }, time) {
      const data = await dispatch("fetchArtists");

      if (!state.rankingTopRatedArtist[time].length) {
        const topRatedArtists = [];
        const sortArtists = data.sort(
          (a, b) =>
            b.stats.stats_volume_rankings - a.stats.stats_volume_rankings
        );

        sortArtists.forEach((artist) => {
          const artistCard = {
            id: artist.id,
            avatar: artist.avatar_image_path,
            name: artist.name,
            stats: artist.stats,
          };
          topRatedArtists.push(artistCard);
        });

        let returnedData;

        if (time === "today") {
          returnedData = topRatedArtists.sort(() => Math.random() - 0.5);
        } else if (time === "thisWeek") {
          returnedData = topRatedArtists.sort(() => Math.random() - 0.5);
        } else if (time === "thisMonth") {
          returnedData = topRatedArtists.sort(() => Math.random() - 0.5);
        } else if (time === "allTime") {
          returnedData = topRatedArtists;
        }

        commit("upadateRankingTopRatedArtists", {
          timeSet: time,
          upadateArtists: returnedData,
        });
      }
    },
  },
  mutations: {
    upadateArtists(state, upadateArtists) {
      state.artists.push(...upadateArtists);
    },
    upadateTopRatedArtists(state, upadateArtists) {
      state.topRatedArtists = upadateArtists;
    },
    upadateRankingTopRatedArtists(state, args) {
      state.rankingTopRatedArtist[args.timeSet] = args.upadateArtists;
    },
  },
};
