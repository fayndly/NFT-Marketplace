<template>
  <div class="grid-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "gridWrapper",
};
</script>

<style lang="scss" scoped>
.grid-wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: normal;
  gap: 30px;

  @include ScreenSizeTabletMini {
    justify-content: center;
  }
  @include ScreenSizeMobile {
    justify-content: center;
  }
}
</style>
