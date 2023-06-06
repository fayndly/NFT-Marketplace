<template>
  <sectionWrapper class="section-list">
    <loaderSection
      v-if="loading || loadingError"
      :isLoading="loading"
      :isError="loadingError"
      :errorText="loadingErrorText"
    />
    <gridWrapper class="card-wrapper" v-else-if="!loadingError">
      <collectionCard
        v-for="collection in artistCollectionCards"
        :key="collection.id"
        :id="collection.id"
        :quality="collection.quality"
        :nfts="collection.nftImages"
        :artist="collection.creator"
        :name="collection.name"
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
      artistCollectionCards: null,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),
      collectionsCounter: 6,
    };
  },
  methods: {
    ...mapActions(["getArtistPageCards"]),
    showButtonMore() {
      if (this.artistCollectionCards) {
        return (
          !this.loadingError &
          (this.artistCollectionCards.length > this.collectionsCounter)
        );
      }
      return;
    },
    async loadMoreNfts() {
      this.collectionsCounter += 6;
      await this.loadArtistPageCards();
    },
    async loadArtistPageCards() {
      await this.getArtistPageCards({
        artistId: this.$route.params.id,
        cardType: "collections",
        quantity: this.collectionsCounter,
      })
        .then((result) => {
          this.artistCollectionCards = result;
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

<style lang="scss">
.card-wrapper {
  padding-top: 80px;
  padding-bottom: 80px;
  & :deep(.nft-card) {
    background-color: $colorBgTextBlack;
  }
}
</style>
