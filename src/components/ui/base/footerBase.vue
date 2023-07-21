<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__top">
        <div
          class="footer__column footer-column footer-column--marketplace-info"
        >
          <div class="footer-column__head">
            <router-link to="/">
              <img
                class="footer__logo"
                :src="getImageFromPublic('/images/content/Logo.png')"
                alt="Logo"
              />
            </router-link>
          </div>
          <div class="footer-column__content">
            <p class="footer-column__text">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <div class="footer-column__counity-info">
              <p class="footer-column__text">Join our community</p>
              <div class="footer-column__counity-info-icons">
                <a target="_blank" href="https://discord.com/">
                  <IconComponent
                    color="silver"
                    class="footer-column__counity-info-icon"
                    path="DiscordLogo"
                  />
                </a>
                <a target="_blank" href="https://www.youtube.com/">
                  <IconComponent
                    color="silver"
                    class="footer-column__counity-info-icon"
                    path="YoutubeLogo"
                  />
                </a>
                <a target="_blank" href="https://twitter.com/">
                  <IconComponent
                    color="silver"
                    class="footer-column__counity-info-icon"
                    path="TwitterLogo"
                  />
                </a>
                <a target="_blank" href="https://www.instagram.com/">
                  <IconComponent
                    color="silver"
                    class="footer-column__counity-info-icon"
                    path="InstagramLogo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__column footer-column footer-column--explore">
          <div class="footer-column__head">Explore</div>
          <div class="footer-column__content">
            <router-link to="/marketplace">Marketplace</router-link>
            <router-link to="/rankings">Rankings</router-link>
            <router-link to="/connect-wallet">Connect a wallet</router-link>
          </div>
        </div>
        <div class="footer__column footer-column footer-column--subscribe">
          <div class="footer-column__head">Join our weekly digest</div>
          <div class="footer-column__content">
            <p class="footer-column__text">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <SubscribeForm :isMobile="isAdaptive" />
          </div>
        </div>
      </div>
      <div class="footer__bottom">
        <p class="footer__copyright">Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import getImages from "@/mixins/getImages";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "footerBase",
  mixins: [screenHandler, getImages],
  computed: {
    isAdaptive() {
      if (
        this.getScreenDevice == "desktop" ||
        this.getScreenDevice == "tablet"
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  position: relative;
  padding: 40px;
  gap: 30px;

  background-color: $colorBgTextSilverBlack;
  border-top: 2px solid $colorBgTextBlack;

  &__logo {
    width: 100%;
    max-width: 245px;
  }

  &__content {
    width: 1050px;
  }
  &__top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__bottom {
    margin-top: 50px;
    width: 100%;
    border-top: 1px solid $colorBgTextSilverWhite;
  }
  &__copyright {
    margin-top: 20px;
    @include caption;
    color: #cccccc;
  }
  @include ScreenSizeTablet {
    &__top {
      flex-direction: column;
      gap: 30px;
    }
    &__content {
      width: 690px;
    }
  }
  @include ScreenSizeMobile {
    &__top {
      flex-direction: column;
      gap: 30px;
    }
    &__content {
      width: 100%;
    }
  }
}

.footer-column {
  &--marketplace-info {
    width: 325px;

    .footer-column__text {
      max-width: 238px;
    }
  }
  &--explore {
    width: 240px;
  }
  &--subscribe {
    width: fit-content;
    .footer-column__text {
      max-width: 330px;
    }
  }

  &__head {
    @include h5;
    color: $colorBgTextWhite;
    font-family: $fontSpaceMono;
  }

  &__content {
    @include base;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #cccccc;
  }

  &__text {
  }
  &__counity-info {
  }

  &__counity-info-icons {
    margin-top: 15px;
    display: flex;
    gap: 10px;
  }

  &__subscribe-form {
    max-width: 420px;
  }
  @include ScreenSizeTablet {
    width: 100%;

    &--marketplace-info {
      width: 100%;

      .footer-column__text {
        max-width: 100%;
      }
    }
    &--explore {
      width: 100%;
    }
    &--subscribe {
      width: fit-content;
      .footer-column__text {
        max-width: 100%;
      }
    }
  }
  @include ScreenSizeMobile {
    &__text {
      max-width: max-content;
    }
    &__subscribe-form {
      width: 100%;
    }
  }
}
</style>
