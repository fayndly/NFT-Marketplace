<template>
  <mainWrapper>
    <sectionWrapper>
      <HeaderSection
        headerName="Top Creators"
        headerText="Check out top ranking NFT artists on the NFT Marketplace."
      />
    </sectionWrapper>
    <sectionWrapper class="section-list">
      <TabBar :tabs="getHeadersTabs" @choseTab="openTab" :counters="false" />
      <listWrapper class="rankings">
        <RankingHeader />
        <RankingItem
          v-for="(ranking, index) in rankings"
          :key="ranking.id"
          :number="index + 1"
          :artist="ranking.artist"
          :change="ranking.change"
          :sold="ranking.sold"
          :volume="ranking.volume"
        />
      </listWrapper>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import TabBar from "@/components/ui/tabbars/TabBar.vue";
import HeaderSection from "@/components/ui/HeaderSection.vue";

import RankingHeader from "@/components/ui/cards/rankings/RankingHeader.vue";
import RankingItem from "@/components/ui/cards/rankings/RankingItem.vue";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "RankingsPage",
  components: { HeaderSection, TabBar, RankingHeader, RankingItem },
  mixins: [screenHandler],
  data() {
    return {
      tabs1: ["Today", "This Week", "This Month", "All Time"],
      tabs2: ["1d", "7d", "30d", "All Time"],
      rankings: [
        {
          artist: {
            name: "Keepitreal",
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          },
          change: 1.54,
          sold: 102,
          volume: 34.53,
        },
        {
          artist: {
            name: "DigiLab",
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          },
          change: 1.52,
          sold: 90,
          volume: 35.46,
        },
      ],
    };
  },
  computed: {
    getHeadersTabs() {
      let ret;
      if (this.getScreenSize <= 834) {
        ret = this.tabs2;
      } else {
        ret = this.tabs1;
      }
      return ret;
    },
  },
  methods: {
    openTab(text) {
      return text;
    },
  },
};
</script>

<style lang="scss" scoped>
.section-list {
  padding-top: 0;
  padding-bottom: 0;
  & :deep(.section__content) {
    gap: 0;
  }
}
.rankings {
  padding: 20px 0px;
}
</style>
