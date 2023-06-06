<template>
  <sectionWrapper class="section-list">
    <loaderSection
      v-if="loading || loadingError"
      :isLoading="loading"
      :isError="loadingError"
      :errorText="loadingErrorText"
    />
    <gridWrapper
      class="card-wrapper"
      ref="loadMore"
      @scroll="handleScroll()"
      v-else-if="!loadingError"
    >
      <NFTCard
        class="card-nft"
        v-for="nftCreated in artistNftCreatedCards"
        :key="nftCreated.id"
        :id="nftCreated.id"
        :image="nftCreated.image"
        :name="nftCreated.name"
        :price="nftCreated.price"
        :highestBid="nftCreated.highestBid"
        :artistId="nftCreated.creatorId"
        :artist="nftCreated.creator"
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
      artistNftCreatedCards: null,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),
      nftsCounter: 6,

      scroling: false,
    };
  },
  methods: {
    ...mapActions(["getArtistPageCards"]),
    showButtonMore() {
      if (this.artistNftCreatedCards) {
        return (
          !this.loadingError &
          (this.artistNftCreatedCards.length > this.nftsCounter)
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
        cardType: "createdNfts",
        quantity: this.nftsCounter,
      })
        .then((result) => {
          this.artistNftCreatedCards = result;
          this.loading = false;
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
          console.log(err);
        });
    },
    handleScroll(event) {
      const el = event.target;
      console.log(el);
    },
    loadMore() {
      const loadMoreWrapper = this.$refs.loadMore;
      // const elementPosition = loadMoreWrapper.getBoundingClientRect().top;
      return loadMoreWrapper;
    },
  },
  async mounted() {
    await this.loadArtistPageCards();
    console.log(this.loadMore());
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
