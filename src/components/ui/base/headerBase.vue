<template>
  <header class="header">
    <router-link to="/">
      <img src="/images/content/Logo.png" alt="Logo" class="logotype" />
    </router-link>

    <nav
      class="navbar"
      :class="{
        'navbar-mobile': isMobile,
        'navbar-mobile--active': navbarIsOpen,
      }"
    >
      <IconComponent
        class="navbar-icon-close"
        path="Plus"
        @click="navbarIsOpen = false"
      />
      <router-link to="/marketplace">Marketplace</router-link>
      <router-link to="/rankings">Rankings</router-link>
      <router-link to="/connect-wallet">Connect a wallet</router-link>
      <ButtonDefault
        :type="'secondary'"
        :text="'Sign Up'"
        :icon="'User'"
        @clickButton="this.$router.push('/create-account')"
      />
    </nav>
    <IconComponent
      class="navbar-icon-open"
      path="List"
      @click="navbarIsOpen = true"
    />
  </header>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "headerBase",
  mixins: [screenHandler],
  data() {
    return {
      navbarIsOpen: false,
    };
  },
  computed: {
    isMobile() {
      return this.ScreenSize !== "desctop";
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
  @include ScreenSizeLaptop {
    padding: 15px 50px;
  }
  @include ScreenSizeMobile {
    padding: 15px 30px;
  }
}

.logotype {
  @include ScreenSizeLaptop {
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
  @include ScreenSizePC {
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
