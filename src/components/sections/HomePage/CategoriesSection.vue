<template>
  <sectionWrapper class="categories">
    <HeaderSection headerName="Browse Categories" />
    <gridWrapper class="cards-wrapper">
      <categoryCard
        v-for="categoria in categories"
        :icon="categoria.icon"
        :image="categoria.image"
        :name="categoria.name"
        :key="categoria.key"
        :isMobile="getScreenDevice == 'tablet'"
        :isAdaptive="getScreenSize <= 834"
      />
    </gridWrapper>
  </sectionWrapper>
</template>

<script>
import HeaderSection from "../../ui/HeaderSection.vue";
import screenHandler from "@/mixins/screenHandler";

export default {
  name: "CategoriesSection",
  components: { HeaderSection },
  mixins: [screenHandler],
  data() {
    return {
      categories: [
        {
          name: "Art",
          image: "/images/content/categories/1.jpg",
          icon: "PaintBrush.svg",
        },
        {
          name: "Collectibles",
          image: "/images/content/categories/2.jpg",
          icon: "Swatches.svg",
        },
        {
          name: "Music",
          image: "/images/content/categories/3.jpg",
          icon: "MusicNotes.svg",
        },
        {
          name: "Photography",
          image: "/images/content/categories/4.jpg",
          icon: "Camera.svg",
        },
        {
          name: "Video",
          image: "/images/content/categories/5.jpg",
          icon: "VideoCamera.svg",
        },
        {
          name: "Utility",
          image: "/images/content/categories/6.jpg",
          icon: "MagicWand.svg",
        },
        {
          name: "Sport",
          image: "/images/content/categories/7.jpg",
          icon: "Basketball.svg",
        },
        {
          name: "Virtual Worlds",
          image: "/images/content/categories/8.jpg",
          icon: "Planet.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cards-wrapper {
  @include ScreenSizeMobile {
    gap: 20px !important;
  }
}
</style>
