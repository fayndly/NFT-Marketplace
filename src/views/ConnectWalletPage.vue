<template>
  <mainWrapper>
    <ConnectWalletSection />
  </mainWrapper>
</template>

<script>
import ConnectWalletSection from "@/components/sections/ConnectPages/ConnectWalletSection.vue";
export default {
  name: "ConnectWalletPage",
  components: { ConnectWalletSection },
  data() {
    return {
      categories: [
        {
          name: "hello",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
