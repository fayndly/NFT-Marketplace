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
      artistCollectionCards: null,
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
        cardType: "collections",
        limitStep: this.limitStep,
        page: this.pageCards,
      })
        .then((result) => {
          if (result) {
            this.artistCollectionCards.push(...result);
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
        cardType: "collections",
        limitStep: this.limitStep,
        page: this.pageCards,
      })
        .then((result) => {
          this.artistCollectionCards = result;
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
