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
      <div
        v-if="marketplaceNfts.length < lengthArrayNfts"
        v-intersection="loadMoreMarketplaceNfts"
      ></div>
    </gridWrapper>
  </sectionWrapper>
</template>

<script>
import { mapActions } from "vuex";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "MarketplaceNfts",
  mixins: [screenHandler],
  data() {
    return {
      marketplaceNfts: [],
      lengthArrayNfts: 0,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),
      searchQuery: this.$route.query.searchValue,

      limitStep: 9,
      pageCards: 0,
    };
  },
  methods: {
    ...mapActions(["getMarketplaceNfts", "getNftsSearchResult"]),
    async loadMarketplaceNfts() {
      await this.getMarketplaceNfts({
        page: this.pageCards,
        limitStep: this.limitStep,
        searchingText: this.searchQuery,
      })
        .then((result) => {
          if (result) {
            this.marketplaceNfts = result.nfts;
            this.lengthArrayNfts = result.length;
            this.loadingError = false;
          } else {
            this.lengthArrayNfts = 0;
            this.loadingError = true;
            this.loadingErrorText = new Error(
              "We couldn't find cards matching your request."
            );
          }
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    async loadMoreMarketplaceNfts() {
      this.pageCards++;
      await this.getMarketplaceNfts({
        page: this.pageCards,
        limitStep: this.limitStep,
        searchingText: this.searchQuery,
      })
        .then((result) => {
          if (result) {
            this.marketplaceNfts.push(...result.nfts);
          }
        })
        .catch((err) => {
          this.loadingError = true;
          this.loadingErrorText = err;
          console.log(err);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    async lengthArrayNfts(newLength) {
      this.$emit("loadedNfts", newLength);
    },
    async "$route.query"(newQuery) {
      this.searchQuery = newQuery.searchValue;
      await this.loadMarketplaceNfts();
    },
  },
  async mounted() {
    await this.loadMarketplaceNfts();
    this.$emit("loadedNfts", this.lengthArrayNfts);
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
