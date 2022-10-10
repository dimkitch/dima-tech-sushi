<template>
  <div class="product-card">
    <div class="product-card__header">
      <img :src="cardData.image" class="product-card__image" />
    </div>
    <div class="product-card__wrapper">
      <div class="product-card__content color-light">
        <nuxt-link :to="{ name: 'product-id', params: { id: cardData.id } }"
          ><h3 class="product-card__title title-md bold color-light">
            {{ cardData.title }}
          </h3></nuxt-link
        >
        <div class="product-card__rate">
          <StarIcon class="product-card__icon" />
          <StarIcon class="product-card__icon" />
          <StarIcon class="product-card__icon" />
          <StarIcon class="product-card__icon" />
          <StarIcon class="product-card__icon" />
          <span class="color-light-simple text-md">(67)</span>
        </div>
        <p class="product-card__comment text-xl">{{ cardData.description }}</p>
      </div>
      <div class="product-card__controls">
        <CustomButton
          size="nr"
          theme="light"
          @click="$emit('showDiscountProduct', cardData.id)"
        >
          <p class="text-nr fw-bold lh">Купить на ozon</p>
        </CustomButton>
        <CustomButton size="nr" theme="light">
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
    },
  },
};
</script>

<style lang="scss">
.product-card {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  @media (max-width: $breakpoint-tablet) {
    margin: 0 auto;
  }

  // .product-card__header
  &__header {
    display: flex;
    justify-content: center;
    background: $color-success;
    border-radius: 15px 15px 0px 0px;
  }

  // .product-card__wrapper
  &__wrapper {
    border: 2px solid $color-success-simple;
    border-radius: 0px 0px 15px 15px;
    border-top: none;
    background-color: $color-primary;
  }

  //   .product-card__content
  &__content {
    padding: 25px 43px 0 43px;
    @media (max-width: $breakpoint-tablet) {
      padding: 28px 28px 0 28px;
    }
  }

  // .product-card__image
  &__image {
    border-radius: 15px 15px 0px 0px;
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: top;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 0 auto;
    justify-content: center;
    margin: 0 41px 41px 41px;
    @media (max-width: $breakpoint-mob) {
      margin: 0 15px 25px 15px;
    }
  }
}
</style>
