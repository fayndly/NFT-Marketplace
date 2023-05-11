<template>
  <sectionWrapper>
    <div class="subscribe-widget">
      <img
        :src="getImageFromPublic('/images/content/cosmonaft.webp')"
        alt=""
        class="subscribe-widget__image"
      />
      <div class="subscribe-widget__head">
        <h3 class="subscribe-widget__headline">Join our weekly digest</h3>
        <p class="subscribe-widget__subhead">
          Get exclusive promotions & updates straight to your inbox.
        </p>
        <SubscribeForm
          class="subscribe-widget__form"
          :isMobile="getScreenDevice !== 'desktop'"
        />
      </div>
    </div>
  </sectionWrapper>
</template>

<script>
import getImages from "@/mixins/getImages";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "SubscribeWidgetSection",
  mixins: [screenHandler, getImages],
};
</script>

<style lang="scss" scoped>
.subscribe-widget {
  background-color: $colorBgTextSilverBlack;
  border-radius: 20px;
  padding: 60px;
  display: flex;
  align-items: center;
  gap: 80px;
  width: 100%;
  box-sizing: border-box;
  &__image {
    // width: 100%;
    flex-grow: 1;
    height: 310px;
    border-radius: 20px;
    object-fit: cover;
    object-position: center;
  }
  &__head {
    width: 425px;
  }
  &__headline {
    margin-top: 10px;
  }
  &__subhead {
    @include body-text;
  }
  &__form {
    margin-top: 40px;
  }
  @include ScreenSizeTablet {
    gap: 30px;
    padding: 40px 30px;

    &__image {
      width: 300px;
      height: 280px;
    }
    &__headline {
      @include h4;
    }
    &__subhead {
      @include base;
    }
  }
  @include ScreenSizeMobile {
    flex-direction: column;
    background-color: transparent;
    padding: 0;

    &__image {
      width: 100%;
      // height: 255px;
      aspect-ratio: 2/1;
      height: auto;
    }
    &__head {
      width: 100%;
    }
  }
}
</style>
