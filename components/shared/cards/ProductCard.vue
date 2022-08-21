<template>
  <div class="product-card">
    <div class="product-card__header">
      <img :src="cardData.image" class="product-card__image" />
    </div>
    <div class="product-card__content color-light">
      <h3 class="product-card__title title-md bold">{{ cardData.name }}</h3>
      <div class="product-card__rate">
        <StarIcon class="product-card__icon" />
        <StarIcon class="product-card__icon" />
        <StarIcon class="product-card__icon" />
        <StarIcon class="product-card__icon" />
        <StarIcon class="product-card__icon" />
        <span class="color-light-simple text-md">(67)</span>
      </div>
      <p class="product-card__comment text-xl">{{ cardData.info }}</p>

      <div class="product-card__controls">
        <CustomButton class="product-card__btn" size="nr" theme="light">
          <p class="text-nr fw-bold lh">Купить на OZON</p>
        </CustomButton>
        <CustomButton class="product-card__btn" size="nr" theme="light">
          <p class="text-nr fw-bold lh">Купить на WB</p>
        </CustomButton>
      </div>
    </div>
  </div>
</template>
<script>
import StarIcon from "@/components/common/icons/StarIcon.vue";
import CustomButton from "@/components/common/controls/CustomButton.vue";
export default {
  components: {
    CustomButton,
    StarIcon,
  },
  props: {
    cardData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  // .product-card__header
  &__header {
    display: flex;
    justify-content: center;
    background: $color-success;
    border-radius: 15px 15px 0px 0px;
  }
  //   .product-card__content
  &__content {
    background-color: $color-primary;
    border-radius: 0px 0px 15px 15px;
    border: 2px solid $color-success-simple;
    border-top: none;
    padding: 25px 43px 41px 43px;
  }
  // .product-card__image
  &__image {
    border-radius: 15px 15px 0px 0px;
    width: 100%;
  }
  // .card__icon
  &__icon {
    &:not(:last-child) {
      margin-right: 3px;
    }
  }

  // .card__title
  &__title {
    margin-bottom: 4px;
  }

  // .card__rate
  &__rate {
    margin-bottom: 20px;
  }
  //   .card__comment
  &__comment {
    margin-bottom: 30px;
  }
  // .card__controls
  &__controls {
    display: flex;
    justify-content: space-between;
  }
  // .product-card__btn
  &__btn {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}
</style>
