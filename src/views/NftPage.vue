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
      :style="`background-image: url(${nft.image_path})`"
    ></sectionWrapper>
    <sectionWrapper class="nft">
      <div class="nft__info">
        <div class="nft__headline">
          <h2 class="nft__name">{{ nft.name }}</h2>
          <p class="nft__uploaded">Minted on {{ nft.date_mounted }}</p>
        </div>
        <AuctionTimer
          v-if="getScreenSize < 834"
          class="nft__timer-mobile"
          :endTime="nft.date_auction_ends"
          :button="true"
          :isAdaptive="getScreenSize <= 834"
        />
        <div class="nft__info-item">
          <p class="nft__info-haedline">Created By</p>
          <artistCard
            class="nft-card__artist"
            size="small"
            :id="nft.creator.id"
            :photo="nft.creator.avatar"
            :name="nft.creator.name"
            :fill="false"
          />
        </div>
        <div class="nft__info-item" v-if="nft.description.length">
          <p class="nft__info-haedline">Description</p>
          <p class="nft__info-text" v-html="nft.description"></p>
        </div>
        <div class="nft__info-item" v-if="nft.details.length">
          <p class="nft__info-haedline">Details</p>
          <div class="nft__more-info-details">
            <a
              v-for="(detail, index) in nft.details"
              :key="index"
              :href="detail.link"
              class="nft-info-detail"
            >
              <IconComponent
                path="Globe"
                color="silver"
                class="nft-info-detail__icon"
              />
              <p class="nft-info-detail__text">{{ detail.name }}</p>
            </a>
          </div>
        </div>
        <div class="nft__info-item" v-if="nft.tags.length">
          <p class="nft__info-haedline">Tags</p>
          <div class="nft__more-info-tags">
            <TagComponent
              v-for="(tag, index) in nft.tags"
              :key="index"
              :name="tag"
            />
          </div>
        </div>
      </div>
      <div class="nft__auction-timer" v-if="getScreenSize >= 834">
        <AuctionTimer
          class="nft__timer"
          endTime="Sep 5, 2024 15:37:25"
          :button="true"
        />
      </div>
    </sectionWrapper>
    <sectionWrapper>
      <HeaderSection headerName="More from this artist">
        <template #button>
          <ButtonDefault
            class="button-header"
            type="secondary"
            modifier="outlined"
            icon="ArrowRight"
            text="Go To Artist Page"
            @clickButton="
              $router.push({ name: 'Artist', params: { id: nft.id_creator } })
            "
          />
        </template>
      </HeaderSection>
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
        <ButtonDefault
          v-if="getScreenSize < 834"
          class="button-header-mobile"
          type="secondary"
          modifier="outlined"
          icon="ArrowRight"
          text="Go To Artist Page"
          :isAdaptive="true"
          @clickButton="
            $router.push({ name: 'Artist', params: { id: nft.id_creator } })
          "
        />
      </gridWrapper>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import TagComponent from "@/components/ui/TagComponent.vue";
import HeaderSection from "@/components/ui/HeaderSection.vue";
import AuctionTimer from "@/components/ui/AuctionTimer.vue";
import getImages from "@/mixins/getImages";
import screenHandler from "@/mixins/screenHandler";

import { mapActions } from "vuex";

export default {
  name: "NftPage",
  components: { AuctionTimer, HeaderSection, TagComponent },
  mixins: [getImages, screenHandler],

  data() {
    return {
      loadingPage: true,
      loadingNfts: true,
      loadingPageError: false,
      loadingNftsError: false,
      loadingPageErrorText: Error(""),
      loadingNftsErrorText: Error(""),
      nfts: [],
      nft: {},
    };
  },

  watch: {
    $route(to, from) {
      if (to.params.id !== from.params.id) {
        location.reload();
      }
    },
  },

  methods: { ...mapActions(["getNftPage", "getNftCardsByCreator"]) },

  async mounted() {
    await this.getNftPage(this.$route.params.id)
      .then((result) => {
        this.nft = result;
        this.loadingPage = false;
      })
      .catch((err) => {
        this.loadingPageError = true;
        this.loadingPageErrorText = err;
        console.log(err);
      });

    await this.getNftCardsByCreator(this.nft.id_creator)
      .then((result) => {
        this.nfts = result;
        this.loadingNfts = false;
      })
      .catch((err) => {
        console.log(err);
        this.loadingNftsError = true;
        this.loadingNftsErrorText = err;
      });
  },
};
</script>

<style lang="scss" scoped>
.nft {
  padding-top: 40px;
  padding-bottom: 40px;
  & :deep(.section__content) {
    flex-direction: row;
    justify-content: space-between;
    gap: 150px;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__headline {
  }
  &__name {
  }
  &__uploaded {
    margin-top: 10px;
    @include body-text;
  }
  &__info-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  &__more-info-tags {
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
  }
  &__more-info-details {
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
  &__auction-timer {
  }
  &__timer {
    height: fit-content;
  }

  .button-header {
    &:deep(.button__icon) {
      path {
        fill: $colorActionPurple;
      }
    }
  }

  @include ScreenSizeTablet {
    & :deep(.section__content) {
      gap: 30px;
    }
  }
  @include ScreenSizeTabletMini {
    &__info {
      gap: 20px;
    }
  }
  @include ScreenSizeMobile {
  }
}

.nft-info-detail {
  display: flex;
  gap: 10px;

  user-select: none;
  cursor: pointer;
  &__icon {
    width: 32px;
    height: 32px;
  }
  &__text {
    @include body-text;
  }
}
.placeholder-section {
  height: 560px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @include ScreenSizeTablet {
    height: 420px;
  }
  @include ScreenSizeMobile {
    height: 320px;
  }
}
</style>
