<template>
  <div class="tab-bar">
    <TabComponent
      v-for="tab in tabs"
      :key="tab.key"
      :name="tab.name"
      :nameRouteTo="tab.nameRouteTo"
      :haveCounter="haveCounters"
      :counter="tab.counter"
    />
  </div>
</template>

<script>
import TabComponent from "@/components/ui/tabbars/TabComponent.vue";

export default {
  name: "TabBar",
  components: { TabComponent },
  props: {
    tabs: {
      type: Array,
    },
    haveCounters: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-bar {
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  align-content: stretch;
}
</style>
