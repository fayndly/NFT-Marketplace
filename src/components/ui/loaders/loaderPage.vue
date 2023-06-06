<template>
  <mainWrapper class="loader-page">
    <sectionWrapper class="loader-page__section" v-if="isLoading & !isError">
      <span class="loader-page__loader" />
      <p class="loader-page__text">Please wait, the page is loading</p>
    </sectionWrapper>
    <p v-if="isError" class="loader-page__error-text">
      {{ errorText }}
    </p>
  </mainWrapper>
</template>

<script>
export default {
  name: "loaderPage",
  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
    isError: {
      type: Boolean,
    },
    errorText: {
      type: Error,
    },
  },
};
</script>

<style lang="scss" scoped>
.loader-page {
  justify-content: center;
  @include ScreenSizeDesktop {
    min-height: calc(100vh - 100px);
  }
  @include ScreenSizeTablet {
    min-height: calc(100vh - 54px);
  }

  &__section {
    flex-grow: 1;
    &:deep(.section__content) {
      align-items: center;
    }
  }

  &__error-text {
    text-align: center;
    min-height: 100px;
    line-height: 100px;
  }

  $lite: $colorBgTextWhite;
  $brand: $colorActionPurple;
  $size: 48px;

  &__text {
    text-align: center;
    color: $colorBgTextSilverWhite;
  }

  &__loader {
    width: $size;
    height: $size;
    display: inline-block;
    position: relative;
    color: $lite;
    animation: rotation 1s linear infinite;
    &:after,
    &:before {
      content: "";
      position: absolute;
      width: calc($size / 2);
      height: calc($size / 2);
      top: 50%;
      left: 50%;
      transform: scale(0.5) translate(0, 0);
      background-color: $lite;
      border-radius: 50%;
      animation: animloader38 1s infinite ease-in-out;
    }
    &:before {
      background-color: $brand;
      transform: scale(0.5) translate(-$size, -$size);
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animloader38 {
    50% {
      transform: scale(1) translate(-50%, -50%);
    }
  }
}
</style>
