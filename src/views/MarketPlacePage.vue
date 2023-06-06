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
      <SearchForm />
    </sectionWrapper>
    <sectionWrapper class="tabbar-wrapper">
      <TabBar :tabs="tabs" />
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
import screenHandler from "@/mixins/screenHandler";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MarketPlacePage",
  components: { TabBar },
  mixins: [screenHandler],
  data() {
    return {
      loadingPage: true,
      loadingPageError: false,
      loadingPageErrorText: Error(""),

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
  computed: { ...mapGetters(["getNfts", "getCollections"]) },
  methods: { ...mapActions(["fetchNfts", "fetchCollections"]) },
  async mounted() {
    this.loadingPage = false;
    await this.fetchNfts();
    await this.fetchCollections();
    this.tabs[0].counter = this.getNfts.length;
    this.tabs[1].counter = this.getCollections.length;
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
  background-color: $colorBgTextSilverBlack;
  padding: 30px;
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
  padding-top: 60px;
  padding-bottom: 80px;
  & :deep(.nft-card) {
    background-color: $colorBgTextBlack;
  }

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
