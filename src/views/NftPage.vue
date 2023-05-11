<template>
  <mainWrapper>
    <sectionWrapper
      class="placeholder-section"
      :style="`background-image: url(${getPlaceholderImage})`"
    ></sectionWrapper>
    <sectionWrapper class="nft">
      <div class="nft__info">
        <div class="nft__headline">
          <h2 class="nft__name">Animakid</h2>
          <p class="nft__uploaded">Minted on Sep 30, 2022</p>
        </div>
        <AuctionTimer
          v-if="getScreenSize < 834"
          class="nft__timer-mobile"
          endTime="Sep 5, 2024 15:37:25"
          :button="true"
          :isAdaptive="getScreenSize <= 834"
        />
        <div class="nft__info-item">
          <p class="nft__info-haedline">Created By</p>
          <artistCard size="small" :fill="false" />
        </div>
        <div class="nft__info-item">
          <p class="nft__info-haedline">Description</p>
          <p class="nft__info-text">
            The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
            blockchain,<br /><br />There are all sorts of beings in the NFT
            Universe. The most advanced and friendly of the bunch are Orbitians.
            <br /><br />They live in a metal space machines, high up in the sky
            and only have one foot on Earth. These Orbitians are a peaceful
            race, but they have been at war with a group of invaders for many
            generations. The invaders are called Upside-Downs, because of their
            inverted bodies that live on the ground, yet do not know any other
            way to be. Upside-Downs believe that they will be able to win this
            war if they could only get an eye into Orbitian territory, so
            they've taken to make human beings their target.
          </p>
        </div>
        <div class="nft__info-item">
          <p class="nft__info-haedline">Details</p>
          <div class="nft__more-info-details">
            <div class="nft-info-detail">
              <IconComponent
                path="Globe"
                color="silver"
                class="nft-info-detail__icon"
              />
              <p class="nft-info-detail__text">View on Etherscan</p>
            </div>
            <div class="nft-info-detail">
              <IconComponent
                path="Globe"
                color="silver"
                class="nft-info-detail__icon"
              />
              <p class="nft-info-detail__text">View Original</p>
            </div>
          </div>
        </div>
        <div class="nft__info-item">
          <p class="nft__info-haedline">Tags</p>
          <div class="nft__more-info-tags">
            <TagComponent name="Animation" />
            <TagComponent name="illustration" />
            <TagComponent name="moon" />
            <TagComponent name="sun" />
            <TagComponent name="sunday" />
            <TagComponent name="aquamarin" />
          </div>
        </div>
      </div>
      <div class="nft__auction-timer" v-if="getScreenSize >= 834">
        <AuctionTimer
          class="nft__timer"
          endTime="Sep 5, 2024 15:37:25"
          :button="true"
        />
      </div>
    </sectionWrapper>
    <sectionWrapper>
      <HeaderSection headerName="More from this artist">
        <template #button>
          <ButtonDefault
            class="button-header"
            type="secondary"
            modifier="outlined"
            icon="ArrowRight"
            text="Go To Artist Page"
          />
        </template>
      </HeaderSection>
      <gridWrapper>
        <NFTCard
          v-for="nft in nfts"
          :key="nft.id"
          :id="nft.id"
          :imagePath="nft.imagePath"
          :name="nft.name"
          :price="nft.price"
          :highest_bid="nft.highest_bid"
          :isAdaptive="getScreenSize <= 834"
        />
        <ButtonDefault
          v-if="getScreenSize < 834"
          class="button-header-mobile"
          type="secondary"
          modifier="outlined"
          icon="ArrowRight"
          text="Go To Artist Page"
          :isAdaptive="true"
        />
      </gridWrapper>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import TagComponent from "@/components/ui/TagComponent.vue";
import HeaderSection from "@/components/ui/HeaderSection.vue";
import AuctionTimer from "@/components/ui/AuctionTimer.vue";
import getImages from "@/mixins/getImages";
import screenHandler from "@/mixins/screenHandler";
export default {
  name: "NftPage",
  components: { AuctionTimer, HeaderSection, TagComponent },
  mixins: [getImages, screenHandler],
  computed: {
    getPlaceholderImage() {
      return "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==";
    },
  },
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
        {
          id: 475855,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.nft {
  padding-top: 40px;
  padding-bottom: 40px;
  & :deep(.section__content) {
    flex-direction: row;
    justify-content: space-between;
    gap: 150px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__headline {
  }
  &__name {
  }
  &__uploaded {
    margin-top: 10px;
    @include body-text;
  }
  &__info-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__more-info-tags {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__more-info-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__info-haedline {
    color: $colorBgTextSilverWhite;
    @include h5;
    font-family: $fontSpaceMono;
  }
  &__info-text {
    @include body-text;
  }
  &__auction-timer {
  }
  &__timer {
    height: fit-content;
  }

  .button-header {
    &:deep(.button__icon) {
      path {
        fill: $colorActionPurple;
      }
    }
  }

  @include ScreenSizeTablet {
    & :deep(.section__content) {
      gap: 30px;
    }
  }
  @include ScreenSizeTabletMini {
    &__info {
      gap: 20px;
    }
  }
  @include ScreenSizeMobile {
  }
}

.nft-info-detail {
  display: flex;
  gap: 10px;

  user-select: none;
  cursor: pointer;
  &__icon {
    width: 32px;
    height: 32px;
  }
  &__text {
    @include body-text;
  }
}
.placeholder-section {
  height: 560px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @include ScreenSizeTablet {
    height: 420px;
  }
  @include ScreenSizeMobile {
    height: 320px;
  }
}
</style>
