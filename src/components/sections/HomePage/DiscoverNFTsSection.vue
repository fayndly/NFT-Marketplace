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
        :imagePath="nft.image_path"
        :name="nft.name"
        :price="nft.price"
        :highest_bid="nft.highest_bid"
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

import { mapGetters } from "vuex";

export default {
  name: "DiscoverNFTsSection",
  components: { HeaderSection },
  computed: { ...mapGetters(["getDiscoverNFTs"]) },
  mixins: [screenHandler],
  data() {
    return {
      nfts: [],
    };
  },
  mounted() {
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
