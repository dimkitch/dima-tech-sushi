<template>
  <section class="our-benefits">
    <div class="container">
      <div class="our-benefits__header">
        <h2
          class="our-benefits__title title-xl color-dark-deep tf-up lsp fw-heavy"
        >
          {{ ourBenefitsData.title }}
        </h2>
      </div>
      <div class="our-benefits__body">
        <BenefitCard
          class="our-benefits__item"
          v-for="(card, index) in ourBenefitsData.ourBenefitsCards"
          :key="index"
          :benefitData="card"
        />
      </div>
    </div>
  </section>
</template>
<script>
import BenefitCard from "@/components/shared/blocks/OurBenefits/BenefitCard.vue";
export default {
  components: {
    BenefitCard,
  },
  props: {
    ourBenefitsData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.our-benefits {
  // .our-benefits__title
  &__title {
    margin-bottom: 38px;
  }
  // .our-benefits__body
  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 29px;
    @media (max-width: $breakpoint-tablet) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  }
  // .our-benefits__item
  &__item {
    background-color: $color-primary;

    &:nth-child(2n) {
      background-color: $color-accent;
    }
    &:nth-child(3n) {
      background-color: $color-success;
    }
  }
}
</style>
