<template>
  <gridWrapper class="card-wrapper">
    <NFTCard
      class="card-nft"
      v-for="nftCreated in getArtistNftsOwned()"
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
  props: {
    artistNftsOwned: {
      type: Array,
    },
  },
  methods: {
    getArtistNftsOwned() {
      const nftsOwned = [];
      this.artistNftsOwned.forEach((el) => {
        nftsOwned.push(this.$store.getters.getNftCard(el));
      });
      console.log(nftsOwned);
      return nftsOwned;
    },
  },
};
</script>
