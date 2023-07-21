<template>
  <div
    class="collection-card"
    :class="{ 'collection-card--adaptive': isAdaptive }"
  >
    <div class="collection-card__preview-nfts">
      <img
        v-lazy="nfts[0]"
        alt="collection-item"
        class="collection-card__nft-item collection-card__nft-big"
        @click="openPage(id)"
      />
      <div class="collection-card__list-nfts">
        <img
          v-lazy="nfts[1]"
          alt="collection-item"
          class="collection-card__nft-item collection-card__nft-small"
          @click="openPage(id)"
        />
        <img
          v-lazy="nfts[2]"
          alt="collection-item"
          class="collection-card__nft-item collection-card__nft-small"
          @click="openPage(id)"
        />
        <p
          class="collection-card__nft-item collection-card__nft-small collection-card__nft-more-couter"
          @click="openPage(id)"
        >
          {{ quality - 3 }}+
        </p>
      </div>
    </div>
    <div class="collection-card__artist-info">
      <p class="collection-card__name" @click="openPage(id)">{{ name }}</p>
      <artistCard
        class="collection-card__artist"
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
  name: "collectionCard",
  props: {
    id: {
      type: String,
    },
    nfts: {
      type: Array,
    },
    artist: {
      type: Object,
    },
    name: {
      type: String,
    },
    quality: {
      type: Number,
    },
    isAdaptive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    openPage(id) {
      this.$router.push({
        name: "Collection",
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.collection-card {
  width: 330px;
  // height: 525px;
  user-select: none;
  &__preview-nfts {
  }
  &__nft-item {
    object-fit: cover;
    object-position: center;
    border-radius: 20px;

    transition: transform $AnimationDuration $AnimationDelay;
    background-color: $colorBgTextSilverBlack;

    cursor: pointer;
  }
  &__nft-big {
    width: 100%;
    aspect-ratio: 1/1;
    height: auto;
  }
  &__list-nfts {
    margin-top: 15px;
    display: flex;
    gap: 15px;
  }
  &__nft-small {
    width: calc(100% / 3 - 10.5px);
    aspect-ratio: 1/1;
    height: auto;
  }
  &__nft-more-couter {
    @include h5;
    background-color: $colorActionPurple;
    font-family: $fontSpaceMono;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__artist-info {
    margin-top: 15px;
  }
  &__name {
    @include h5;
    cursor: pointer;
  }
  &__artist {
    margin-top: 10px;
  }
}

.collection-card--adaptive {
  @include adaptive;
  height: auto;
}

@media (any-hover: hover) {
  .collection-card {
    &__nft-item:hover {
      transform: scale($ScaleValueMin);
    }
  }
}
</style>
