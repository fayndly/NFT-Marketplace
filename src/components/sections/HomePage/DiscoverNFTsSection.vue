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
          @clickButton="console.log('hi')"
        />
      </template>
    </HeaderSection>
    <gridWrapper class="cards-wrapper">
      <NFTCard
        v-for="nft in nfts"
        :key="nft.id"
        :id="nft.id"
        :imagePath="nft.imagePath"
        :name="nft.name"
        :price="nft.price"
        :highest_bid="nft.highest_bid"
      />
    </gridWrapper>
    <ButtonDefault
      class="button-bottom"
      type="secondary"
      modifier="outlined"
      icon="Eye"
      text="See All"
      @clickButton="console.log('hi')"
    />
  </sectionWrapper>
</template>

<script>
import HeaderSection from "../../ui/HeaderSection.vue";
export default {
  name: "DiscoverNFTsSection",
  components: { HeaderSection },
  data() {
    return {
      nfts: [
        {
          id: 123,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 1234,
          highest_bid: 123,
        },
        {
          id: 234,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 234,
          highest_bid: 4323,
        },
        {
          id: 345,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.button-bottom {
  display: none;
  width: 100%;
  max-width: 350px;
  align-self: center;
  @include ScreenSizeMobile {
    display: flex;
  }
}

.cards-wrapper {
  @include ScreenSizeLaptop {
    .nft-card:nth-child(n + 3) {
      display: none;
    }
  }
  @include ScreenSizeMobile {
  }
}
</style>
