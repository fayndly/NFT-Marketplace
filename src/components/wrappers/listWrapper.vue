<template>
  <div class="list-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "listWrapper",
};
</script>

<style lang="scss" scoped>
.list-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
