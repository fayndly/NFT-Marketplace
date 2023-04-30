<template>
  <ul class="additional-info">
    <li class="additional-info__item">
      <div class="additional-info__item-value">240k+</div>
      <div class="additional-info__item-head">Total Sale</div>
    </li>
    <li class="additional-info__item">
      <div class="additional-info__item-value">100k+</div>
      <div class="additional-info__item-head">Auctions</div>
    </li>
    <li class="additional-info__item">
      <div class="additional-info__item-value">240k+</div>
      <div class="additional-info__item-head">Artists</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AdditionalInfo",
};
</script>

<style lang="scss" scoped>
.additional-info {
  gap: 30px;
  &__item {
  }
  &__item-value {
    @include h4;
  }
  &__item-head {
    @include body-text;
  }
  @include ScreenSizeLaptop {
    justify-content: space-between;
    &__item-head {
      @include base;
    }
    &__item-value {
      @include h5;
      font-weight: 700;
    }
  }
}
</style>
