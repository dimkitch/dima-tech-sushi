<template>
  <article class="similar-products">
    <div class="container">
      <div class="similar-products__header">
        <h3 class="similar-products__title title-xl fw-heavy tf-up">
          {{ productsData.title }}
        </h3>
        <div class="similar-products__action">
          <div class="similar-products__action-item">
            <CustomButton size="round" theme="primary"
              ><ArrowRight />
            </CustomButton>
          </div>
          <div class="similar-products__action-item">
            <CustomButton size="round" theme="primary"
              ><ArrowRight />
            </CustomButton>
          </div>
        </div>
      </div>
      <div class="similar-products__body">
        <ProductCard
          v-for="card in productsData.cards"
          :key="`similar-products-${card.id}`"
          :cardData="card"
        />
      </div>
    </div>
  </article>
</template>
<script>
import CustomButton from "@/components/common/controls/CustomButton.vue";
import ArrowLeft from "@/components/common/icons/ArrowLeft.vue";
import ArrowRight from "@/components/common/icons/ArrowRight.vue";
import ProductCard from "@/components/shared/cards/ProductCard.vue";
export default {
  components: {
    CustomButton,
    ArrowLeft,
    ArrowRight,
    ProductCard,
  },
  props: {
    productsData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.similar-products {
  // .similar-products__header
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  // .similar-products__title
  // .similar-products__action
  &__action {
    display: flex;
  }
  // .similar-products__action-item
  &__action-item {
    @media (max-width: $breakpoint-tablet) {
      display: none;
    }
    &:not(:last-child) {
      margin-right: 25px;
    }
  }
  // .similar-products__body
  &__body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media (max-width: $breakpoint-desktop-md) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: $breakpoint-tablet) {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }
}
</style>
