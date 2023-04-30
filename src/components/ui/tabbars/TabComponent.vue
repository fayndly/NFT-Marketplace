<template>
  <div class="tab" @click="clickTab">
    <p class="tab__text">{{ text }}</p>
    <p class="tab__counter" v-if="counter">{{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: "TabComponent",
  props: {
    text: {
      type: String,
    },
    counter: {
      type: Number,
      default: 11,
    },
  },
  methods: {
    clickTab() {
      this.$emit("clickTab", this.text);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;

  flex-grow: 1;
  gap: 16px;

  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  @include h5;

  cursor: pointer;

  &__text {
    color: $colorBgTextSilverWhite;
    transition: inherit;
  }
  &__counter {
    transition: inherit;
    @include base;
    font-family: $fontSpaceMono;
    padding: 5px 10px;
    border-radius: 20px;
    background-color: $colorBgTextSilverBlack;
  }

  &:hover {
    .tab__text {
      color: #fff;
    }
    border-bottom-color: $colorBgTextSilverBlack;
  }
  &--active {
    .tab__text {
      color: #fff;
    }
    .tab__counter {
      background-color: $colorBgTextSilverWhite;
    }
    border-bottom-color: $colorBgTextSilverWhite;
  }
  &--active:hover {
    border-bottom-color: $colorBgTextSilverWhite;
  }
}
</style>
