<template>
  <div
    class="collection-card"
    :class="{ 'collection-card--adaptive': isAdaptive }"
  >
    <div class="collection-card__preview-nfts">
      <img
        :src="nfts[0]['image']"
        alt="collection-item"
        class="collection-card__nft-item collection-card__nft-big"
        @click="openPage(nfts[0]['id'])"
      />
      <div class="collection-card__list-nfts">
        <img
          :src="nfts[1]['image']"
          alt="collection-item"
          class="collection-card__nft-item collection-card__nft-small"
          @click="openPage(nfts[1]['id'])"
        />
        <img
          :src="nfts[2]['image']"
          alt="collection-item"
          class="collection-card__nft-item collection-card__nft-small"
          @click="openPage(nfts[2]['id'])"
        />
        <img
          v-if="nfts.length === 4"
          :src="nfts[3]['image']"
          alt="collection-item"
          class="collection-card__nft-item collection-card__nft-small"
          @click="openPage(nfts[3]['id'])"
        />
        <p
          class="collection-card__nft-item collection-card__nft-small collection-card__nft-more-couter"
          @click="openPage(nfts[0]['id'])"
          v-if="nfts.length > 4"
        >
          {{ nfts.length - 3 }}+
        </p>
      </div>
    </div>
    <div class="collection-card__artist-info">
      <p class="collection-card__name" @click="openPage(1234)">{{ name }}</p>
      <artistCard
        size="small"
        class="collection-card__artist"
        :fill="false"
        :name="artist.name"
        :photo="artist.photo"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "collectionCard",
  props: {
    nfts: {
      type: Object,
    },
    artist: {
      type: Object,
    },
    name: {
      type: String,
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
  height: 525px;
  user-select: none;
  &__preview-nfts {
  }
  &__nft-item {
    object-fit: cover;
    object-position: center;
    border-radius: 20px;

    transition: transform $AnimationDuration $AnimationDelay;

    cursor: pointer;
  }
  &__nft-big {
    // width: 330px;
    // height: 330px;
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
    // width: 100px;
    // height: 100px;
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
