<template>
  <sectionWrapper class="NFTHighlight">
    <div class="NFTHighlight__info">
      <div class="NFTHighlight__nft-info">
        <artistCard size="small" id="123" />
        <p class="NFTHighlight__name-nft">Magic Mashrooms</p>
        <ButtonDefault
          v-if="getScreenSize > 834"
          class="NFTHighlight__button"
          type="secondary"
          modifier="filled"
          icon="Eye"
          text="See NFT"
        />
      </div>
      <AuctionTimer
        class="NFTHighlight__timer"
        endTime="Sep 5, 2024 15:37:25"
        :isAdaptive="getScreenSize <= 834"
      />
      <ButtonDefault
        v-if="getScreenSize <= 834"
        class="NFTHighlight__button"
        type="secondary"
        modifier="filled"
        icon="Eye"
        text="See NFT"
        :isAdaptive="true"
      />
    </div>
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import AuctionTimer from "../../ui/AuctionTimer.vue";

export default {
  name: "NFTHighlightSection",
  components: { AuctionTimer },
  mixins: [screenHandler],
};
</script>

<style lang="scss" scoped>
.NFTHighlight {
  height: 640px;
  background-image: url("https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==");
  background-position: center;
  background-repeat: no-repeat;
  // background-origin: content-box;
  background-size: cover;
  position: relative;
  align-items: flex-end;

  &::after {
    content: "";
    z-index: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%);
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }
  &__nft-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__artist {
  }
  &__name-nft {
    @include h2;
    word-wrap: break-word;
  }
  &__button {
    background-color: #fff;
    &:deep(.button__text) {
      color: $colorBgTextBlack;
    }
    &:deep(path) {
      fill: $colorActionPurple;
    }
  }

  @include ScreenSizeTablet {
    &__name-nft {
      @include h3;
    }
  }

  @include ScreenSizeMobile {
    &__info {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }
  }
}
</style>
