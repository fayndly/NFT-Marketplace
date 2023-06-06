<template>
  <sectionWrapper>
    <HeaderSection
      headerName="Trending Collection"
      headerText="Checkout our weekly updated trending collection."
    />
    <gridWrapper class="cards-wrapper" v-if="collections">
      <collectionCard
        v-for="collection in collections"
        :key="collection.id"
        :id="collection.id"
        :quality="collection.quality"
        :nfts="collection.nftImages"
        :artist="collection.creator"
        :name="collection.name"
        :isAdaptive="getScreenSize <= 834"
      />
    </gridWrapper>
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TrendingCollectionSection",
  mixins: [screenHandler],
  data() {
    return {
      collections: null,
    };
  },
  computed: { ...mapGetters(["getTrendingCollection"]) },
  methods: { ...mapActions(["fetchTrendingCollection"]) },
  async mounted() {
    await this.fetchTrendingCollection();
    this.collections = this.getTrendingCollection;
  },
};
</script>

<style lang="scss" scoped>
.cards-wrapper {
  @include ScreenSizeTablet {
    .collection-card:nth-child(n + 3) {
      display: none;
    }
  }
  @include ScreenSizeMobile {
    .collection-card:nth-child(n + 2) {
      display: none;
    }
  }
}
</style>
