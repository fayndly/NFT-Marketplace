export const nfts = {
  state() {
    return {
      nfts: [],
      collectionsNfts: [
        "0N1Force",
        "Azuki",
        "BEANZOfficial",
        "CandyCollective",
        "CloneX",
        "ComfyClubFrens",
        "Doodles",
        "Fancy-Nouns",
        "GenuineUndead",
        "Karma",
        "Kubz",
        "MutantApeYachtClub",
        "Nakamigos",
        "Otherdeed",
        "PartyIcons",
        "Potatoz",
        "PudgyPenguins",
        "reepz",
        "RENGA",
        "SavedSouls",
      ],
      discoverNFTs: [],
      nftHighlight: null,
      highlightedNft: null,
      SearchResult: [],
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
        const randomIndex = Math.floor(Math.random() * artistNftCards.length);
        const randomNftId = artistNftCards[randomIndex].id;
        const nftCard = await dispatch("getNftCard", randomNftId);
        nftCardsByCreator.push(nftCard);
      }
      if (nftCardsByCreator.length > 0) {
        return nftCardsByCreator;
      }
      throw new Error("Failed to load nft artist cards");
    },

    async getMarketplaceNfts({ dispatch }, arr) {
      let data = await dispatch("fetchNfts");

      const result = {
        length: 0,
        nfts: [],
      };

      if (arr.searchingText) {
        data = data.filter((nft) => {
          const matchesName = nft.name
            .toLowerCase()
            .includes(arr.searchingText.toLowerCase());
          const matchesTags = nft.tags.some((tag) =>
            tag.toLowerCase().includes(arr.searchingText.toLowerCase())
          );

          return matchesName || matchesTags;
        });
      }
      result.length = data.length;

      const pagesNfts = [];
      for (let i = 0; i < data.length; i += arr.limitStep) {
        pagesNfts.push(data.slice(i, i + arr.limitStep));
      }
      const pageNfts = pagesNfts[arr.page];
      if (pageNfts) {
        for (let i = 0; i < pageNfts.length; i++) {
          const nft = pageNfts[i];
          const nftCard = await dispatch("getNftCard", nft.id);
          result.nfts.push(nftCard);
        }

        return result;
      } else {
        return null;
      }
    },

    async fetchHighlightedNft({ state, dispatch, commit }) {
      if (!state.highlightedNft) {
        await dispatch("fetchNfts");

        const nftId = "0xed5af388653567af2f388e6224dc7c4b3241c544:668";
        const nftCard = await dispatch("getNftCard", nftId);

        commit("upadateHighlightedNft", nftCard);
      }
    },

    async fetchDiscoverNFTs({ state, dispatch, commit }) {
      if (!state.discoverNFTs.length) {
        await dispatch("fetchNfts");

        const discoverNftIds = [
          "0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91:8146",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:7488",
          "0xabeca79f4eb1d6cc7a98a8bf3c7fb769ea0e4c77:2972",
        ];
        const discoverNfts = [];

        for (let i = 0; i < discoverNftIds.length; i++) {
          const nftCard = await dispatch("getNftCard", discoverNftIds[i]);

          discoverNfts.push(nftCard);
        }
        commit("upadateDiscoverNFTs", discoverNfts);
      }
    },

    async fetchNFTHighlight({ state, dispatch, commit }) {
      if (!state.highlightedNft) {
        const data = await dispatch("fetchNfts");

        const nft = data.find(
          (value) =>
            value.id === "0x86cc280d0bac0bd4ea38ba7d31e895aa20cceb4b:15294"
        );

        nft.creator = await dispatch("getArtistCard", nft.id_creator);
        commit("upadateNFTHighlight", nft);
      }
    },
  },
  mutations: {
    upadateNfts(state, nfts) {
      state.nfts = nfts.sort(() => Math.random() - 0.5);
    },
    upadateDiscoverNFTs(state, nfts) {
      state.discoverNFTs = nfts;
    },
    upadateNFTHighlight(state, nft) {
      state.nftHighlight = nft;
    },
    upadateHighlightedNft(state, nft) {
      state.highlightedNft = nft;
    },
  },
};
