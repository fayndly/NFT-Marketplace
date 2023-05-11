<template>
  <mainWrapper>
    <sectionWrapper
      class="placeholder-section"
      :style="`background-image: url(${artist.placeholder_image_path})`"
    ></sectionWrapper>
    <sectionWrapper class="artist">
      <img :src="artist.avatar_image_path" alt="" class="artist__avatar" />
      <div class="artist__info">
        <h2 class="artist__name">{{ artist.name }}</h2>
        <div class="artist__CTAs-mobile" v-if="getScreenSize <= 1200">
          <ButtonDefault
            type="secondary"
            modifier="filled"
            icon="Copy"
            :text="artist.address"
            :isAdaptive="getScreenSize <= 834"
          />
          <ButtonDefault
            type="secondary"
            modifier="outlined"
            icon="Plus"
            text="Follow"
            :isAdaptive="getScreenSize <= 834"
          />
        </div>
        <AdditionalInfo
          class="artist__additional-info"
          :stats="getStats"
          :isAdaptive="getScreenSize <= 834"
        />
        <div class="artist__info-bio">
          <p class="artist__info-haedline">Bio</p>
          <p class="artist__info-text" v-html="artist.bio"></p>
        </div>
        <div class="artist__info-links">
          <p class="artist__info-haedline">Links</p>
          <!-- <div class="artist__info-links-wrapper">
            <a  href="https://opensea.io/">
              <IconComponent
                class="artist__info-links-wrapper-icon"
                path="Globe"
                color="silver"
              />
            </a>
            <a href="https://discord.com/">
              <IconComponent
                class="artist__info-links-wrapper-icon"
                path="DiscordLogo"
                color="silver"
              />
            </a>
            <a href="https://www.youtube.com/">
              <IconComponent
                class="artist__info-links-wrapper-icon"
                path="YoutubeLogo"
                color="silver"
              />
            </a>
            <a href="https://twitter.com/">
              <IconComponent
                class="artist__info-links-wrapper-icon"
                path="TwitterLogo"
                color="silver"
              />
            </a>
            <a href="https://www.instagram.com/">
              <IconComponent
                class="artist__info-links-wrapper-icon"
                path="InstagramLogo"
                color="silver"
              />
            </a>
          </div> -->
          <div class="artist__info-links-wrapper">
            <a v-for="link in artist.links" :href="link.link" :key="link.link">
              <IconComponent
                class="artist__info-links-wrapper-icon"
                :path="getLinkIcone(link.name)"
                color="silver"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="artist__CTAs" v-if="getScreenDevice === 'desktop'">
        <ButtonDefault
          type="secondary"
          modifier="filled"
          icon="Copy"
          :text="artist.address"
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
      <TabBar :tabs="tabs" :haveCounters="true" />
    </sectionWrapper>
    <sectionWrapper class="section-list">
      <gridWrapper class="card-wrapper">
        <router-view />
        <!-- <router-view></router-view> -->
      </gridWrapper>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import TabBar from "@/components/ui/tabbars/TabBar.vue";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "ArtistPage",
  components: { TabBar },
  mixins: [screenHandler],
  data() {
    return {
      tabs: [
        { name: "Created", nameRouteTo: "ArtistCreated" },
        { name: "Owned", nameRouteTo: "ArtistOwned" },
        { name: "Collections", nameRouteTo: "ArtistCollection" },
      ],
      artist: {},
      nfts_created: [
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
      ],
      nfts_owned: [
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
          id: 234534,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 1234,
          highest_bid: 123,
        },
        {
          id: 2356567332,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 234,
          highest_bid: 4323,
        },
        {
          id: 56456,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
        {
          id: 235547567123,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 1234,
          highest_bid: 123,
        },
        {
          id: 6778546457,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 234,
          highest_bid: 4323,
        },
        {
          id: 563452467,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
      ],
      collections: [
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 125467546354,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 56856235,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 456546734,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 546753,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Roboform",
          },
          name: "Samurai robots",
          id: 27346821423,
        },
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 38974589723,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 2364786278364,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 12309123,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 485768712,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 28937478365,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 1290389089,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Black Null",
          },
          name: "Slime",
          id: 34858273428350,
        },
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 234346322,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 4564735346,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 78634534,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Run",
          },
          name: "Running Basketbaal",
          id: 23645369457,
        },
      ],
    };
  },
  computed: {
    getStats() {
      return [
        {
          head: "Volume",
          value: this.getStatsValue(this.artist.stats.stats_volume),
        },
        {
          head: "NFTs Sold",
          value: this.getStatsValue(this.artist.stats.stats_sold),
        },
        {
          head: "Followers",
          value: this.getStatsValue(this.artist.stats.stats_followers),
        },
      ];
    },
  },
  methods: {
    getLinkIcone(name) {
      if (name === "twitter") {
        return "TwitterLogo";
      } else if (name === "site") {
        return "Globe";
      } else if (name === "instagram") {
        return "InstagramLogo";
      }
    },
    getStatsValue(value) {
      if (value > 1000000) {
        const ret_val = value * 0.001;
        return `${ret_val.toFixed(0)}m+`;
      }
      if (value > 1000) {
        const ret_val = value * 0.001;
        return `${ret_val.toFixed(0)}k+`;
      }
      if (value > 100) {
        return `100+`;
      }
      if (value > 50) {
        return `50+`;
      } else {
        return value;
      }
    },
  },
  created() {
    this.artist = this.$store.getters.getArtistPage(this.$route.params.id);
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
    word-wrap: break-word;
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

  &__info-bio {
    word-wrap: break-word;
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

.list-enter-active {
  transition: opacity 0.3s ease;
}
.list-leave-active {
  transition: opacity 0.3s ease;
}

.list-enter-from {
  opacity: 0;
}
.list-leave-to {
  opacity: 0;
}
</style>
