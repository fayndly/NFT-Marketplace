<template>
  <router-link :to="getPathTo" class="tab">
    <p class="tab__text">{{ name }}</p>
    <p class="tab__counter" v-if="haveCounter">{{ counter }}</p>
  </router-link>
</template>

<script>
export default {
  name: "TabComponent",
  props: {
    nameRouteTo: {
      type: String,
      default: "/",
    },
    name: {
      type: String,
      default: "text",
    },
    haveCounter: {
      type: Boolean,
      default: true,
    },
    counter: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    getPathTo() {
      let pathLink;
      if (this.$route.params["id"]) {
        pathLink = {
          name: this.nameRouteTo,
          params: { id: this.$route.params["id"] },
        };
      } else {
        pathLink = { name: this.nameRouteTo };
      }
      return pathLink;
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

  @include ScreenSizeTablet {
    @include base;
  }

  @include ScreenSizeMobile {
    &__counter {
      display: none;
    }
  }
}

.router-link-active {
  .tab__text {
    color: #fff;
  }
  .tab__counter {
    background-color: $colorBgTextSilverWhite;
  }
  border-bottom-color: $colorBgTextSilverWhite;

  &:hover {
    border-bottom-color: $colorBgTextSilverWhite;
  }
}
</style>
