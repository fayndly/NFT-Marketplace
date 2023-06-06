<template>
  <img
    v-lazy="image"
    :alt="image"
    class="avatar-wrapper"
    :class="`avatar-wrapper--${this.size}`"
  />
</template>

<script>
export default {
  name: "avatarWrapper",
  props: {
    image: {
      type: String,
    },
    size: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.avatar-wrapper {
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  display: block;

  &--big {
    width: 120px;
    height: 120px;
  }

  &--medium {
    width: 60px;
    height: 60px;
  }

  &--small {
    width: 24px;
    height: 24px;
  }
}
</style>
