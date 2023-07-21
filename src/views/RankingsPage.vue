<template>
  <mainWrapper>
    <sectionWrapper>
      <HeaderSection
        headerName="Top Creators"
        headerText="Check out top ranking NFT artists on the NFT Marketplace."
      />
    </sectionWrapper>
    <sectionWrapper class="tabbar-wrapper">
      <TabBar :tabs="getHeadersTabs" :haveCounters="false" />
    </sectionWrapper>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  & :deep(.section__content) {
    gap: 0;
    margin-bottom: 40px;
  }
}

.tabbar-wrapper {
  padding: 20px 0px !important;
}
</style>
