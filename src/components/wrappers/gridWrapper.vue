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
  align-items: center;
  justify-content: center;
  gap: 30px;
}
</style>
