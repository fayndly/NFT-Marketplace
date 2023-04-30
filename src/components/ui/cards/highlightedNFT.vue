<template>
  <div class="highlighted-nft">
    <img :src="image" alt="" class="highlighted-nft__image" />
    <div class="highlighted-nft__info">
      <p class="highlighted-nft__name">{{ name }}</p>
      <artistCard class="highlighted-nft__artist" :size="'small'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "highlightedNFT",
  props: {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    artist: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.highlighted-nft {
  width: 510px;

  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  background-color: $colorBgTextSilverBlack;

  &__image {
    display: block;
    flex-grow: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &__info {
    padding: 20px;
  }
  &__name {
    @include h5;
  }
  &__artist {
    margin-top: 10px;
    padding: 0;
  }

  @include ScreenSizeLaptop {
    width: 330px;
    // height: 330px;
  }
  @include ScreenSizeMobile {
    width: 100%;
    // height: 330px;
  }
}
</style>
