<template>
  <sectionWrapper>
    <HeaderSection
      headerName="Top creators"
      headerText="Checkout Top Rated Creators on the NFT Marketplace"
    >
      <template #button>
        <ButtonDefault
          type="secondary"
          modifier="outlined"
          icon="RocketLaunch"
          text="View Rankings"
          @clickButton="console.log('click')" /></template
    ></HeaderSection>
    <gridWrapper
      v-if="ScreenSize == 'desctop'"
      class="cards-wrapper cards-wrapper-desctop"
    >
      <artistCard
        v-for="(artist, index) in artists"
        :key="artist.id"
        :photo="artist.photo"
        :name="artist.name"
        :total_sales="artist.totalSales"
        :number="index + 1"
        :id="artist.id"
      />
    </gridWrapper>
    <gridWrapper v-else class="cards-wrapper cards-wrapper-laptop">
      <artistCard
        v-for="(artist, index) in artists"
        :key="artist.id"
        :photo="artist.photo"
        :name="artist.name"
        :total_sales="artist.totalSales"
        :number="index + 1"
        :id="artist.id"
        size="big"
      />
    </gridWrapper>
    <ButtonDefault
      class="button-bottom"
      type="secondary"
      modifier="outlined"
      icon="RocketLaunch"
      text="View Rankings"
      @clickButton="console.log('click')"
    />
  </sectionWrapper>
</template>

<script>
import HeaderSection from "../../ui/HeaderSection.vue";
export default {
  name: "TopCreatorsSection",
  components: { HeaderSection },
  computed: {
    ScreenSize() {
      return this.$store.getters.GetScreenSize;
    },
  },
  data() {
    return {
      artists: [
        {
          name: "Keepitreal",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 34.53,
          id: 1234,
        },
        {
          name: "DigiLab",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 35.46,
          id: 2345,
        },
        {
          name: "GravityOne",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 40.06,
          id: 3456,
        },
        {
          name: "Juanie",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 44.36,
          id: 4567,
        },
        {
          name: "BlueWhale",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 42.16,
          id: 5678,
        },
        {
          name: "mr fox",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 30.07,
          id: 7890,
        },
        {
          name: "Shroomie",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 20.56,
          id: 9101,
        },
        {
          name: "Robotica",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 55.45,
          id: 1011,
        },
        {
          name: "RustyRobot",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 212.06,
          id: 1112,
        },
        {
          name: "Animakid",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 10.36,
          id: 1213,
        },
        {
          name: "Dotgu",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 100.33,
          id: 1314,
        },
        {
          name: "Ghiblier",
          photo:
            "https://assets.raribleuserdata.com/prod/v1/image/t_avatar_big/aHR0cHM6Ly9pLnNlYWRuLmlvL2djcy9maWxlcy8xNjE5YjAzM2M0NTNmZTM2YzVkOWUyYWM0NTEzNzlhNy5wbmc/dz01MDAmYXV0bz1mb3JtYXQ=",
          totalSales: 35.37,
          id: 1415,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.button-bottom {
  display: none;
  width: 100%;
  max-width: 350px;
  align-self: center;
  @include ScreenSizeMobile {
    display: flex;
  }
}

.cards-wrapper {
  @include ScreenSizeLaptop {
    .artist-card:nth-child(n + 7) {
      display: none;
    }
  }
  @include ScreenSizeMobile {
    .artist-card:nth-child(n + 6) {
      display: none;
    }
    &-laptop {
      .artist-card {
        width: 100%;
        max-width: 350px;
      }
    }
  }
}
</style>
