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
          :stats="getStats()"
          :isAdaptive="getScreenSize <= 834"
        />
        <div class="artist__info-bio">
          <p class="artist__info-haedline">Bio</p>
          <p class="artist__info-text" v-html="artist.bio"></p>
        </div>
        <div class="artist__info-links">
          <p class="artist__info-haedline">Links</p>
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
      <TabBar :tabs="getTabs()" :haveCounters="true" />
    </sectionWrapper>
    <sectionWrapper class="section-list">
      <router-view
        :artistNftsCreated="artist.nfts_created"
        :artistNftsOwned="artist.nfts_owned"
        :artistCollections="artist.collections"
        v-slot="{ Component }"
      >
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import TabBar from "@/components/ui/tabbars/TabBar.vue";
import screenHandler from "@/mixins/screenHandler";

import { mapGetters } from "vuex";

export default {
  name: "ArtistPage",
  components: { TabBar },
  mixins: [screenHandler],
  data() {
    return {
      artist: {
        id: "0x4da48ac48b782a7c01e70065e4a51faf2c3f7b09",
        avatar_image_path:
          "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1lY1NzZk12UmNVcm15ZEJZZlJ5anBSaXNZTUdEQVhtb0FXR1BZSlJLV0E0WA==",
        placeholder_image_path:
          "https://ipfs.io/ipfs/QmTFgShYexRPZBstsJ5abwVLZncq62h2w8ksJZBttMB1cR",
        name: "LIRONA",
        address: "0x4da48...7b09",
        stats: {
          stats_volume: 258225,
          stats_sold: 93,
          stats_followers: 21928,
          stats_change: 1.5432751521244161,
          stats_volume_rankings: 9.892418560388744,
        },
        nfts_created: [
          "0xed5af388653567af2f388e6224dc7c4b3241c544:3427",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:9697",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:6500",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:1952",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:3984",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:1640",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:1208",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:7995",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:6413",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:6717",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:8869",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:3234",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:4954",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:8017",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:1156",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:4230",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:3124",
          "0xed5af388653567af2f388e6224dc7c4b3241c544:566",
        ],
        nfts_owned: [
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:2691",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:8927",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:26616",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:9409",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:378",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:6539",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:334",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:28738",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:2277",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:25292",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:6328",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:5020",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:25910",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:2324",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:6658",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:13602",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:13",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:11064",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:6257",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:5984",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:8588",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:1399",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:9846",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:24536",
          "0x60e4d786628fea6478f785a6d7e704777c86a7c6:22964",
        ],
        collections: ["0xed5af388653567af2f388e6224dc7c4b3241c544"],
        bio: "LIŔONA is a creator of minimalistic ⨯ bold graphic and digital artwork. ✹ Artist / Creative Director ✹ #NFT minting ",
        links: [
          {
            name: "site",
            link: "http://www.lirona.me",
          },
          {
            name: "twitter",
            link: "https://twitter.com/iamlirona",
          },
        ],
      },
    };
  },
  computed: { ...mapGetters(["getArtistPage"]) },
  methods: {
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
    getTabs() {
      return [
        {
          name: "Created",
          nameRouteTo: "ArtistCreated",
          counter: this.artist.nfts_created.length,
        },
        {
          name: "Owned",
          nameRouteTo: "ArtistOwned",
          counter: this.artist.nfts_owned.length,
        },
        {
          name: "Collections",
          nameRouteTo: "ArtistCollection",
          counter: this.artist.collections.length,
        },
      ];
    },
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
  mounted() {
    this.artist = this.getArtistPage(this.$route.params.id);
    this.$data.artist = this.artist;
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.3s ease;
}
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
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
