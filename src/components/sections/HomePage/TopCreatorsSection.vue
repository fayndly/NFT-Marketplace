<template>
  <sectionWrapper>
    <HeaderSection
      headerName="Top creators"
      headerText="Checkout Top Rated Creators on the NFT Marketplace"
    >
      <template #button>
        <ButtonDefault
          type="secondary"
          modifier="outlined"
          icon="RocketLaunch"
          text="View Rankings"
          @clickButton="this.$router.push('/rankings')" /></template
    ></HeaderSection>
    <gridWrapper
      v-if="getScreenDevice == 'desktop'"
      class="cards-wrapper cards-wrapper-desctop"
    >
      <artistCard
        v-for="(artist, index) in topArtists"
        :key="artist.id"
        :photo="artist.avatar_image_path"
        :name="artist.name"
        :total_sales="artist.stats.stats_volume"
        :number="index + 1"
        :id="artist.id"
      />
    </gridWrapper>
    <gridWrapper v-else class="cards-wrapper cards-wrapper-tablet">
      <artistCard
        v-for="(artist, index) in topArtists"
        :key="artist.id"
        :photo="artist.avatar_image_path"
        :name="artist.name"
        :total_sales="artist.stats.stats_volume"
        :number="index + 1"
        :id="artist.id"
        size="big"
      />
    </gridWrapper>
    <ButtonDefault
      v-if="getScreenSize <= 834"
      type="secondary"
      modifier="outlined"
      icon="RocketLaunch"
      text="View Rankings"
      :isAdaptive="true"
      @clickButton="this.$router.push('/rankings')"
    />
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import HeaderSection from "../../ui/HeaderSection.vue";

export default {
  name: "TopCreatorsSection",
  components: { HeaderSection },
  mixins: [screenHandler],
  data() {
    return {
      topArtists: {},
    };
  },
  mounted() {
    this.topArtists = this.$store.getters.getTopRatedArtists;
  },
};
</script>

<style lang="scss" scoped>
.cards-wrapper {
  align-items: normal;
  @include ScreenSizeTablet {
    .artist-card:nth-child(n + 7) {
      display: none;
    }
  }
  @include ScreenSizeMobile {
    .artist-card:nth-child(n + 6) {
      display: none;
    }
    &-tablet {
      .artist-card {
        @include adaptive;
      }
    }
  }
}
</style>
