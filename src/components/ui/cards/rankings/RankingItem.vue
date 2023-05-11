<template>
  <div class="ranking-item" @click="openPage('Artist')">
    <div class="ranking-item__rank-artist">
      <p class="ranking-item__rank">{{ number }}</p>
      <div class="ranking-item__artist">
        <avatarWrapper
          class="ranking-item__artist-photo"
          :size="getSizeAvatar"
          :image="artist.photo"
        />
        <p class="ranking-item__artist-name">{{ artist.name }}</p>
      </div>
    </div>
    <div class="ranking-item__stats">
      <p class="ranking-item__stats-item ranking-item__stats-change">
        +{{ change }}%
      </p>
      <p class="ranking-item__stats-item ranking-item__stats-sold">
        {{ sold }}
      </p>
      <p class="ranking-item__stats-item ranking-item__stats-volume">
        {{ volume }} ETH
      </p>
    </div>
  </div>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "RankingItem",
  props: {
    number: {
      type: Number,
    },
    artist: {
      type: Object,
    },
    change: {
      type: Number,
    },
    sold: {
      type: Number,
    },
    volume: {
      type: Number,
    },
  },
  mixins: [screenHandler],
  computed: {
    getSizeAvatar() {
      let size;
      if (this.getScreenSize <= 1200) {
        size = "small";
      } else {
        size = "medium";
      }
      return size;
    },
  },
  methods: {
    openPage(name) {
      this.$router.push({
        name: name,
        params: { id: 123 },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ranking-item {
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 12px 20px;
  background-color: $colorBgTextSilverBlack;

  &__rank,
  &__stats-item {
    font-family: $fontSpaceMono;
    @include base;
    color: #fff;
  }

  &__rank-artist {
    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__rank {
    width: 30px;
    height: 30px;
    display: flex;

    background-color: $colorBgTextBlack;
    border-radius: 50%;

    align-items: center;
    justify-content: center;
    color: $colorBgTextSilverWhite;
  }
  &__artist {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  &__artist-photo {
  }
  &__artist-name {
    @include h5;
  }

  &__stats {
    display: flex;
  }
  &__stats-item {
    width: 160px;
  }

  &__stats-change {
    color: #00ac4f;
  }
  &__stats-sold {
  }
  &__stats-volume {
  }

  @include ScreenSizeDesktop {
  }
  @include ScreenSizeTablet {
    &__rank {
      width: 24px;
      height: 24px;
      background-color: transparent;
    }
    &__stats-sold {
      display: none;
    }
  }
  @include ScreenSizeTabletMini {
    &__artist-name {
      @include base;
    }
    &__stats-change {
      display: none;
    }
    &__stats-item {
      @include caption;
    }
  }
  @include ScreenSizeMobile {
    &__artist-name {
      @include base;
    }
    &__stats-item {
      @include caption;
    }
    &__rank {
      @include caption;
    }
    &__stats-change {
      display: none;
    }
    &__stats-volume {
      text-align: end;
      width: auto;
    }
  }
}
</style>
