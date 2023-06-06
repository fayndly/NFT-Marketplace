export const nfts = {
  state() {
    return {
      nfts: [],
      collectionsNfts: [
        "Azuki",
        "FancyNouns",
        "MutantApeYachtClub",
        "Otherdeed",
        "Potatoz",
        "PudgyPenguins",
      ],
      discoverNFTs: [],
      nftHighlight: {},
      highlightedNft: null,
    };
  },
  getters: {
    getNfts: (state) => {
      return state.nfts;
    },
    getDiscoverNFTs(state) {
      return state.discoverNFTs;
    },
    getNFTHighlight(state) {
      return state.nftHighlight;
    },
    getHighlightedNft(state) {
      return state.highlightedNft;
    },
  },
  actions: {
    async fetchNfts({ state, commit }) {
      const collectionsNfts = state.collectionsNfts;
      const nfts = [];

      if (state.nfts.length < 1) {
        for (let i = 0; i < collectionsNfts.length; i++) {
          const response = await fetch(
            `${process.env.BASE_URL}mocks/nfts/${collectionsNfts[i]}.json`
          );
          const data = await response.json();
          nfts.push(...data);
        }
        commit("upadateNfts", nfts);
        return nfts;
      }
      return state.nfts;
    },

    async getNftCard({ dispatch }, id) {
      const data = await dispatch("fetchNfts");

      const nft = data.find((value) => value.id === id);

      if (nft) {
        return {
          id: nft.id,
          image: nft.image_path,
          name: nft.name,
          price: nft.price,
          highestBid: nft.highest_bid,
          creator: await dispatch("getArtistCard", nft.id_creator),
        };
      }
      throw new Error("nft card was not found");
    },

    async getNftPage({ dispatch }, id) {
      const data = await dispatch("fetchNfts");

      const nftPage = data.find((value) => value.id === id);
      if (nftPage) {
        nftPage.creator = await dispatch("getArtistCard", nftPage.id_creator);
        return nftPage;
      }
      throw new Error("nft page was not found");
    },

    async getNftCardsByCreator({ dispatch }, creatorId) {
      const data = await dispatch("fetchNfts");
      const nftCardsByCreator = [];

      const artistNftCards = data.filter(
        (value) => value.id_creator === creatorId
      );

      for (let index = 0; index < 3; index++) {
        const nft = artistNftCards[index];
        nftCardsByCreator.push({
          id: nft.id,
          image: nft.image_path,
          name: nft.name,
          price: nft.price,
          highestBid: nft.highest_bid,
          creator: await dispatch(
            "getArtistCard",
            artistNftCards[index].id_creator
          ),
        });
      }
      if (nftCardsByCreator.length > 0) {
        return nftCardsByCreator;
      }
      throw new Error("Failed to load nft artist cards");
    },

    async getMarketplaceNfts({ dispatch }, quantity) {
      const data = await dispatch("fetchNfts");

      data.sort(() => Math.random() - 0.5);

      const nfts = [];
      let countArg;

      if (data.length >= quantity) {
        countArg = quantity;
      } else {
        return [];
        // countArg = data.length;
      }

      for (let i = 0; i < countArg; i++) {
        const nft = data[i];
        nfts.push({
          id: nft.id,
          image: nft.image_path,
          name: nft.name,
          price: nft.price,
          highestBid: nft.highest_bid,
          creator: await dispatch("getArtistCard", nft.id_creator),
        });
      }

      return nfts;
    },

    async fetchHighlightedNft({ dispatch, commit }) {
      const data = await dispatch("fetchNfts");

      const randomIndex = Math.floor(Math.random() * data.length);
      const randomNftId = data[randomIndex].id;
      const nftCard = await dispatch("getNftCard", randomNftId);

      commit("upadateHighlightedNft", nftCard);
    },

    async fetchDiscoverNFTs({ dispatch, commit }) {
      const data = await dispatch("fetchNfts");

      const randomNfts = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const dataNftCard = data[randomIndex].id;
        const nftCard = await dispatch("getNftCard", dataNftCard);

        randomNfts.push(nftCard);
      }
      commit("upadateDiscoverNFTs", randomNfts);
    },

    async fetchNFTHighlight({ dispatch, commit }) {
      const data = await dispatch("fetchNfts");

      const randomIndex = Math.floor(Math.random() * data.length);
      const nft = data[randomIndex];
      (nft.creator = await dispatch("getArtistCard", nft.id_creator)),
        commit("upadateNFTHighlight", data[randomIndex]);
    },
  },
  mutations: {
    upadateNfts(state, nfts) {
      state.nfts = nfts;
    },
    upadateDiscoverNFTs(state, nfts) {
      state.discoverNFTs = nfts;
    },
    upadateNFTHighlight(state, nft) {
      state.nftHighlight = nft;
    },
    upadateHighlightedNft(state, nft) {
      if (!state.highlightedNft) {
        state.highlightedNft = nft;
      }
    },
  },
};
