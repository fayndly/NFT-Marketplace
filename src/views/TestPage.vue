<template>
  <mainWrapper>
    <sectionWrapper class="hello-section">
      <highlightedNFT
        class="test"
        image="/images/content/ufo.webp"
        name="Space Walking"
        :size="getScreanSize"
      />
    </sectionWrapper>
  </mainWrapper>
</template>

<script>
import screenHandler from "@/mixins/screenHandler";
export default {
  name: "TestPage",
  mixins: [screenHandler],
  computed: {
    getScreanSize() {
      if (this.getScreenDevice == "tablet") {
        return "adaptive";
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
.hello-section {
  &:deep(.section__content) {
    flex-direction: row;
    gap: 30px;
  }
  @include ScreenSizeMobile {
    &:deep(.section__content) {
      flex-direction: column;
      gap: 40px;
    }
  }
}
.test {
  align-self: center;
}
</style>
