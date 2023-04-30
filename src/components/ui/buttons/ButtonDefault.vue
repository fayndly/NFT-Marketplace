<template>
  <button class="button" :class="getButtonClassName" @click="clickButton">
    <IconComponent :path="icon" class="button__icon" v-if="icon" />
    <div class="button__text" v-if="text">
      {{ text }}
    </div>
  </button>
</template>

<script>
export default {
  name: "ButtonDefault",
  props: {
    type: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "tertiary"].includes(value);
      },
    },
    modifier: {
      type: String,
      default: "filled",
      validator: (value) => {
        return ["filled", "outlined"].includes(value);
      },
    },
    icon: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  computed: {
    getButtonClassName() {
      return [`button-${this.type}`, `button-${this.type}--${this.modifier}`];
    },
  },
  methods: {
    clickButton() {
      this.$emit("clickButton");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  width: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 12px;
  padding: 0 50px;

  border-radius: 20px;
  transition: transform $AnimationDuration $AnimationDelay;

  cursor: pointer;
  user-select: none;
}

.button:hover {
  transform: scale($ScaleValueMin);
}

.button-primary {
  height: 72px;

  .button__icon {
    width: 20px;
    height: 20px;

    fill: $colorBgTextWhite;
  }
  .button__text {
    @include h5;
    color: $colorBgTextWhite;
  }

  &--filled {
    background-color: $colorActionPurple;
  }
  &--outlined {
    border: 2px solid $colorActionPurple;
  }
}

.button-secondary {
  height: 60px;

  .button__icon {
    width: 20px;
    height: 20px;
    fill: $colorActionPurple;
  }
  .button__text {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: $colorBgTextWhite;
  }

  &--filled {
    background-color: $colorActionPurple;
  }
  &--outlined {
    border: 2px solid $colorActionPurple;
  }
}

.button-tertiary {
  height: 46px;

  .button__icon {
    width: 20px;
    height: 20px;
    fill: $colorBgTextWhite;
  }
  .button__text {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: $colorBgTextWhite;
  }

  &--filled {
    background-color: $colorActionPurple;
  }
  &--outlined {
    border: 2px solid $colorActionPurple;
  }
}
</style>
