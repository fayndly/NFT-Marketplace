<template>
  <NFTCard
    class="card-nft"
    v-for="nftOwned in nfts_owned"
    :key="nftOwned.id"
    :id="nftOwned.id"
    :imagePath="nftOwned.imagePath"
    :name="nftOwned.name"
    :price="nftOwned.price"
    :highest_bid="nftOwned.highest_bid"
    :isAdaptive="getScreenSize <= 834"
  />
</template>

<script>
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "ArtistCollection",
  mixins: [screenHandler],
  data() {
    return {
      nfts_owned: [
        {
          id: 123,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 1234,
          highest_bid: 123,
        },
        {
          id: 234,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 234,
          highest_bid: 4323,
        },
        {
          id: 345,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
        {
          id: 234534,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 1234,
          highest_bid: 123,
        },
        {
          id: 2356567332,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 234,
          highest_bid: 4323,
        },
        {
          id: 56456,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
        {
          id: 235547567123,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 1234,
          highest_bid: 123,
        },
        {
          id: 6778546457,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 234,
          highest_bid: 4323,
        },
        {
          id: 563452467,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
      ],
    };
  },
};
</script>
