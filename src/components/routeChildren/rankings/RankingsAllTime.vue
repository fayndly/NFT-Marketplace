<template>
  <sectionWrapper class="section-list">
    <loaderSection
      v-if="loading || loadingError"
      :isLoading="loading"
      :isError="loadingError"
      :errorText="loadingErrorText"
    />
    <listWrapper class="rankings" v-else-if="!loadingError">
      <RankingHeader />
      <RankingItem
        v-for="(ranking, index) in rankingsAllTime"
        :key="index"
        :number="index + 1"
        :artistId="ranking.id"
        :artistName="ranking.name"
        :artistAvatar="ranking.avatar"
        :change="ranking.stats.stats_change"
        :sold="ranking.stats.stats_sold"
        :volume="ranking.stats.stats_volume_rankings"
      />
    </listWrapper>
  </sectionWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RankingsAllTime",
  mixins: [screenHandler],
  methods: { ...mapActions(["fetchRankingTopRatedArtists"]) },
  computed: { ...mapGetters(["getRankingTopRatedArtists"]) },
  data() {
    return {
      rankingsAllTime: null,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),
    };
  },
  async mounted() {
    await this.fetchRankingTopRatedArtists("allTime")
      .then(() => {
        this.rankingsAllTime = this.getRankingTopRatedArtists("allTime");
        this.loading = false;
      })
      .catch((err) => {
        this.loadingError = true;
        this.loadingErrorText = err;
      });
  },
};
</script>
