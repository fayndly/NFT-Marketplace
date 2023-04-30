<template>
  <mainWrapper>
    <sectionWrapper
      class="placeholder-section"
      :style="`background-image: url(${getImage})`"
    ></sectionWrapper>
    <sectionWrapper class="nft">
      <div class="nft__info">
        <div class="nft__headline">
          <h2 class="nft__name">Animakid</h2>
          <p class="nft__uploaded">Minted on Sep 30, 2022</p>
        </div>
        <div class="nft__more-info">
          <div class="nft__more-info-item">
            <p class="nft__info-haedline">Created By</p>
            <p class="nft__info-text">
              The internet's friendliest designer kid.
            </p>
          </div>
          <div class="nft__more-info-item">
            <p class="nft__info-haedline">Description</p>
            <p class="nft__info-text">
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain, There are all sorts of beings in the NFT
              Universe. The most advanced and friendly of the bunch are
              Orbitians. They live in a metal space machines, high up in the sky
              and only have one foot on Earth. These Orbitians are a peaceful
              race, but they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </p>
          </div>
          <div class="nft__more-info-item">
            <p class="nft__info-haedline">Details</p>
            <p class="nft__info-text">
              The internet's friendliest designer kid.
            </p>
          </div>
          <div class="nft__more-info-item">
            <p class="nft__info-haedline">Tags</p>
            <TagComponent name="Animation" />
            <TagComponent name="illustration" />
            <TagComponent name="moon" />
            <TagComponent name="moon" />
          </div>
        </div>
      </div>
      <div class="nft__auction-timer">
        <AuctionTimer class="nft__timer" :button="true" />
      </div>
    </sectionWrapper>
    <sectionWrapper>
      <HeaderSection
        :sectionHeader="{
          headerName: 'More from this artist',
          button: true,
        }"
      />
      <gridWrapper>
        <NFTCard v-for="i in 9" :key="i.key" />
      </gridWrapper>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import TagComponent from "@/components/ui/TagComponent.vue";
import HeaderSection from "@/components/ui/HeaderSection.vue";
import AuctionTimer from "@/components/ui/AuctionTimer.vue";
export default {
  name: "NftPage",
  components: { AuctionTimer, HeaderSection, TagComponent },
  data() {
    return {};
  },
  methods: {},
  computed: {
    getImage() {
      return "/images/virtual_wolrd.png";
    },
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
  &__more-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  &__more-info-item {
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
}

.placeholder-section {
  height: 560px;
  background-position: center;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-size: cover;
}
</style>
