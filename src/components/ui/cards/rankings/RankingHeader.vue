<template>
  <div class="ranking-header">
    <div class="ranking-header__rank-artist">
      <p class="ranking-header__rank">#</p>
      <p class="ranking-header__artist">Artist</p>
    </div>
    <div class="ranking-header__stats">
      <p class="ranking-header__stats-item">Change</p>
      <p class="ranking-header__stats-item">NFTs Sold</p>
      <p class="ranking-header__stats-item">Volume</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankingHeader",
};
</script>

<style lang="scss" scoped>
.ranking-header {
  display: flex;
  align-items: center;
  border: 1px solid $colorBgTextSilverBlack;
  border-radius: 20px;
  padding: 12px 20px;
  &__rank-artist {
    flex-grow: 1;
    display: flex;
    gap: 20px;
  }
  &__rank,
  &__artist {
    font-family: $fontSpaceMono;
    @include base;
    color: $colorBgTextSilverWhite;
  }
  &__rank {
    text-align: center;
    width: 30px;
  }
  &__stats {
    display: flex;
  }
  &__stats-item {
    font-family: $fontSpaceMono;
    @include base;
    width: 160px;
    color: $colorBgTextSilverWhite;
  }
}
</style>
