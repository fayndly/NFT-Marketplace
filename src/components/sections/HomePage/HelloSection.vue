<template>
  <sectionWrapper class="hello-section">
    <div class="hello-section__text">
      <div class="hello-section__headline-subhead">
        <h1 class="hello-section__headline">
          Discover digital art & Collect NFTs
        </h1>
        <p class="hello-section__subhead">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell
          art from more than 20k NFT artists.
        </p>
      </div>
      <ButtonDefault
        v-if="getScreenSize > 834"
        class="hello-section__button"
        text="Get Started"
        icon="RocketLaunch"
        type="secondary"
        modifier="filled"
        @clickButton="this.$router.push('/create-account')"
      />
      <AdditionalInfo
        v-if="getScreenSize > 834"
        class="hello-section__additional-info"
      />
    </div>
    <highlightedNFT
      class="hello-section__highlighted-nft"
      image="/images/content/ufo.webp"
      name="Space Walking"
    />
    <ButtonDefault
      v-if="getScreenSize <= 834"
      class="hello-section__button-mobile"
      text="Get Started"
      icon="RocketLaunch"
      type="secondary"
      modifier="filled"
      :isAdaptive="true"
      @clickButton="this.$router.push('/create-account')"
    />
    <AdditionalInfo
      v-if="getScreenSize <= 834"
      :isAdaptive="true"
      class="hello-section__additional-info-mobile"
    />
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "HelloSection",
  mixins: [screenHandler],
};
</script>

<style lang="scss" scoped>
.hello-section {
  &:deep(.section__content) {
    flex-direction: row;
    gap: 30px;
  }
  &__text {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  &__headline {
  }
  &__headline-subhead {
    width: 500px;
  }
  &__subhead {
    margin-top: 20px;
    @include body-text;
  }
  &__button {
  }
  &__highlighted-nft {
    width: 50%;
  }

  @include ScreenSizeTablet {
    &__headline {
      @include h3;
    }
    &__subhead {
      margin-top: 20px;
      @include base;
    }
    &__headline-subhead {
      width: fit-content;
    }
  }

  @include ScreenSizeMobile {
    &:deep(.section__content) {
      flex-direction: column;
      gap: 40px;
    }
    &__headline {
      @include h4;
    }
    &__subhead {
      margin-top: 10px;
    }
    &__highlighted-nft {
      width: 100%;
      max-width: $maxWhidthItem;
      align-self: center;
    }
  }
}
</style>
