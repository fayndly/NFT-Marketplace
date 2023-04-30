<template>
  <mainWrapper>
    <HelloSection />
    <TrendingCollectionSection />
    <TopCreatorsSection />
    <CategoriesSection />
    <DiscoverNFTsSection />
    <NFTHighlightSection />
    <HowItWorksSection />
    <SubscribeWidgetSection />
  </mainWrapper>
</template>

<script>
import HelloSection from "@/components/sections/HomePage/HelloSection.vue";
import TrendingCollectionSection from "@/components/sections/HomePage/TrendingCollectionSection.vue";
import TopCreatorsSection from "@/components/sections/HomePage/TopCreatorsSection.vue";
import CategoriesSection from "@/components/sections/HomePage/CategoriesSection.vue";
import DiscoverNFTsSection from "@/components/sections/HomePage/DiscoverNFTsSection.vue";
import NFTHighlightSection from "@/components/sections/HomePage/NFTHighlightSection.vue";
import HowItWorksSection from "@/components/sections/HomePage/HowItWorksSection.vue";
import SubscribeWidgetSection from "@/components/sections/HomePage/SubscribeWidgetSection.vue";

export default {
  name: "HomePage",
  components: {
    HelloSection,
    TrendingCollectionSection,
    TopCreatorsSection,
    CategoriesSection,
    DiscoverNFTsSection,
    NFTHighlightSection,
    HowItWorksSection,
    SubscribeWidgetSection,
  },
};
</script>
