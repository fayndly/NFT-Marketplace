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
        class="nft-card"
        v-for="nft in marketplaceNfts"
        :key="nft.id"
        :id="nft.id"
        :image="nft.image"
        :name="nft.name"
        :price="nft.price"
        :highestBid="nft.highestBid"
        :artistId="nft.creatorId"
        :artist="nft.creator"
        :isAdaptive="getScreenSize <= 834"
      />
      <div ref="observer"></div>
    </gridWrapper>
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import { mapActions } from "vuex";

export default {
  name: "MarketplaceNfts",
  mixins: [screenHandler],
  data() {
    return {
      marketplaceNfts: null,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),

      limitStep: 12,
      collectionsCounter: 12,
    };
  },
  methods: {
    ...mapActions(["getMarketplaceNfts"]),
    async loadMarketplaceNfts() {
      await this.getMarketplaceNfts(this.collectionsCounter)
        .then((result) => {
          this.marketplaceNfts = result;
          this.loading = false;
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
          console.log(err);
        });
    },
    async loadMoreMarketplaceNfts() {
      await this.getMarketplaceNfts(this.collectionsCounter)
        .then((result) => {
          this.marketplaceNfts.push(...result.slice(-this.limitStep));
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
    await this.loadMarketplaceNfts();
    this.$emit("nftsLoaded", this.lengthMarketplaceNfts);

    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        this.collectionsCounter += this.limitStep;
        this.loadMoreMarketplaceNfts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
};
</script>

<style lang="scss" scoped>
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
