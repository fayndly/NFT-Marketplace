<template>
  <sectionWrapper class="section-list">
    <loaderSection
      v-if="loading || loadingError"
      :isLoading="loading"
      :isError="loadingError"
      :errorText="loadingErrorText"
    />
    <gridWrapper class="card-wrapper" v-else-if="!loadingError">
      <NFTCard
        class="card-nft"
        v-for="nftOwned in artistNftsOwnedTest"
        :key="nftOwned.id"
        :id="nftOwned.id"
        :image="nftOwned.image"
        :name="nftOwned.name"
        :price="nftOwned.price"
        :highestBid="nftOwned.highestBid"
        :artistId="nftOwned.creatorId"
        :artist="nftOwned.creator"
        :isAdaptive="getScreenSize <= 834"
      />
    </gridWrapper>
    <div v-intersection="loadMoreCards"></div>
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import { mapActions } from "vuex";

export default {
  name: "ArtistCollection",
  mixins: [screenHandler],

  data() {
    return {
      artistNftsOwnedTest: null,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),

      limitStep: 6,
      pageCards: 0,
    };
  },
  methods: {
    ...mapActions(["getArtistPageCards"]),
    async loadMoreCards() {
      this.pageCards++;
      await this.getArtistPageCards({
        artistId: this.$route.params.id,
        cardType: "ownedNfts",
        limitStep: this.limitStep,
        page: this.pageCards,
      })
        .then((result) => {
          if (result) {
            this.artistNftsOwnedTest.push(...result);
          }
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
        });
    },
    async loadArtistPageCards() {
      await this.getArtistPageCards({
        artistId: this.$route.params.id,
        cardType: "ownedNfts",
        limitStep: this.limitStep,
        page: this.pageCards,
      })
        .then((result) => {
          this.artistNftsOwnedTest = result;
          this.loading = false;
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
        });
    },
  },
  async mounted() {
    await this.loadArtistPageCards();
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  & :deep(.nft-card) {
    background-color: $colorBgTextBlack;
  }
}
</style>
