<template>
  <form class="subscribe-form" v-if="!isMobile">
    <DefaultInput
      InputType="email"
      placeholder="Enter your email here"
      :button="{ icon: 'EnvelopeSimple', text: 'Subscribe' }"
    />
  </form>
  <form class="subscribe-form-mobile" v-else>
    <DefaultInput
      class="subscribe-form-mobile__input"
      InputType="email"
      placeholder="Enter Your Email Address"
    />
    <ButtonDefault
      class="subscribe-form-mobile__button"
      type="tertiary"
      modifier="filled"
      icon="EnvelopeSimple"
      text="Subscribe"
    />
  </form>
</template>

<script>
export default {
  name: "SubscribeForm",
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe-form-mobile {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__input {
    width: 100%;
    height: 46px;
  }
  &__button {
    width: 100% !important;
    height: 46px;
  }
}
</style>
