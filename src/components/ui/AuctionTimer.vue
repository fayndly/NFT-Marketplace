<template>
  <div class="auction-timer" :class="{ 'auction-timer--adaptive': isAdaptive }">
    <p class="auction-timer__name">Auction ends in:</p>
    <div class="auction-timer__timer">
      <div class="auction-timer__time">
        <div class="auction-timer__time-value">{{ hours % 24 }}</div>
        <p class="auction-timer__time-name">Hours</p>
      </div>
      <div class="auction-timer__delimiter">:</div>
      <div class="auction-timer__time">
        <div class="auction-timer__time-value">{{ minutes % 60 }}</div>
        <p class="auction-timer__time-name">Minutes</p>
      </div>
      <div class="auction-timer__delimiter">:</div>
      <div class="auction-timer__time">
        <div class="auction-timer__time-value">{{ seconds % 60 }}</div>
        <p class="auction-timer__time-name">Seconds</p>
      </div>
    </div>
    <buttonDefault
      v-if="button"
      class="auction-timer__button"
      type="secondary"
      modifier="filled"
      text="Place Bid"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "AuctionTimer",
  props: {
    button: {
      type: Boolean,
    },
    endTime: {
      type: String,
    },
    isAdaptive: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    // const endDate = new Date("Sep 5, 2024 15:37:25");
    const endDate = new Date(props.endTime);

    setInterval(() => {
      const curDate = new Date();
      const endTime = endDate - curDate;

      seconds.value = parseInt(endTime / 1000);
      minutes.value = parseInt(seconds.value / 60);
      hours.value = parseInt(minutes.value / 60);
      if (seconds.value % 60 < 10) {
        // console.log("< 10");
      }
    }, 1000);

    return { hours, minutes, seconds };
  },
};
</script>

<style lang="scss" scoped>
.auction-timer {
  width: 295px;

  padding: 30px;

  border-radius: 20px;
  background: rgba(59, 59, 59, 0.5);
  backdrop-filter: blur(5px);
  color: #fff;
  box-sizing: border-box;

  user-select: none;

  &__name {
    @include caption;
  }
  &__timer {
    width: 100%;

    display: flex;
    justify-content: space-between;

    margin-top: 10px;
  }
  &__time {
  }
  &__time-value {
    @include h3;
  }
  &__time-name {
    @include caption;
  }
  &__delimiter {
    @include h4;
  }
  &__button {
    margin-top: 30px !important;
    width: 100% !important;
  }
}

.auction-timer--adaptive {
  @include adaptive;
}
</style>
