<template>
  <mainWrapper>
    <sectionWrapper>
      <HeaderSection
        headerName="Top Creators"
        headerText="Check out top ranking NFT artists on the NFT Marketplace."
      />
    </sectionWrapper>
    <sectionWrapper class="section-list">
      <TabBar :tabs="getHeadersTabs" :haveCounters="false" />
      <!-- <listWrapper class="rankings">
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
      </listWrapper> -->

      <router-view
        :rankingsToday="rankings"
        :rankingWeek="rankings"
        :rankingsMonth="rankings"
        :rankingsAllTime="rankings"
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
import HeaderSection from "@/components/ui/HeaderSection.vue";

import screenHandler from "@/mixins/screenHandler";

export default {
  name: "RankingsPage",
  components: { HeaderSection, TabBar },
  mixins: [screenHandler],
  data() {
    return {
      tabsDesktop: [
        {
          name: "Today",
          nameRouteTo: "RankingsToday",
        },
        {
          name: "This Week",
          nameRouteTo: "RankingWeek",
        },
        {
          name: "This Month",
          nameRouteTo: "RankingsMonth",
        },
        {
          name: "All Time",
          nameRouteTo: "RankingsAllTime",
        },
      ],
      tabsMobile: [
        {
          name: "1d",
          nameRouteTo: "RankingsToday",
        },
        {
          name: "7d",
          nameRouteTo: "RankingWeek",
        },
        {
          name: "30d",
          nameRouteTo: "RankingsMonth",
        },
        {
          name: "All Time",
          nameRouteTo: "RankingsAllTime",
        },
      ],
      rankings: [],
      // rankings: [
      //   {
      //     artist: {
      //       name: "Keepitreal",
      //       photo:
      //         "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
      //     },
      //     change: 1.54,
      //     sold: 102,
      //     volume: 34.53,
      //   },
      //   {
      //     artist: {
      //       name: "DigiLab",
      //       photo:
      //         "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
      //     },
      //     change: 1.52,
      //     sold: 90,
      //     volume: 35.46,
      //   },
      // ],
    };
  },
  computed: {
    getHeadersTabs() {
      let tabs;
      if (this.getScreenSize <= 834) {
        tabs = this.tabsMobile;
      } else {
        tabs = this.tabsDesktop;
      }
      return tabs;
    },
  },
  created() {
    this.rankings = this.$store.getters.getRankings;
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
