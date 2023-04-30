<template>
  <section class="connect-wallet">
    <img
      src="/images/content/ufo.webp"
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
        <ButtonWallet icon="Metamask" text="Metamask" />
        <ButtonWallet icon="WalletConnect" text="Wallet Connect" />
        <ButtonWallet icon="Coinbase" text="Coinbase" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ConnectWalletSection",
  data() {
    return {};
  },
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
  @include ScreenSizeLaptop {
    &__head {
      @include base;
    }
    &__headline {
      @include h3;
    }
  }
  @include ScreenSizeMobile {
    flex-direction: column;
    &__wrapper {
      // max-width: 315px;
      align-self: center;
      padding-top: 0;
      padding-left: 30px;
    }
    &__placeholder {
      width: 100%;
      height: 230px;
    }
    &__buttons {
      button {
        width: 100%;
      }
    }
  }
}
</style>
