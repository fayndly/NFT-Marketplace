<template>
  <gridWrapper class="card-wrapper">
    <NFTCard
      class="card-nft"
      v-for="nftCreated in artistNftsCreatedCards"
      :key="nftCreated.id"
      :id="nftCreated.id"
      :imagePath="nftCreated.image_path"
      :name="nftCreated.name"
      :price="nftCreated.price"
      :highest_bid="nftCreated.highest_bid"
      :artistId="nftCreated.id_creator"
      :isAdaptive="getScreenSize <= 834"
    />
  </gridWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "ArtistCollection",
  mixins: [screenHandler],
  data() {
    return {
      artistNftsCreatedCards: [],
    };
  },
  props: {
    artistNftsCreated: {
      type: Array,
    },
  },
  mounted() {
    const nftsCreated = [];
    this.artistNftsCreated.forEach((el) => {
      nftsCreated.push(this.$store.getters.getNftCard(el));
    });
    this.artistNftsCreatedCards = nftsCreated;
  },
};
</script>
