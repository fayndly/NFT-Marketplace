<template>
  <sectionWrapper class="loader-section" v-if="isLoading & !isError">
    <span class="loader-section__loader" />
  </sectionWrapper>
  <p v-if="isError" class="loader-section__error-text">
    {{ errorText }}
  </p>
</template>

<script>
export default {
  name: "loaderSection",
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
.loader-section {
  flex-grow: 1;
  &:deep(.section__content) {
    align-items: center;
  }

  $lite: $colorBgTextWhite;
  $brand: $colorActionPurple;
  $size: 48px;

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

  &__error-text {
    text-align: center;
    min-height: 100px;
    line-height: 100px;
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
