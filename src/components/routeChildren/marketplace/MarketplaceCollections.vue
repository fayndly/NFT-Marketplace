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
        v-for="collection in marketplaceCollections"
        :key="collection.id"
        :id="collection.id"
        :quality="collection.quality"
        :nfts="collection.nftImages"
        :artist="collection.creator"
        :name="collection.name"
        :isAdaptive="getScreenSize <= 834"
      />
      <div
        v-if="marketplaceCollections.length < lengthArrayCollections"
        v-intersection="loadMoreMarketplaceCollections"
      ></div>
    </gridWrapper>
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import { mapActions } from "vuex";

export default {
  name: "MarketplaceCollections",
  mixins: [screenHandler],
  data() {
    return {
      marketplaceCollections: [],
      lengthArrayCollections: 0,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),
      searchQuery: this.$route.query.searchValue,

      limitStep: 9,
      pageCards: 0,
    };
  },
  methods: {
    ...mapActions(["getMarketplaceCollections"]),
    async loadMarketplaceCollections() {
      await this.getMarketplaceCollections({
        page: this.pageCards,
        limitStep: this.limitStep,
        searchingText: this.searchQuery,
      })
        .then((result) => {
          console.log(result);
          if (result) {
            this.marketplaceCollections = result.collections;
            this.lengthArrayCollections = result.length;
            this.loadingError = false;
          } else {
            this.lengthArrayCollections = 0;
            this.loadingError = true;
            this.loadingErrorText = new Error(
              "We couldn't find cards matching your request."
            );
          }
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loadingError = true;
          this.loadingErrorText = err;
        });
    },
    async loadMoreMarketplaceCollections() {
      this.pageCards++;
      await this.getMarketplaceCollections({
        page: this.pageCards,
        limitStep: this.limitStep,
        searchingText: this.searchQuery,
      })
        .then((result) => {
          if (result) {
            this.marketplaceCollections.push(...result.collections);
            this.loadingError = false;
          }
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
          console.log(err);
        });
    },
  },
  watch: {
    async lengthArrayCollections(newLength) {
      this.$emit("loadedCollections", newLength);
    },
    async "$route.query"(newQuery) {
      this.searchQuery = newQuery.searchValue;
      await this.loadMarketplaceCollections();
    },
  },
  async mounted() {
    // this.$router.beforeEach((to, from, next) => {
    //   console.log(to);
    //   console.log(from);
    //   // to.meta.previousRoute = from;
    //   next();
    // });
    await this.loadMarketplaceCollections();
    this.$emit("loadedCollections", this.lengthArrayCollections);
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  & :deep(.collection-card) {
    .collection-card__nft-item:not(.collection-card__nft-more-couter) {
      background-color: $colorBgTextBlack;
    }
  }
}
</style>
