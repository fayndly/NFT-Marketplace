<template>
  <mainWrapper>
    <CreateAccountSection />
  </mainWrapper>
</template>

<script>
import CreateAccountSection from "@/components/sections/ConnectPages/CreateAccountSection.vue";
export default {
  name: "CreateAccountPage",
  components: { CreateAccountSection },
  data() {
    return {
      categories: [
        {
          name: "hello",
        },
      ],
    };
  },
};
</script>

<style lang="scss"></style>
