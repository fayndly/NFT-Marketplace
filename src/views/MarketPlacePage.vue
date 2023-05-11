<template>
  <mainWrapper>
    <sectionWrapper>
      <HeaderSection
        headerName="Browse Marketplace"
        headerText="Browse through more than 50k NFTs on the NFT Marketplace."
      />
      <SearchForm />
    </sectionWrapper>
    <sectionWrapper class="tabbar-wrapper">
      <TabBar :tabs="tabs" @choseTab="openTab" />
    </sectionWrapper>
    <sectionWrapper class="section-list">
      <gridWrapper class="card-wrapper" v-if="activeTab === 'NFTs'">
        <NFTCard
          class="card-nft"
          v-for="nft in nfts"
          :key="nft.id"
          :id="nft.id"
          :imagePath="nft.imagePath"
          :name="nft.name"
          :price="nft.price"
          :highest_bid="nft.highest_bid"
          :isAdaptive="getScreenSize <= 834"
        />
      </gridWrapper>
      <gridWrapper class="card-wrapper" v-else-if="activeTab === 'Collections'">
        <collectionCard
          class="card-collection"
          v-for="collection in collections"
          :key="collection.id"
          :nfts="collection.nfts"
          :artist="collection.artist"
          :name="collection.name"
          :isAdaptive="getScreenSize <= 834"
        />
      </gridWrapper>
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import TabBar from "@/components/ui/tabbars/TabBar.vue";
import HeaderSection from "@/components/ui/HeaderSection.vue";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "MarketPlacePage",
  components: { HeaderSection, TabBar },
  mixins: [screenHandler],
  data() {
    return {
      tabs: ["NFTs", "Collections"],
      activeTab: "NFTs",
      nfts: [
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
          id: 456,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
        {
          id: 567,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
        {
          id: 678,
          imagePath:
            "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
          name: "cap robot1",
          price: 345,
          highest_bid: 435,
        },
      ],
      collections: [
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 125467546354,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 56856235,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 456546734,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 546753,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Roboform",
          },
          name: "Samurai robots",
          id: 27346821423,
        },
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 38974589723,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 2364786278364,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 12309123,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 485768712,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 28937478365,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 1290389089,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Black Null",
          },
          name: "Slime",
          id: 34858273428350,
        },
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 234346322,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 4564735346,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 78634534,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Run",
          },
          name: "Running Basketbaal",
          id: 23645369457,
        },
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 234346322,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 4564735346,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 78634534,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Run",
          },
          name: "Running Basketbaal",
          id: 343423542346,
        },
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 234346322,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 4564735346,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 78634534,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Run",
          },
          name: "Running Basketbaal",
          id: 56745647,
        },
        {
          nfts: [
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 234346322,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 4564735346,
            },
            {
              image:
                "https://assets.raribleuserdata.com/prod/v1/image/t_image_big/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvUW1SWG9oclY0c051MlN0amIzbzVVOGFrZXZXalQxSFhFUzVQOXg3cldGNTI3Ng==",
              id: 78634534,
            },
          ],
          artist: {
            photo:
              "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
            name: "Run",
          },
          name: "Running Basketbaal",
          id: 45745235357,
        },
      ],
    };
  },
  methods: {
    openTab(text) {
      this.activeTab = text;
    },
  },
};
</script>

<style lang="scss" scoped>
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
