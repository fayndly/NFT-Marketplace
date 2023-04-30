<template>
  <section class="section">
    <div class="section__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: "sectionWrapper",
};
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 80px 0px;

  @include ScreenSizeLaptop {
    padding: 40px 0px;
  }
  @include ScreenSizeMobile {
    padding: 40px 30px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 60px;

    @include ScreenSizePC {
      width: 1050px;
    }
    @include ScreenSizeLaptop {
      width: 690px;
    }
    @include ScreenSizeLaptopMini {
      width: 500px !important;
      // background-color: black;
    }
    @include ScreenSizeMobile {
      width: 100%;
    }
  }
}
</style>
