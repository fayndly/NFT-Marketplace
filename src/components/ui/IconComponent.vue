<template>
  <inline-svg
    ref="qwe"
    class="svg-icon"
    :class="getModificatorName"
    :src="getPathIcon"
  ></inline-svg>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  name: "IconComponent",
  components: { InlineSvg },
  props: {
    path: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  computed: {
    getPathIcon() {
      return require(`@/assets/svg/icons/${this.path}.svg`);
    },
    getModificatorName() {
      return `svg-icon--${this.color}`;
    },
  },
};
</script>

<style lang="scss">
svg.svg-icon--white {
  path {
    fill: $colorBgTextWhite;
  }
}

svg.svg-icon--white-silver {
  path {
    fill: #d8d8d8;
  }
}

svg.svg-icon--silver {
  path {
    fill: $colorBgTextSilverWhite;
  }
}

svg.svg-icon--purple {
  path {
    fill: $colorActionPurple;
  }
}
</style>
