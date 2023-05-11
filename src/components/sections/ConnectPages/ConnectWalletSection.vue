<template>
  <section class="connect-wallet">
    <img
      :src="getImageFromPublic('/images/content/ufo.webp')"
      alt=""
      class="connect-wallet__placeholder"
    />
    <div class="connect-wallet__wrapper">
      <div class="connect-wallet__head">
        <h2 class="connect-wallet__headline">Connect wallet</h2>
        <p class="connect-wallet__subheadline">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </p>
      </div>
      <div class="connect-wallet__buttons">
        <ButtonWallet
          icon="Metamask"
          text="Metamask"
          :isAdaptive="getScreenSize <= 834"
        />
        <ButtonWallet
          icon="WalletConnect"
          text="Wallet Connect"
          :isAdaptive="getScreenSize <= 834"
        />
        <ButtonWallet
          icon="Coinbase"
          text="Coinbase"
          :isAdaptive="getScreenSize <= 834"
        />
      </div>
    </div>
  </section>
</template>

<script>
import getImages from "@/mixins/getImages";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "ConnectWalletSection",
  mixins: [getImages, screenHandler],
};
</script>

<style lang="scss" scoped>
.connect-wallet {
  width: 100%;
  height: 100%;
  display: flex;
  gap: 60px;
  align-items: stretch;
  &__placeholder {
    object-fit: cover;
    object-position: center;
    width: 50%;
  }
  &__wrapper {
    padding: 40px 30px;
    padding-left: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
  }
  &__head {
  }
  &__headline {
  }
  &__subheadline {
    margin-top: 20px;
    @include body-text;
    max-width: 460px;
  }
  &__buttons {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  @include ScreenSizeTablet {
    &__head {
      @include base;
    }
    &__headline {
      @include h3;
    }
  }
  @include ScreenSizeTabletMini {
    gap: 30px;
    &__wrapper {
      max-width: $maxWhidthItem;
    }
  }
  @include ScreenSizeMobile {
    gap: 30px;
    flex-direction: column;
    &__wrapper {
      max-width: $maxWhidthItem;
      align-self: center;
      padding-top: 0;
      padding-left: 30px;
    }
    &__placeholder {
      width: 100%;
      height: 230px;
    }
  }
}
</style>
