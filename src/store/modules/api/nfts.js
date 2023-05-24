export default {
  state() {
    return {
      nfts: [],
    };
  },
  getters: {
    getNfts: (state) => {
      // if (state.nfts.length === 0) {
      //   throw new Error("Data is not loaded yet");
      // }

      return state.nfts;
    },
    getNftPage: (state) => (id) => {
      const nftPage = state.nfts.find((value) => value.id === id);
      return nftPage;
    },
    getNftCard: (state) => (id) => {
      const nft = state.nfts.find((value) => value.id === id);
      return nft;
      // for (let i = 0; i < state.nfts.length; i++) {
      //   if (state.nfts[i].id === id) {
      //     return state.nfts[i];
      //   } else {
      //     return { state: null };
      //   }
      // }
    },
    getDiscoverNFTs(state) {
      const randomNfts = [];
      for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * state.nfts.length);
        randomNfts.push(state.nfts[randomIndex]);
        state.nfts.splice(randomIndex, 1);
      }
      return randomNfts;
    },
    getNftsCreated: (state) => (creatorDd) => {
      const nft = state.nfts.find((value) => value.id_creator === creatorDd);
      return nft;
    },
  },
  actions: {
    async fetchNfts({ commit }) {
      const collectionsNfts = [
        "Azuki",
        "MutantApeYachtClub",
        "WrappedCryptopunks",
      ];
      for (let i = 0; i < collectionsNfts.length; i++) {
        const response = await fetch(
          `${process.env.BASE_URL}mocks/nfts/${collectionsNfts[i]}.json`
        );
        const data = await response.json();
        commit("upadateNfts", data);
      }
    },
  },
  mutations: {
    upadateNfts(state, nfts) {
      state.nfts.push(...nfts);
    },
  },
};
