<template>
  <div class="header-section">
    <div class="header-section__description">
      <h3 class="header-section__header" v-if="headerName">
        {{ headerName }}
      </h3>
      <p class="header-section__text" v-if="headerText">
        {{ headerText }}
      </p>
    </div>
    <slot name="button"></slot>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  props: {
    headerName: {
      type: String,
    },
    headerText: {
      type: String,
    },
    button: {
      icon: {
        type: String,
      },
      text: {
        type: String,
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.header-section {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 100px;
  &__description {
    display: flex;
    flex-direction: column;
  }
  &__header {
  }
  &__text {
    margin-top: 10px;
    @include body-text;
  }
  & :deep(.button) {
    @include ScreenSizeMobile {
      display: none;
    }
  }
  @include ScreenSizeTablet {
    &__header {
      @include h4;
    }
    &__text {
      @include base;
    }
  }
}
</style>
