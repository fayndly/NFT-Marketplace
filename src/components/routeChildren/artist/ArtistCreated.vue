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
      artistNftCreatedCards: null,
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
        cardType: "createdNfts",
        limitStep: this.limitStep,
        page: this.pageCards,
      })
        .then((result) => {
          if (result) {
            this.artistNftCreatedCards.push(...result);
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
        cardType: "createdNfts",
        limitStep: this.limitStep,
        page: this.pageCards,
      })
        .then((result) => {
          this.artistNftCreatedCards = result;
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
