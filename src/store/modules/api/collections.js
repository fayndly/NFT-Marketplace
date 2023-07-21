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

    async fetchTrendingCollection({ state, dispatch, commit }) {
      if (!state.trendingCollections.length) {
        await dispatch("fetchCollections");

        const trendingCollectionIds = [
          "0xeb2dfc54ebafca8f50efcc1e21a9d100b5aeb349",
          "0x884ba86faa29745b6c40b7098567a393e91335cf",
          "0x5d42b127e432797ba9baec121c0f2ea16ee81375",
        ];
        const trendingCollectionCards = [];

        for (let i = 0; i < trendingCollectionIds.length; i++) {
          const collectionCard = await dispatch(
            "getCollectionCard",
            trendingCollectionIds[i]
          );
          trendingCollectionCards.push(collectionCard);
        }

        commit("updateTrendingCollections", trendingCollectionCards);
      }
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

    async getCollectionPage({ dispatch }, id) {
      const data = await dispatch("fetchCollections");

      const collectionPage = data.find((value) => value.id === id);
      if (collectionPage) {
        return collectionPage;
      }
      throw new Error("Collection page was not found");
    },

    async getCollectionNftCards({ dispatch }, arr) {
      const data = await dispatch("fetchCollections");

      const result = {
        length: 0,
        nfts: [],
      };
      const collection = data.find((value) => value.id === arr.id);
      const collectionNftIds = collection.nfts;

      result.length = collectionNftIds.length;

      const pagesCollectionNfts = [];
      for (let i = 0; i < collectionNftIds.length; i += arr.limitStep) {
        pagesCollectionNfts.push(collectionNftIds.slice(i, i + arr.limitStep));
      }

      const pageCollectionNfts = pagesCollectionNfts[arr.page];
      if (pageCollectionNfts) {
        for (let i = 0; i < pageCollectionNfts.length; i++) {
          const nftId = pageCollectionNfts[i];
          const nftCard = await dispatch("getNftCard", nftId);
          result.nfts.push(nftCard);
        }
        console.log(result);
        return result;
      } else {
        return null;
      }

      // if (collectionNfts.length >= args.quantity) {
      //   for (let i = 0; i < args.quantity; i++) {
      //     collectionNftCards.push(
      //       await dispatch("getNftCard", collectionNfts[i])
      //     );
      //   }
      // } else {
      //   for (let i = 0; i < collectionNfts.length; i++) {
      //     collectionNftCards.push(
      //       await dispatch("getNftCard", collectionNfts[i])
      //     );
      //   }
      // }

      // return collectionNftCards;
    },

    async getMarketplaceCollections({ dispatch }, arr) {
      let data = await dispatch("fetchCollections");

      const result = {
        length: 0,
        collections: [],
      };

      if (arr.searchingText) {
        data = data.filter((nft) => {
          const matchesName = nft.name
            .toLowerCase()
            .includes(arr.searchingText.toLowerCase());

          return matchesName;
        });
      }
      result.length = data.length;

      const pagesCollections = [];
      for (let i = 0; i < data.length; i += arr.limitStep) {
        pagesCollections.push(data.slice(i, i + arr.limitStep));
      }

      const pageCollections = pagesCollections[arr.page];
      if (pageCollections) {
        for (let i = 0; i < pageCollections.length; i++) {
          const collection = pageCollections[i];
          const collectionCard = await dispatch(
            "getCollectionCard",
            collection.id
          );
          result.collections.push(collectionCard);
        }
        return result;
      } else {
        return null;
      }
    },
  },
  mutations: {
    upadateCollections(state, collections) {
      state.collections = collections.sort(() => Math.random() - 0.5);
    },
    updateTrendingCollections(state, collections) {
      state.trendingCollections = collections;
    },
  },
};
