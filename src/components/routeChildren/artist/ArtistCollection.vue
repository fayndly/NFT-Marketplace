<template>
  <gridWrapper class="card-wrapper">
    <!-- <collectionCard
      class="card-collection"
      v-for="collection in artistCollections"
      :key="collection.id"
      :nfts="collection.nfts"
      :artist="collection.artist"
      :name="collection.name"
      :isAdaptive="getScreenSize <= 834"
    /> -->
  </gridWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "ArtistCollection",
  mixins: [screenHandler],
  props: {
    artistCollections: {
      type: Array,
    },
  },
};
</script>
