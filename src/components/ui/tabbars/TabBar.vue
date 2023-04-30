<template>
  <div class="tab-bar">
    <TabComponent
      v-for="tab in tabs"
      :text="tab"
      :key="tab.key"
      @clickTab="choseTab"
      :class="{ 'tab--active': tab === activeTab }"
    />
  </div>
</template>

<script>
import TabComponent from "@/components/ui/tabbars/TabComponent.vue";
export default {
  name: "TabBar",
  props: {
    tabs: {
      type: Array,
    },
    counter: {
      type: Boolean,
    },
  },
  data() {
    return {
      activeTab: this.tabs[0],
    };
  },
  components: { TabComponent },
  methods: {
    choseTab(text) {
      this.activeTab = text;
      this.$emit("choseTab", text);
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
