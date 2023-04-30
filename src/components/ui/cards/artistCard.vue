<template>
  <div
    class="artist-card"
    :class="[`artist-card--${size}`, { 'artist-card--none-fill': !fill }]"
    @click="openPage('Artist')"
  >
    <avatarWrapper
      class="artist-card__avatar"
      :size="getSizeAvatarForWrapper"
      :image="photo"
    />
    <div class="artist-card__info">
      <p class="artist-card__name">{{ name }}</p>
      <p class="artist-card__additional-info total-sales">
        <span class="total-sales__item">Total Sales: </span>
        <span class="total-sales__value">{{ total_sales }} ETH</span>
      </p>
    </div>
    <p class="artist-card__ranking-number">{{ number }}</p>
  </div>
</template>

<script>
export default {
  name: "artistCard",
  props: {
    size: {
      type: String,
      default: "default",
    },
    fill: {
      type: Boolean,
      default: true,
    },
    photo: {
      type: String,
      default:
        "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
    },
    name: {
      type: String,
      default: "John Harlow",
    },
    total_sales: {
      type: Number,
    },
    number: {
      type: Number,
    },
    id: {
      type: Number,
    },
  },
  computed: {
    getSizeAvatarForWrapper() {
      let size;
      if (this.size) {
        if (this.size === "default") {
          size = "big";
        } else if (this.size === "big") {
          size = "medium";
        } else if (this.size === "medium" || this.size === "small") {
          size = "small";
        }
      } else {
        size = "small";
      }
      return size;
    },
  },
  methods: {
    openPage(name) {
      this.$router.push({
        name: name,
        params: { id: this.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.artist-card {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  padding: 20px;
  box-sizing: border-box;

  border-radius: 20px;
  background-color: $colorBgTextSilverBlack;
  transition: all $AnimationDuration $AnimationDelay;

  user-select: none;
  cursor: pointer;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5px;
  }

  &__name {
    @include h5;
  }

  &__ranking-number {
    width: 30px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 18px;
    left: 20px;

    background-color: $colorBgTextBlack;
    border-radius: 50%;
    color: $colorBgTextSilverWhite;
  }
}

.total-sales {
  @include base;

  &__item {
    color: $colorBgTextSilverWhite;
  }
  &__value {
    font-family: $fontSpaceMono;
  }
}

.artist-card--none-fill {
  background-color: transparent;
  padding: 0;
}
.artist-card--default {
  width: 240px;
  min-height: 240px;

  gap: 20px;
}

.artist-card--big {
  flex-direction: row;
  width: fit-content;
  min-height: auto;
  gap: 20px;
  width: 330px;

  .artist-card__name {
    align-self: baseline;
  }

  .artist-card__ranking-number {
    top: 13px;
    left: 13px;
  }
}

.artist-card--medium {
  flex-direction: row;
  width: fit-content;
  min-height: auto;

  gap: 12px;

  .artist-card__name {
    align-self: baseline;
  }
  .artist-card__ranking-number {
    display: none;
  }

  .artist-card__additional-info {
    display: none;
  }
}

.artist-card--small {
  flex-direction: row;
  width: fit-content;
  min-height: auto;

  gap: 12px;

  .artist-card__name {
    align-self: baseline;
  }
  .artist-card__ranking-number {
    display: none;
  }

  .artist-card__additional-info {
    display: none;
  }

  .artist-card__name {
    @include base;
  }
}

@media (any-hover: hover) {
  .artist-card {
    &--default:hover,
    &--big:hover {
      transform: scale($ScaleValueMin);
    }
  }
}
</style>
