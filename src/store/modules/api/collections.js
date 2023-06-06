export const collections = {
  state() {
    return {
      collections: [],
      trendingCollections: [],
    };
  },
  getters: {
    getCollections: (state) => {
      return state.collections;
    },
    getTrendingCollection: (state) => {
      return state.trendingCollections;
    },
  },
  actions: {
    async fetchCollections({ state, commit }) {
      if (state.collections.length < 1) {
        const response = await fetch(
          `${process.env.BASE_URL}mocks/collections.json`
        );
        const collections = await response.json();
        commit("upadateCollections", collections);
        return state.collections;
      }

      return state.collections;
    },

    async getCollectionCard({ dispatch }, id) {
      const data = await dispatch("fetchCollections");

      const collection = data.find((value) => value.id === id);

      const nftImages = [];

      for (let i = 0; i < 3; i++) {
        const nftCard = await dispatch("getNftCard", collection.nfts[i]);
        nftImages.push(nftCard.image);
      }

      if (collection) {
        return {
          id: collection.id,
          name: collection.name,
          creator: await dispatch("getArtistCard", collection.creatorId),
          nftImages,
          quality: collection.nfts.length,
        };
      }
      throw new Error("Collection card was not found");
    },

    async fetchTrendingCollection({ dispatch, commit }) {
      const data = await dispatch("fetchCollections");

      const trendingCollections = [];

      for (let i = 0; i < 3; i++) {
        const collectionCard = await dispatch("getCollectionCard", data[i].id);
        trendingCollections.push(collectionCard);
      }

      commit("updateTrendingCollections", trendingCollections);
    },

    async getCollectionPage({ dispatch }, id) {
      const data = await dispatch("fetchCollections");

      const collectionPage = data.find((value) => value.id === id);
      if (collectionPage) {
        return collectionPage;
      }
      throw new Error("Collection page was not found");
    },

    async getCollectionNftCards({ dispatch }, args) {
      const data = await dispatch("fetchCollections");

      const collection = data.find((value) => value.id === args.id);
      const collectionNfts = collection.nfts;

      const collectionNftCards = [];

      if (collectionNfts.length >= args.quantity) {
        for (let i = 0; i < args.quantity; i++) {
          collectionNftCards.push(
            await dispatch("getNftCard", collectionNfts[i])
          );
        }
      } else {
        for (let i = 0; i < collectionNfts.length; i++) {
          collectionNftCards.push(
            await dispatch("getNftCard", collectionNfts[i])
          );
        }
      }

      return collectionNftCards;
    },

    async getMarketplaceCollections({ dispatch }, quantity) {
      const data = await dispatch("fetchCollections");

      data.sort(() => Math.random() - 0.5);

      const collections = [];
      let countArg;

      if (data.length >= quantity) {
        countArg = quantity;
      } else {
        return [];
        // countArg = data.length;
      }

      for (let i = 0; i < countArg; i++) {
        const collection = data[i];
        const collectionCard = await dispatch(
          "getCollectionCard",
          collection.id
        );
        collections.push(collectionCard);
      }

      return collections;
    },
  },
  mutations: {
    upadateCollections(state, collections) {
      state.collections = collections;
    },
    updateTrendingCollections(state, collections) {
      state.trendingCollections = collections;
    },
  },
};
