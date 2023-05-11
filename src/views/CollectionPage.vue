<template>
  <mainWrapper>
    <sectionWrapper
      class="placeholder-section"
      :style="`background-image: url(${collection.placeholderImage})`"
    ></sectionWrapper>
    <sectionWrapper class="collection">
      <img :src="collection.avatarImage" alt="" class="collection__avatar" />
      <div class="collection__info">
        <h2 class="collection__name">DeGods</h2>
        <div class="collection__CTAs-mobile" v-if="getScreenSize <= 1200">
          <ButtonDefault
            type="secondary"
            modifier="filled"
            icon="Copy"
            text="0xc0E3...B79C"
            :isAdaptive="getScreenSize <= 834"
          />
          <ButtonDefault
            type="secondary"
            modifier="outlined"
            icon="User"
            text="0x28b23...41f5"
            :isAdaptive="getScreenSize <= 834"
          />
        </div>
        <AdditionalInfo
          :slots="[
            { head: 'Volume', value: '250k+' },
            { head: 'NFTs Sold', value: '50+' },
            { head: 'Followers', value: '3000+' },
          ]"
          class="collection__additional-info"
          :isAdaptive="getScreenSize <= 834"
        />
        <div class="collection__info-bio">
          <p class="collection__info-haedline">Description</p>
          <p class="collection__info-text">
            DeGods is a digital art collection and global community of creators,
            developers, entrepreneurs, athletes, artists, experimenters and
            innovators.
          </p>
        </div>
        <div class="collection__info-links">
          <p class="collection__info-haedline">Links</p>
          <div class="collection__info-links-wrapper">
            <a href="https://opensea.io/">
              <IconComponent
                class="collection__info-links-wrapper-icon"
                path="Globe"
                color="silver"
              />
            </a>
            <a href="https://discord.com/">
              <IconComponent
                class="collection__info-links-wrapper-icon"
                path="DiscordLogo"
                color="silver"
              />
            </a>
            <a href="https://twitter.com/">
              <IconComponent
                class="collection__info-links-wrapper-icon"
                path="TwitterLogo"
                color="silver"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="collection__CTAs" v-if="getScreenDevice === 'desktop'">
        <ButtonDefault
          type="secondary"
          modifier="filled"
          icon="Copy"
          text="0xc0E3...B79C"
        />
        <ButtonDefault
          type="secondary"
          modifier="outlined"
          icon="User"
          text="0x28b23...41f5"
        />
      </div>
    </sectionWrapper>
    <sectionWrapper>
      <HeaderSection headerName="More from this collection" />
      <gridWrapper>
        <NFTCard
          v-for="nft in nfts"
          :key="nft.id"
          :id="nft.id"
          :imagePath="nft.imagePath"
          :name="nft.name"
          :price="nft.price"
          :highest_bid="nft.highest_bid"
          :isAdaptive="getScreenSize <= 834"
        />
      </gridWrapper>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import HeaderSection from "@/components/ui/HeaderSection.vue";

export default {
  name: "CollectionPage",
  components: { HeaderSection },
  mixins: [screenHandler],
  data() {
    return {
      tabs: [
        { name: "Created", nameRouteTo: "ArtistCreated" },
        { name: "Owned", nameRouteTo: "ArtistOwned" },
        { name: "Collections", nameRouteTo: "ArtistCollection" },
      ],
      activeTab: "Created",
      collection: {
        avatarImage:
          "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
        placeholderImage:
          "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
      },
      nfts: [
        {
          id: 123,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 1234,
          highest_bid: 123,
        },
        {
          id: 234,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 234,
          highest_bid: 4323,
        },
        {
          id: 345,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
        {
          id: 475855,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
      ],
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
.collection {
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
  &__additional-info {
    width: 510px;
  }
  &__CTAs {
    display: flex;
    gap: 20px;
    button {
      padding: 0px 20px;
    }
  }
  &__CTAs-mobile {
    display: flex;
    gap: 20px;
    button {
      padding: 0px 20px;
    }
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

  @include ScreenSizeTablet {
    &__additional-info {
      width: auto;
    }
  }
  @include ScreenSizeMobile {
    &__info {
      width: 100%;
    }
    &__CTAs-mobile {
      flex-direction: column;
    }
    &__avatar {
      left: calc(50% - 60px);
    }
  }
}

.placeholder-section {
  align-items: end;

  position: relative;

  background-position: center;
  background-repeat: no-repeat;
  // background-origin: content-box;
  background-size: cover;

  @include ScreenSizeDesktop {
    height: 320px;
  }
  @include ScreenSizeTablet {
    height: 280px;
  }
  @include ScreenSizeMobile {
    height: 250px;
  }

  &::after {
    content: "";
    z-index: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%);
  }
}

.section-list {
  background-color: $colorBgTextSilverBlack;
  padding-top: 0;
  padding-bottom: 0;
  & :deep(.section__content) {
    gap: 0;
  }
}

.tabbar-wrapper {
  padding: 0;
}

.card-wrapper {
  padding-top: 80px;
  padding-bottom: 80px;
  & :deep(.nft-card) {
    background-color: $colorBgTextBlack;
  }
  @include ScreenSizeTablet {
  }
  @include ScreenSizeMobile {
  }
}
</style>
