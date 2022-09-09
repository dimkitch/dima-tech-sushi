<template>
  <div class="our-cycles-manufacturing">
    <div class="container">
      <div class="our-cycles-manufacturing__header">
        <h3 class="our-cycles-manufacturing__title title-xl fw-heavy">
          {{ ourCyclesManufacturingData.title }}
        </h3>
        <p
          class="our-cycles-manufacturing__subtitle text-xmd color-secondary-deep-light"
        >
          {{ ourCyclesManufacturingData.description }}
        </p>
      </div>
      <div class="our-cycles-manufacturing__body">
        <CyclesCard
          class="our-cycles-manufacturing__cycles-card"
          v-for="card in ourCyclesManufacturingData.features"
          :key="`cycle-card-${card.id}`"
          :standartData="card"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CyclesCard from "@/components/pages/ManufacturingCycle/OurCyclesManufacturing/CyclesCard.vue";

export default {
  components: { CyclesCard },
  props: {
    ourCyclesManufacturingData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.our-cycles-manufacturing {
  // .our-cycles-manufacturing__header
  &__header {
    margin-bottom: 80px;
  }
  //    .our-cycles-manufacturing__title
  &__title {
    margin-bottom: 30px;
  }
  // .our-cycles-manufacturing__cycles-card
  &__cycles-card {
    &:not(:last-child) {
      margin-bottom: 70px;
      @media (max-width: $breakpoint-desktop-md) {
        margin-bottom: 0;
      }
    }
  }
  &__body {
  }
}
</style>
