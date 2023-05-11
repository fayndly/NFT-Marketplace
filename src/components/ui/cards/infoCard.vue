<template>
  <div
    class="info-card"
    :class="{
      'info-card-tablet': sizeCard == 'tablet',
      'info-card-adaptive': sizeCard == 'tabletMini' || sizeCard == 'mobile',
    }"
  >
    <img :src="getIconInfo" alt="" class="info-card__icon" />
    <div class="info-card__details">
      <h5 class="info-card__header">{{ header }}</h5>
      <p class="info-card__text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "infoCard",
  props: {
    icon: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    sizeCard: {
      type: String,
    },
  },
  computed: {
    getIconInfo() {
      return require(`@/assets/svg/content/${this.icon}`);
    },
    getClass() {
      return "info-card-" + this.sizeCard;
    },
  },
};
</script>

<style lang="scss" scoped>
.info-card {
  width: 330px;
  // height: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 30px;
  padding-top: 10px;

  background-color: $colorBgTextSilverBlack;
  border-radius: 20px;
  box-sizing: border-box;

  &__icon {
  }
  &__details {
  }
  &__header {
    text-align: center;
  }
  &__text {
    margin-top: 10px;
    text-align: center;
    @include base;
  }

  // @include ScreenSizeLaptop {
  //   width: 198px;
  //   padding: 10px 20px 30px 20px;
  //   &__icon {
  //     width: 160px;
  //     height: 160px;
  //   }
  //   &__header {
  //     font-weight: 600;
  //     font-size: 16px;
  //     line-height: 140%;
  //   }
  //   &__text {
  //     font-weight: 400;
  //     font-size: 12px;
  //     line-height: 140%;
  //   }
  // }

  // @include ScreenSizeMobile {
  //   // width: 315px;
  //   width: 100%;
  //   flex-direction: row;
  //   padding: 20px;
  //   &__icon {
  //     width: 100px;
  //     height: 100px;
  //   }
  //   &__text {
  //     text-align: start;
  //   }
  // }
}

.info-card-tablet {
  width: 210px;
  padding: 10px 20px 30px 20px;
  .info-card__icon {
    width: 160px;
    height: 160px;
  }
  .info-card__header {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
  }
  .info-card__text {
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
  }
}

.info-card-adaptive {
  @include adaptive;
  flex-direction: row;
  padding: 20px;
  .info-card__icon {
    width: 100px;
    height: 100px;
  }
  .info-card__header {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
  }
  .info-card__text {
    text-align: start;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;
  }
}
</style>
