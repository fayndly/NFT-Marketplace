<template>
  <div
    class="highlighted-nft"
    :class="{ 'highlighted-nft--adaptive': isAdaptive }"
    @click="
      $router.push({
        name: 'Nft',
        params: { id },
      })
    "
  >
    <img v-lazy="image" alt="" class="highlighted-nft__image" />
    <div class="highlighted-nft__info">
      <p class="highlighted-nft__name">{{ name }}</p>
      <artistCard
        size="small"
        :id="artist.id"
        :fill="false"
        :photo="artist.avatar"
        :name="artist.name"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "highlightedNFT",
  props: {
    id: {
      type: String,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    artist: {
      type: Object,
    },
    isAdaptive: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.highlighted-nft {
  width: 510px;
  height: 510px;
  background-color: $colorBgTextSilverBlack;
  border-radius: 20px;
  overflow: hidden;

  &__image {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 22px 20px;
  }
  &__name {
    @include h5;
  }

  @include ScreenSizeTablet {
    width: 330px;
    height: fit-content;
    &__image {
      width: 100%;
      height: 280px;
    }
  }

  &--adaptive {
    @include adaptive;
    width: 100%;
    .highlighted-nft__image {
      width: 100%;
      height: 330px;
    }
  }
}
</style>
