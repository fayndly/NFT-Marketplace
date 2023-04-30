<template>
  <div class="category-card" @click="this.$router.push('marketplace')">
    <div class="category-card__photo">
      <div class="category-card__icon-wrapper">
        <img
          class="category-card__icon"
          :src="getIconCategory"
          alt="category-icon"
        />
      </div>
      <img class="category-card__image" :src="image" alt="category-image" />
    </div>
    <div class="category-card__name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "categoryCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    getIconCategory() {
      return require(`@/assets/svg/icons/category/${this.icon}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.category-card {
  width: 240px;
  // height: 100%;
  // height: 315px;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;

  border-radius: 20px;
  background-color: $colorBgTextSilverBlack;

  user-select: none;
  cursor: pointer;
  &__photo {
    // flex-grow: 1;
    position: relative;
  }
  &__icon-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7.5px);
    transition: backdrop-filter $AnimationDuration $AnimationDelay;
  }
  &__icon {
    width: 100px;
    height: 100px;

    display: block;

    transition: transform $AnimationDuration $AnimationDelay;
  }
  &__image {
    width: 100%;
    height: 100%;

    display: block;

    object-fit: cover;
    object-position: center;
  }
  &__name {
    width: 100%;

    box-sizing: border-box;

    @include h5;
    color: $colorBgTextWhite;
    padding: 30px 20px 30px 25px;
  }

  @include ScreenSizeLaptop {
    width: 142px;
    &__name {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;

      padding: 20px;
      padding-bottom: 25px;
    }
    &__icon {
      width: 80px;
      height: 80px;
    }
  }
  @include ScreenSizeMobile {
    width: calc(100% / 2 - 10px);
  }
}

@media (any-hover: hover) {
  .category-card:hover {
    .category-card__icon-wrapper {
      backdrop-filter: blur(0px);
    }
    .category-card__icon {
      transform: scale(1.1);
    }
  }
}
</style>
