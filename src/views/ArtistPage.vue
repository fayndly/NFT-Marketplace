<template>
  <mainWrapper>
    <sectionWrapper class="placeholder-section"></sectionWrapper>
    <sectionWrapper class="artist">
      <img src="/images/avatars/1.png" alt="" class="artist__avatar" />
      <div class="artist__info">
        <h2 class="artist__name">Animakid</h2>
        <ul class="artist__stats">
          <li class="artist__stats-item">
            <div class="artist__stats-item-value">250k+</div>
            <div class="artist__stats-item-head">Volume</div>
          </li>
          <li class="artist__stats-item">
            <div class="artist__stats-item-value">50+</div>
            <div class="artist__stats-item-head">NFTs Sold</div>
          </li>
          <li class="artist__stats-item">
            <div class="artist__stats-item-value">3000+</div>
            <div class="artist__stats-item-head">Followers</div>
          </li>
        </ul>
        <div class="artist__info-bio">
          <p class="artist__info-haedline">Bio</p>
          <p class="artist__info-text">
            The internet's friendliest designer kid.
          </p>
        </div>
        <div class="artist__info-links">
          <p class="artist__info-haedline">Links</p>
          <div class="artist__info-links-wrapper">
            <a href="https://discord.com/">
              <img
                src="@/assets/svg/icons/DiscordLogo.svg"
                class="artist__info-links-wrapper-icon"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                src="@/assets/svg/icons/YoutubeLogo.svg"
                class="artist__info-links-wrapper-icon"
              />
            </a>
            <a href="https://twitter.com/">
              <img
                src="@/assets/svg/icons/TwitterLogo.svg"
                class="artist__info-links-wrapper-icon"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="@/assets/svg/icons/InstagramLogo.svg"
                class="artist__info-links-wrapper-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="artist__CTAs">
        <ButtonDefault
          type="secondary"
          modifier="filled"
          icon="Copy"
          text="0xc0E3...B79C"
        />
        <ButtonDefault
          type="secondary"
          modifier="outlined"
          icon="Plus"
          text="Follow"
        />
      </div>
    </sectionWrapper>
    <sectionWrapper class="tabbar-wrapper">
      <TabBar :tabs="tabs" @choseTab="openTab" :counter="true" />
    </sectionWrapper>
    <sectionWrapper class="section-list">
      <gridWrapper class="card-wrapper" v-show="activeTab === 'Created'">
        <NFTCard class="card-nft" v-for="i in 12" :key="i" />
      </gridWrapper>
      <gridWrapper class="card-wrapper" v-show="activeTab === 'Owned'">
        <NFTCard class="card-nft" v-for="i in 12" :key="i" />
      </gridWrapper>
      <gridWrapper class="card-wrapper" v-show="activeTab === 'Collections'">
        <collectionCard class="card-collection" v-for="i in 12" :key="i" />
      </gridWrapper>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import TabBar from "@/components/ui/tabbars/TabBar.vue";

export default {
  name: "ArtistPage",
  components: { TabBar },
  data() {
    return {
      tabs: ["Created", "Owned", "Collections"],
      activeTab: "Created",
    };
  },
  methods: {
    openTab(text) {
      this.activeTab = text;
    },
  },
};
</script>

<style lang="scss" scoped>
.artist {
  padding-top: 90px;
  padding-bottom: 40px;
  position: relative;
  & :deep(.section__content) {
    flex-direction: row;
    justify-content: space-between;
  }
  &__avatar {
    position: absolute;
    top: -70px;
    width: 120px;
    height: 120px;
    border-radius: 20px;
    border: 2px solid $colorBgTextBlack;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__name {
  }
  &__CTAs {
    display: flex;
    gap: 20px;

    button {
      padding: 0px 20px;
    }
  }

  &__stats {
    width: 510px;
    justify-content: space-between;
  }
  &__stats-item {
  }
  &__stats-item-value {
    font-family: $fontSpaceMono;
    @include h4;
  }
  &__stats-item-head {
    @include body-text;
  }

  &__info-bio,
  &__info-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__info-haedline {
    color: $colorBgTextSilverWhite;
    @include h5;
    font-family: $fontSpaceMono;
  }
  &__info-text {
    @include body-text;
  }
  &__info-links-wrapper {
    display: flex;
    gap: 10px;
  }
  &__info-links-wrapper-icon {
    width: 32px;
    height: 32px;
  }
}

.placeholder-section {
  height: 320px;

  align-items: end;

  position: relative;

  // background-image: url("/images/virtual_wolrd.png");
  background-position: center;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: cover;
}

.placeholder-section::after {
  content: "";
  z-index: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%);
}

.section-list {
  background-color: $colorBgTextSilverBlack;
  padding: 0;
  & :deep(.section__content) {
    gap: 0;
  }
}

.tabbar-wrapper {
  padding: 0;
}

.card-wrapper {
  padding-top: 60px;
  padding-bottom: 80px;
  & :deep(.nft-card) {
    background-color: $colorBgTextBlack;
  }
}
</style>
