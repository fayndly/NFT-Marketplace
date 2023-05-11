<template>
  <ul
    class="additional-info"
    :class="{ 'additional-info--adaptive': isAdaptive }"
  >
    <li class="additional-info__item">
      <div class="additional-info__item-value">{{ stats[0]["value"] }}</div>
      <div class="additional-info__item-head">{{ stats[0]["head"] }}</div>
    </li>
    <li class="additional-info__item">
      <div class="additional-info__item-value">{{ stats[1]["value"] }}</div>
      <div class="additional-info__item-head">{{ stats[1]["head"] }}</div>
    </li>
    <li class="additional-info__item">
      <div class="additional-info__item-value">{{ stats[2]["value"] }}</div>
      <div class="additional-info__item-head">{{ stats[2]["head"] }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AdditionalInfo",
  props: {
    isAdaptive: {
      type: Boolean,
      default: false,
    },
    stats: {
      type: Array,
      default: () => [
        { head: "Total Sale", value: "240k+" },
        { head: "Auctions", value: "100k+" },
        { head: "Artists", value: "240k+" },
      ],
    },
  },
};
</script>

<style lang="scss" scoped>
.additional-info {
  justify-content: space-between;
  max-width: 510px;
  &__item {
    width: 100%;
    max-width: 150px;
  }
  &__item-value {
    @include h4;
  }
  &__item-head {
    @include body-text;
  }
  @include ScreenSizeTablet {
    &__item-head {
      @include base;
    }
    &__item-value {
      @include h5;
      font-weight: 700;
    }
  }

  &--adaptive {
    .additional-info__item {
      max-width: fit-content;
    }
    @include adaptive;
  }
}
</style>
