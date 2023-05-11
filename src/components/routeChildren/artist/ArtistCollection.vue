<template>
  <collectionCard
    class="card-collection"
    v-for="collection in collections"
    :key="collection.id"
    :nfts="collection.nfts"
    :artist="collection.artist"
    :name="collection.name"
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
      ],
    };
  },
};
</script>
