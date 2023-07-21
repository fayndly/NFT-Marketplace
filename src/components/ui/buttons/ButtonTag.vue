<template>
  <button
    class="button-tag"
    @click="$router.push({ name: 'Marketplace', query: { searchValue: name } })"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  name: "ButtonTag",
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.button-tag {
  width: fit-content;

  padding: 12px 30px;

  text-transform: uppercase;
  border-radius: 20px;
  background-color: $colorBgTextSilverBlack;
  @include base;
  transition: transform $AnimationDuration $AnimationDelay;

  cursor: pointer;
  user-select: none;
}

@media (any-hover: hover) {
  .button-tag:hover {
    transform: scale($ScaleValueMin);
  }
}
</style>
