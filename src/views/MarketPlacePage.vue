<template>
  <loaderPage
    v-if="loadingPage"
    :isLoading="loadingPage"
    :isError="loadingPageError"
    :errorText="loadingPageErrorText"
  />
  <mainWrapper v-else>
    <sectionWrapper>
      <HeaderSection
        headerName="Browse Marketplace"
        headerText="Browse through more than 50k NFTs on the NFT Marketplace."
      />
      <SearchForm @search="handleSearch" :initialQuery="searchQuery" />
    </sectionWrapper>
    <sectionWrapper class="tabbar-wrapper">
      <TabBar :tabs="tabs" />
    </sectionWrapper>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component
          :is="Component"
          @loadedNfts="getNftsLength"
          @loadedCollections="getCollectionsLength"
        />
      </transition>
    </router-view>
  </mainWrapper>
</template>

<script>
import TabBar from "@/components/ui/tabbars/TabBar.vue";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "MarketPlacePage",
  components: { TabBar },
  mixins: [screenHandler],
  data() {
    return {
      loadingPage: true,
      loadingPageError: false,
      loadingPageErrorText: Error(""),
      searchQuery: "",

      tabs: [
        {
          name: "Nfts",
          nameRouteTo: "MarketplaceNfts",
          counter: 0,
        },
        {
          name: "Collections",
          nameRouteTo: "MarketplaceCollections",
          counter: 0,
        },
      ],
    };
  },
  methods: {
    getNftsLength(q) {
      this.tabs[0].counter = q;
    },
    getCollectionsLength(q) {
      this.tabs[1].counter = q;
    },
    handleSearch(query) {
      this.$router.push({ query: { searchValue: query } });
      this.searchQuery = query;
    },
  },
  async mounted() {
    this.searchQuery = this.$route.query.searchValue;
    this.loadingPage = false;
  },
};
</script>

<style lang="scss" scoped>
.fade {
  &-enter-active {
    transition: opacity 0.3s ease;
  }
  &-leave-active {
    transition: opacity 0.3s ease;
  }
  &-enter-from {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
}

.section-list {
  background-color: $colorBgTextSilverBlack;
  padding: 30px;
  // padding-top: 0 !important;
  // padding-bottom: 0 !important;
  & :deep(.section__content) {
    gap: 0;
  }
}

.tabbar-wrapper {
  padding: 0 !important;
}

.card-wrapper {
  padding-top: 60px;
  padding-bottom: 80px;

  @include ScreenSizeTabletMini {
    padding-top: 30px;
    padding-bottom: 40px;
  }
  @include ScreenSizeMobile {
    padding-top: 30px;
    padding-bottom: 40px;
  }
}
</style>
