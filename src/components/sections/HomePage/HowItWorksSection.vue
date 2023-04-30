<template>
  <sectionWrapper>
    <HeaderSection
      headerName="How it works"
      headerText="Find out how to get started"
    />
    <gridWrapper class="info-cards-wrapper">
      <infoCard
        v-for="infoCard in infoCards"
        :key="infoCard.key"
        :icon="infoCard.icon"
        :header="infoCard.header"
        :text="infoCard.text"
      />
    </gridWrapper>
  </sectionWrapper>
</template>

<script>
export default {
  name: "HowItWorksSection",
  data() {
    return {
      infoCards: [
        {
          icon: "Setup Wallet Icon.svg",
          header: "Setup Your wallet",
          text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
        },
        {
          icon: "Create Collection Icon.svg",
          header: "Create Collection",
          text: "Upload your work and setup your collection. Add a description, social links and floor price.",
        },
        {
          icon: "Start Earning Icon.svg",
          header: "Start Earning",
          text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.info-cards-wrapper {
  align-items: stretch;
  @include ScreenSizeMobile {
    gap: 20px;
  }
}
</style>
