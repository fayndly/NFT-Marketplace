<template>
  <button class="button-wallet">
    <img :src="getPathIcon" class="button-wallet__icon" />
    <p class="button-wallet__text">
      {{ text }}
    </p>
  </button>
</template>

<script>
export default {
  name: "ButtonWallet",
  props: {
    icon: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  computed: {
    getPathIcon() {
      return require("@/assets/svg/wallets/" + this.icon + ".svg");
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wallet {
  width: 320px;
  height: 72px;
  border: 1px solid #a259ff;
  background-color: $colorBgTextSilverBlack;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0px 20px 0px 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &__icon {
    width: 40px;
    height: 40px;
  }
  &__text {
    @include h5;
    font-weight: 600;
  }
}

.button-wallet:hover {
  transform: scale(0.95);
}
</style>
