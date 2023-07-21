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
        v-for="(ranking, index) in rankingWeek"
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
  name: "RankingWeek",
  mixins: [screenHandler],
  methods: { ...mapActions(["fetchRankingTopRatedArtists"]) },
  computed: { ...mapGetters(["getRankingTopRatedArtists"]) },
  data() {
    return {
      rankingWeek: null,
      loading: true,
      loadingError: false,
      loadingErrorText: Error(""),
    };
  },
  async mounted() {
    await this.fetchRankingTopRatedArtists("thisWeek")
      .then(() => {
        this.rankingWeek = this.getRankingTopRatedArtists("thisWeek");
        this.loading = false;
      })
      .catch((err) => {
        this.loadingError = true;
        this.loadingErrorText = err;
      });
  },
};
</script>
