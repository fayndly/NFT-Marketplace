<template>
  <loaderPage
    v-if="loadingPage"
    :isLoading="loadingPage"
    :isError="loadingPageError"
    :errorText="loadingPageErrorText"
  />
  <mainWrapper v-else>
    <sectionWrapper
      class="placeholder-section"
      :style="`background-image: url(${collectionPage.placeholder_path})`"
    ></sectionWrapper>
    <sectionWrapper class="collection">
      <img
        v-lazy="collectionPage.avatar_path"
        alt=""
        class="collection__avatar"
      />
      <div class="collection__info">
        <h2 class="collection__name">{{ collectionPage.name }}</h2>
        <div class="collection__CTAs-mobile" v-if="getScreenSize <= 1200">
          <ButtonDefault
            type="secondary"
            modifier="filled"
            icon="Copy"
            :text="getSmallAddress(collectionPage.id)"
            :isAdaptive="getScreenSize <= 834"
            @clickButton="copyText(collectionPage.id)"
          />
          <ButtonDefault
            type="secondary"
            modifier="outlined"
            icon="User"
            :text="getSmallAddress(collectionPage.creatorId)"
            @clickButton="
              $router.push({
                name: 'Artist',
                params: { id: collectionPage.creatorId },
              })
            "
            :isAdaptive="getScreenSize <= 834"
          />
        </div>
        <AdditionalInfo
          class="collection__additional-info"
          :stats="getStats"
          :isAdaptive="getScreenSize <= 834"
        />
        <div class="collection__info-bio">
          <p class="collection__info-haedline">Description</p>
          <p
            class="collection__info-text"
            v-html="collectionPage.description"
          />
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
          :text="getSmallAddress(collectionPage.id)"
          @clickButton="copyText(collectionPage.id)"
        />
        <ButtonDefault
          type="secondary"
          modifier="outlined"
          icon="User"
          :text="getSmallAddress(collectionPage.creatorId)"
          @clickButton="
            $router.push({
              name: 'Artist',
              params: { id: collectionPage.creatorId },
            })
          "
        />
      </div>
    </sectionWrapper>
    <sectionWrapper>
      <HeaderSection headerName="Nfts from this collection" />
      <loaderSection
        v-if="loadingNfts || loadingNftsError"
        :isLoading="loadingNfts"
        :isError="loadingNftsError"
        :errorText="loadingNftsErrorText"
      />
      <gridWrapper v-else-if="!loadingNftsError">
        <NFTCard
          v-for="nft in nfts"
          :key="nft.id"
          :id="nft.id"
          :image="nft.image"
          :name="nft.name"
          :price="nft.price"
          :highestBid="nft.highestBid"
          :artistId="nft.creatorId"
          :artist="nft.creator"
          :isAdaptive="getScreenSize <= 834"
        />
      </gridWrapper>
    </sectionWrapper>
    <div
      v-if="collectionNftCards.length < lengthArrayCollectionNftCards"
      v-intersection="loadMoreCollectionNftCards"
    ></div>
  </mainWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import HeaderSection from "@/components/ui/HeaderSection.vue";
import { mapActions } from "vuex";

export default {
  name: "CollectionPage",
  components: { HeaderSection },
  mixins: [screenHandler],
  data() {
    return {
      loadingPage: true,
      loadingNfts: true,
      loadingPageError: false,
      loadingNftsError: false,
      loadingPageErrorText: Error(""),
      loadingNftsErrorText: Error(""),

      collectionNftCards: [],
      lengthArrayCollectionNftCards: 0,

      limitStep: 6,
      pageCards: 0,

      collectionPage: null,
      nfts: null,
    };
  },
  computed: {
    getStats() {
      const valueFloor = this.collectionPage.stats.floor;
      const valueVolume = this.collectionPage.stats.volume;
      const valueItems = this.collectionPage.stats.items;
      return [
        {
          head: "Floor",
          value: valueFloor.toFixed(2),
        },
        {
          head: "Volume",
          value: this.getStatsValue(valueVolume),
        },
        {
          head: "Items",
          value: valueItems,
        },
      ];
    },
  },
  methods: {
    ...mapActions(["getCollectionPage", "getCollectionNftCards"]),
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
    copyText(value) {
      navigator.clipboard
        .writeText(value)
        .then(() => console.log(`Текст ${value} скопирован в буфер обмена`))
        .catch((error) =>
          console.error("Не удалось скопировать текст: ", error)
        );
    },
    getSmallAddress(address) {
      return `${address.slice(0, 4)}...${address.slice(-4)}`;
    },

    showButtonMore() {
      if (this.nfts) {
        return (
          !this.loadingNftsError &
          (this.collectionPage.nfts.length > this.nftsCounter)
        );
      }
      return;
    },

    async loadCollectionPage() {
      await this.getCollectionPage(this.$route.params.id)
        .then((result) => {
          this.collectionPage = result;
          this.loadingPage = false;
        })
        .catch((err) => {
          this.loadingNftsError = true;
          this.loadingNftsErrorText = err;
        });
    },
    async loadCollectionNftCards() {
      await this.getCollectionNftCards({
        id: this.collectionPage.id,
        page: this.pageCards,
        limitStep: this.limitStep,
      })
        .then((result) => {
          this.nfts = result.nfts;
          this.lengthArrayCollectionNftCards = result.length;
        })
        .catch((err) => {
          this.loadingNftsError = true;
          this.loadingNftsErrorText = err;
        })
        .finally(() => {
          this.loadingNfts = false;
        });
    },
    async loadMoreCollectionNftCards() {
      this.pageCards++;
      await this.getCollectionNftCards({
        id: this.collectionPage.id,
        page: this.pageCards,
        limitStep: this.limitStep,
      })
        .then((result) => {
          if (result) {
            this.nfts.push(...result.nfts);
          }
        })
        .catch((err) => {
          this.loadingNftsError = true;
          this.loadingNftsErrorText = err;
        })
        .finally(() => {
          this.loadingNfts = false;
        });
      // await this.getCollectionNftCards({
      //   id: this.collectionPage.id,
      //   page: this.pageCards,
      //   limitStep: this.limitStep,
      // })
      //   .then((result) => {
      //     this.nfts = result.nfts;
      //     this.lengthArrayCollectionNftCards = result.length;
      //   })
      //   .catch((err) => {
      //     this.loadingNftsError = true;
      //     this.loadingNftsErrorText = err;
      //   })
      //   .finally(() => {
      //     this.loadingNfts = false;
      //   });
    },
  },
  async mounted() {
    await this.loadCollectionPage();
    await this.loadCollectionNftCards();
  },
};
</script>

<style lang="scss" scoped>
.collection {
  padding-top: 90px !important;
  padding-bottom: 40px !important;
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

  &__info-haedline {
    color: $colorBgTextSilverWhite;
    @include h5;
    font-family: $fontSpaceMono;
  }
  &__info-text {
    @include body-text;
    word-wrap: break-word;
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
</style>
