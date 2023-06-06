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
      <!-- <div ref="observer"></div> -->
    </gridWrapper>
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MarketplaceCollections",
  mixins: [screenHandler],
  data() {
    return {
      marketplaceCollections: null,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),

      limitStep: 3,
      collectionsCounter: 3,
    };
  },
  computed: { ...mapGetters(["getTrendingCollection"]) },
  methods: {
    ...mapActions(["getMarketplaceCollections", "fetchTrendingCollection"]),
    async loadMarketplaceCollections() {
      await this.fetchTrendingCollection();
      this.marketplaceCollections = this.getTrendingCollection;
      this.loading = false;
    },
    async loadMoreMarketplaceCollections() {
      await this.getMarketplaceCollections(this.collectionsCounter)
        .then((result) => {
          this.marketplaceCollections.push(...result.slice(-this.limitStep));
          console.log(this.collectionsCounter);
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
          console.log(err);
        });
    },
  },
  async mounted() {
    await this.loadMarketplaceCollections();

    // const options = {
    //   rootMargin: "0px",
    //   threshold: 1.0,
    // };
    // const callback = (entries) => {
    //   if (entries[0].isIntersecting) {
    //     this.collectionsCounter += this.limitStep;
    //     this.loadMoreMarketplaceCollections();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observer);
  },
};
</script>

<style lang="scss">
.section-list {
  background-color: $colorBgTextSilverBlack;
  padding: 30px;
  padding-top: 0;
  padding-bottom: 0;
  & :deep(.section__content) {
    gap: 0;
  }
}
.card-wrapper {
  padding-top: 60px;
  padding-bottom: 80px;
  & :deep(.nft-card) {
    background-color: $colorBgTextBlack;
  }

  @include ScreenSizeTabletMini {
    padding-top: 30px;
    padding-bottom: 40px;
  }
  @include ScreenSizeMobile {
    padding-top: 30px;
    padding-bottom: 40px;
  }
}
</style>
