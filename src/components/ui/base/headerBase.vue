<template>
  <header class="header">
    <router-link to="/">
      <img
        :src="getImageFromPublic('/images/content/Logo.png')"
        alt="Logo"
        class="logotype"
      />
    </router-link>

    <nav
      class="navbar"
      :class="{
        'navbar-mobile': getScreenDevice !== 'desktop',
        'navbar-mobile--active': navbarIsOpen,
      }"
    >
      <IconComponent
        class="navbar-icon-close"
        path="Plus"
        @click="navbarIsOpen = false"
      />
      <router-link to="/marketplace" @click="closeNavbar()"
        >Marketplace</router-link
      >
      <router-link to="/rankings" @click="closeNavbar()">Rankings</router-link>
      <router-link to="/connect-wallet" @click="closeNavbar()"
        >Connect a wallet</router-link
      >
      <ButtonDefault
        :type="'secondary'"
        :text="'Sign Up'"
        :icon="'User'"
        @clickButton="this.$router.push('/create-account'), closeNavbar()"
      />
    </nav>
    <IconComponent class="navbar-icon-open" path="List" @click="openNavbar()" />
  </header>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import getImages from "@/mixins/getImages";

export default {
  name: "headerBase",
  mixins: [screenHandler, getImages],
  data() {
    return {
      navbarIsOpen: false,
    };
  },
  methods: {
    openNavbar() {
      this.navbarIsOpen = true;
    },
    closeNavbar() {
      this.navbarIsOpen = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  z-index: 20;
  background-color: $colorBgTextBlack;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 50px;
  @include ScreenSizeTablet {
    padding: 15px 50px;
  }
  @include ScreenSizeMobile {
    padding: 15px 30px;
  }
}

.logotype {
  @include ScreenSizeTablet {
    width: 180px;
    height: 24px;
  }
  @include ScreenSizeMobile {
    width: 180px;
    height: 24px;
  }
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  a {
    padding: 20px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  button {
    padding: 0px 30px;
  }
  &-icon-open {
    width: 24px;
    height: 24px;
  }
  &-icon-close {
    position: absolute;
    top: 24px;
    right: 24px;
    transform: rotate(45deg);
  }
  @include ScreenSizeDesktop {
    &-icon-open {
      display: none;
    }
    &-icon-close {
      display: none;
    }
  }
}

.navbar-mobile {
  width: 100vw;
  // height: 100vh;
  flex-direction: column;

  padding: 40px;
  box-sizing: border-box;

  position: absolute;
  left: 0;
  top: 0;

  background-color: $colorBgTextSilverBlack;
  transition: transform $AnimationDuration $AnimationDelay;
  transform: translateY(-100%);

  &--active {
    transform: translateY(0%);
  }
}
</style>
