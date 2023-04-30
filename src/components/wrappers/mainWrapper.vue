<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "mainWrapper",
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;

  display: flex;
  flex-direction: column;

  flex-grow: 1;
  transition: all 0.3s ease-in-out;

  @include ScreenSizePC {
    margin-top: 100px;
  }
  @include ScreenSizeLaptop {
    margin-top: 54px;
  }
}
</style>
