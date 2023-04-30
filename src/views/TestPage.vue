<template>
  <mainWrapper>
    <NFTHighlightSection />
  </mainWrapper>
</template>

<script>
import NFTHighlightSection from "@/components/sections/HomePage/NFTHighlightSection.vue";
export default {
  name: "TestPage",
  components: {
    NFTHighlightSection,
  },
};
</script>

<style>
.test {
  display: none;
}
</style>
