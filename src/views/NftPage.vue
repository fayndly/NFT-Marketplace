<template>
  <mainWrapper>
    <sectionWrapper
      class="placeholder-section"
      :style="`background-image: url(${nft.image_path})`"
    ></sectionWrapper>
    <sectionWrapper class="nft">
      <div class="nft__info">
        <div class="nft__headline">
          <h2 class="nft__name">{{ nft.name }}</h2>
          <p class="nft__uploaded">Minted on {{ nft.date_mounted }}</p>
        </div>
        <AuctionTimer
          v-if="getScreenSize < 834"
          class="nft__timer-mobile"
          :endTime="nft.date_auction_ends"
          :button="true"
          :isAdaptive="getScreenSize <= 834"
        />
        <div class="nft__info-item">
          <p class="nft__info-haedline">Created By</p>
          <artistCard
            class="nft-card__artist"
            size="small"
            :id="nft.id_creator"
            :fill="false"
          />
        </div>
        <div class="nft__info-item" v-if="nft.description.length">
          <p class="nft__info-haedline">Description</p>
          <p class="nft__info-text" v-html="nft.description"></p>
        </div>
        <div class="nft__info-item" v-if="nft.details.length">
          <p class="nft__info-haedline">Details</p>
          <div class="nft__more-info-details">
            <a
              v-for="(detail, index) in nft.details"
              :key="index"
              :href="detail.link"
              class="nft-info-detail"
            >
              <IconComponent
                path="Globe"
                color="silver"
                class="nft-info-detail__icon"
              />
              <p class="nft-info-detail__text">{{ detail.name }}</p>
            </a>
          </div>
        </div>
        <div class="nft__info-item" v-if="nft.tags.length">
          <p class="nft__info-haedline">Tags</p>
          <div class="nft__more-info-tags">
            <TagComponent
              v-for="(tag, index) in nft.tags"
              :key="index"
              :name="tag"
            />
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
  data() {
    return {
      nfts: [
        {
          id: "kshuiye345jkge",
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 1234,
          highest_bid: 123,
        },
        {
          id: "dfjkghioue354789534",
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 234,
          highest_bid: 4323,
        },
        {
          id: "lkdfgjkwgh4785y8934",
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
        {
          id: "jihfui3y94574egir234",
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
      ],
      nft: {},
    };
  },
  created() {
    this.nft = this.$store.getters.getNftPage(this.$route.params.id);
    console.log(this.nft);
  },
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
