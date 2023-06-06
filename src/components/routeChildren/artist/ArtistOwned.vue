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
    <ButtonDefault
      v-if="showButtonMore()"
      style="align-self: center"
      type="secondary"
      modifier="outlined"
      text="More nfts"
      :isAdaptive="getScreenSize <= 834"
      @clickButton="loadMoreNfts()"
    />
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
      nftsCounter: 6,
    };
  },
  methods: {
    ...mapActions(["getArtistPageCards"]),
    showButtonMore() {
      if (this.artistNftsOwnedTest) {
        return (
          !this.loadingError &
          (this.artistNftsOwnedTest.length > this.nftsCounter)
        );
      }
      return;
    },
    async loadMoreNfts() {
      this.nftsCounter += 6;
      await this.loadArtistPageCards();
    },
    async loadArtistPageCards() {
      await this.getArtistPageCards({
        artistId: this.$route.params.id,
        cardType: "ownedNfts",
        quantity: this.nftsCounter,
      })
        .then((result) => {
          this.artistNftsOwnedTest = result;
          this.loading = false;
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
          console.log(err);
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
  padding-top: 80px;
  padding-bottom: 80px;
  & :deep(.nft-card) {
    background-color: $colorBgTextBlack;
  }
}
</style>
