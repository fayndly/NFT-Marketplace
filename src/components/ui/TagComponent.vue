<template>
  <p class="tag">
    {{ name }}
  </p>
</template>

<script>
export default {
  name: "TagComponent",
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.tag {
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
  .tag:hover {
    transform: scale($ScaleValueMin);
  }
}
</style>
