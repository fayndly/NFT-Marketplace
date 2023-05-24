<template>
  <listWrapper class="rankings">
    <RankingHeader />
    <RankingItem
      v-for="(ranking, index) in rankingsToday"
      :key="index"
      :number="index + 1"
      :artist="ranking"
      :change="ranking.stats.stats_change"
      :sold="ranking.stats.stats_sold"
      :volume="ranking.stats.stats_volume_rankings"
    />
  </listWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "RankingsToday",
  mixins: [screenHandler],
  props: {
    rankingsToday: {
      type: Array,
    },
  },
};
</script>
