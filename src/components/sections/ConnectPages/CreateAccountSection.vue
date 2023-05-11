<template>
  <section class="create-account">
    <img
      :src="getImageFromPublic('/images/content/ufo.webp')"
      alt=""
      class="create-account__placeholder"
    />
    <div class="create-account__wrapper">
      <div class="create-account__head">
        <h2 class="create-account__headline">Create account</h2>
        <p class="create-account__subheadline">
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </p>
      </div>
      <CreateAccountForm :isAdaptive="getScreenSize <= 834" />
    </div>
  </section>
</template>

<script>
import getImages from "@/mixins/getImages";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "CreateAccountSection",
  mixins: [getImages, screenHandler],
};
</script>

<style lang="scss" scoped>
.create-account {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 60px;
  align-items: stretch;

  &__placeholder {
    object-fit: cover;
    object-position: center;
    width: 50%;
  }
  &__wrapper {
    padding: 40px 30px;
    padding-left: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
  }
  &__head {
  }
  &__headline {
  }
  &__subheadline {
    margin-top: 20px;
    @include body-text;
    max-width: 460px;
  }

  @include ScreenSizeTablet {
    &__head {
      @include base;
    }
    &__headline {
      @include h3;
    }
  }
  @include ScreenSizeTabletMini {
    gap: 30px;
    &__wrapper {
      max-width: $maxWhidthItem;
    }
  }
  @include ScreenSizeMobile {
    gap: 30px;
    flex-direction: column;
    &__wrapper {
      max-width: $maxWhidthItem;
      align-self: center;
      padding-top: 0;
      padding-left: 30px;
    }
    &__placeholder {
      width: 100%;
      height: 230px;
    }
  }
}
</style>
