<template>
  <section class="our-benefits">
    <div class="container">
      <div class="our-benefits__header">
        <h2
          class="our-benefits__title title-xl color-dark-deep tf-up lsp fw-heavy"
        >
          Наши преимущества
        </h2>
      </div>
      <div class="our-benefits__body">
        <BenefitCard
          class="our-benefits__item"
          v-for="(card, index) in benefitList"
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
  data() {
    return {
      benefitList: [
        {
          title: "Преимущество1",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Преимущество2",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
        {
          title: "Преимущество3",
          info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        },
      ],
    };
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
    display: flex;
  }
  // .our-benefits__item
  &__item {
    background-color: $color-primary;
    &:not(:last-child) {
      margin-right: 29px;
    }
    &:nth-child(2n) {
      background-color: $color-accent;
    }
    &:nth-child(3n) {
      background-color: $color-success;
    }
  }
}
</style>
