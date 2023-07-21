<template>
  <sectionWrapper
    class="NFTHighlight"
    v-if="nftHighlight"
    :style="'background-image: url(' + nftHighlight.image_path + ')'"
  >
    <div class="NFTHighlight__info">
      <div class="NFTHighlight__nft-info">
        <artistCard
          :photo="nftHighlight.creator.avatar"
          :name="nftHighlight.creator.name"
          :total_sales="
            nftHighlight.creator.stats.stats_volume_rankings.toFixed(2)
          "
          :id="nftHighlight.creator.id"
          size="small"
        />
        <p class="NFTHighlight__name-nft">{{ nftHighlight.name }}</p>
        <ButtonDefault
          v-if="getScreenSize > 834"
          class="NFTHighlight__button"
          type="secondary"
          modifier="filled"
          icon="Eye"
          text="See NFT"
          @clickButton="
            $router.push({
              name: 'Nft',
              params: {
                id: nftHighlight.id,
              },
            })
          "
        />
      </div>
      <AuctionTimer
        class="NFTHighlight__timer"
        :endTime="nftHighlight.date_auction_ends"
        :isAdaptive="getScreenSize <= 834"
      />
      <ButtonDefault
        v-if="getScreenSize <= 834"
        class="NFTHighlight__button"
        type="secondary"
        modifier="filled"
        icon="Eye"
        text="See NFT"
        :isAdaptive="true"
        @clickButton="
          $router.push({
            name: 'Nft',
            params: {
              id: nftHighlight.id,
            },
          })
        "
      />
    </div>
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import AuctionTimer from "../../ui/AuctionTimer.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NFTHighlightSection",
  data() {
    return {
      nftHighlight: null,
    };
  },
  components: { AuctionTimer },
  mixins: [screenHandler],
  methods: { ...mapActions(["fetchNFTHighlight"]) },
  computed: { ...mapGetters(["getNFTHighlight"]) },
  async mounted() {
    await this.fetchNFTHighlight();
    this.nftHighlight = this.getNFTHighlight;
  },
};
</script>

<style lang="scss" scoped>
.NFTHighlight {
  height: 640px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  align-items: flex-end !important;

  &::after {
    content: "";
    z-index: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #a259ff 100%);
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 1;
  }
  &__nft-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__name-nft {
    @include h2;
    word-break: break-word;
  }
  &__button {
    background-color: #fff !important;
    &:deep(.button__text) {
      color: $colorBgTextBlack !important;
    }
    &:deep(path) {
      fill: $colorActionPurple !important;
    }
  }

  @include ScreenSizeTablet {
    &__name-nft {
      @include h3;
    }
  }

  @include ScreenSizeMobile {
    &__info {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }
  }
}
</style>
