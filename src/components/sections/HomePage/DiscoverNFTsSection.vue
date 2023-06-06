<template>
  <sectionWrapper class="categories">
    <HeaderSection
      headerName="Discover More NFTs"
      headerText="Explore new trending NFTs"
    >
      <template v-slot:button>
        <ButtonDefault
          type="secondary"
          modifier="outlined"
          icon="Eye"
          text="See All"
          @clickButton="this.$router.push('/marketplace')"
        />
      </template>
    </HeaderSection>
    <gridWrapper class="cards-wrapper" v-if="nfts[0] != undefined">
      <NFTCard
        v-for="nft in nfts"
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
    </gridWrapper>
    <ButtonDefault
      v-if="getScreenSize <= 834"
      type="secondary"
      modifier="outlined"
      icon="Eye"
      text="See All"
      :isAdaptive="true"
      @clickButton="this.$router.push('/marketplace')"
    />
  </sectionWrapper>
</template>

<script>
import HeaderSection from "../../ui/HeaderSection.vue";
import screenHandler from "@/mixins/screenHandler";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "DiscoverNFTsSection",
  data() {
    return {
      nfts: [],
    };
  },
  components: { HeaderSection },
  computed: { ...mapGetters(["getDiscoverNFTs"]) },
  methods: { ...mapActions(["fetchDiscoverNFTs"]) },
  mixins: [screenHandler],
  async mounted() {
    await this.fetchDiscoverNFTs();
    this.nfts = this.getDiscoverNFTs;
  },
};
</script>

<style lang="scss" scoped>
.cards-wrapper {
  @include ScreenSizeTablet {
    .nft-card:nth-child(n + 3) {
      display: none;
    }
  }
  @include ScreenSizeTabletMini {
    .nft-card:nth-child(n + 4) {
      display: none;
    }
  }
  @include ScreenSizeMobile {
    .nft-card:nth-child(n + 4) {
      display: none;
    }
  }
}
</style>
