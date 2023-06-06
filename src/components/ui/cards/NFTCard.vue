<template>
  <div
    class="nft-card"
    :class="{ 'nft-card--adaptive': isAdaptive }"
    @click="
      $router.push({
        name: 'Nft',
        params: { id },
      })
    "
  >
    <img v-lazy="image" alt="" class="nft-card__image" />
    <div class="nft-card__info">
      <div class="nft-card__artist-info">
        <div class="nft-card__nft-name">{{ name }}</div>
        <artistCard
          class="nft-card__artist"
          size="small"
          :id="artist.id"
          :fill="false"
          :photo="artist.avatar"
          :name="artist.name"
        />
      </div>
      <div class="nft-card__additional-info">
        <div class="nft-card__price">
          <p class="nft-card__title">Price</p>
          <p class="nft-card__value">{{ price.toFixed(2) }} ETH</p>
        </div>
        <div class="nft-card__highest-bid">
          <p class="nft-card__title">Highest Bid</p>
          <p class="nft-card__value">{{ highestBid.toFixed(2) }} wETH</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NFTCard",
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
    price: {
      type: Number,
    },
    highestBid: {
      type: Number,
    },
    isAdaptive: {
      type: Boolean,
      default: false,
    },
    artist: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.nft-card {
  width: 330px;
  // height: 468px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  border-radius: 20px;
  background-color: $colorBgTextSilverBlack;
  transition: transform $AnimationDuration $AnimationDelay;
  cursor: pointer;
  user-select: none;

  &__image {
    flex-grow: 1;
    width: 330px;
    height: 300px;
    object-fit: cover;
    object-position: center;
  }
  &__info {
    padding: 20px 30px 25px 30px;
    box-sizing: border-box;
  }
  &__artist-info {
  }
  &__additional-info {
    display: flex;
    justify-content: space-between;

    margin-top: 25px;
  }
  &__nft-name {
    @include h5;
  }
  &__artist {
    margin-top: 5px;

    padding: 0;
  }
  &__price,
  &__highest-bid {
    display: flex;
    flex-direction: column;
  }
  &__highest-bid {
    align-items: end;
  }
  &__title {
    @include caption;
    color: $colorBgTextSilverWhite;
  }
  &__value {
    margin-top: 8px;

    font-family: $fontSpaceMono;
    @include base;
  }

  &--adaptive {
    @include adaptive;
    .nft-card__image {
      width: 100%;
      height: 100%;
    }
  }
}

@media (any-hover: hover) {
  .nft-card:hover {
    transform: scale($ScaleValueMin);
  }
}
</style>
