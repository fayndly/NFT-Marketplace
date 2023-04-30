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
        class="hello-section__button"
        text="Get Started"
        icon="RocketLaunch"
        type="secondary"
        modifier="filled"
      />
      <AdditionalInfo class="hello-section__additional-info" />
    </div>
    <highlightedNFT
      class="hello-section__nft-card"
      image="/images/content/ufo.webp"
      name="Space Walking"
    />
    <ButtonDefault
      class="hello-section__button-bottom"
      text="Get Started"
      icon="RocketLaunch"
      type="secondary"
      modifier="filled"
    />
    <AdditionalInfo class="hello-section__additional-info-bottom" />
  </sectionWrapper>
</template>

<script>
export default {
  name: "HelloSection",

  data() {
    return {
      categories: [
        {
          name: "hello",
        },
      ],
    };
  },
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
  &__button-bottom {
    display: none;
    width: 100%;
    max-width: 450px;
  }
  &__additional-info-bottom {
    display: none;
    width: 100%;
    max-width: 350px;
  }
  &__nft-card {
    width: 50%;
    // height: 330px;
  }

  @include ScreenSizeLaptop {
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
    &__button {
      display: none;
    }
    &__additional-info {
      display: none;
    }
    &__additional-info-bottom {
      display: flex;
      align-self: center;
      width: 100%;
      max-width: 350px;
    }
    &__button-bottom {
      display: flex;
      align-self: center;
      width: 100%;
      max-width: 350px;
    }
    &__nft-card {
      width: 100%;
      max-width: 100%;
      align-self: center;
    }
  }
}
</style>
