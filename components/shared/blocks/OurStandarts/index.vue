<template>
  <section class="our-standarts">
    <div class="container">
      <div class="our-standarts__header">
        <h3 class="our-standarts__title title-xl fw-heavy">
          {{ standartData.title }}
        </h3>
      </div>
      <div class="our-standarts__body">
        <QualitiStandart
          v-for="(standart, index) in standartData.features"
          :key="index"
          :standartData="standart"
        />
      </div>
    </div>
  </section>
</template>
<script>
import QualitiStandart from "@/components/shared/blocks/OurStandarts/QualitiStandart.vue";
export default {
  components: {
    QualitiStandart,
  },
  props: {
    standartData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.our-standarts {
  // .our-standarts__header
  &__header {
    text-align: center;
    margin-bottom: 55px;
  }

  // .our-standarts__body
  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px 15px;
    @media (max-width: $breakpoint-desktop-md) {
      grid-template-columns: 1fr;
      gap: 34px;
    }
  }
}
</style>
