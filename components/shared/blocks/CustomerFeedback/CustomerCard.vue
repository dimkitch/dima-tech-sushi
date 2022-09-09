<template>
  <div class="customer-card">
    <div class="customer-card__left-part">
      <Quotes />
      <h4 class="customer-card__title title-msxl fw-medium color-dark-basalt">
        {{ customerData.title }}
      </h4>
      <p class="customer-card__subtitle text-md color-secondary-deep-dark">
        {{ customerData.description }}
      </p>
    </div>
    <div class="customer-card__right-part">
      <img class="customer-card__image" :src="customerData.author.image" />
      <p class="customer-card__name color-dark-basalt text-xsm">
        {{ customerData.author.name }}
      </p>
      <p class="customer-card__city text-md color-light-dark">
        {{ customerData.author.location }}
      </p>
    </div>
  </div>
</template>
<script>
import Quotes from "@/components/common/icons/Quotes.vue";
export default {
  components: {
    Quotes,
  },
  props: {
    customerData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.customer-card {
  display: grid;
  gap: 54px;
  grid-template-columns: 460px 380px;
  border: 2px solid $color-light-deep;
  box-shadow: 2px 8px 16px $color-primary-deep-light;
  border-radius: 5px;
  padding: 70px 143px;
  background: $color-light;
  width: 1180px;
  @media (max-width: $breakpoint-tablet) {
    display: flex;
    flex-wrap: wrap;
    box-shadow: none;
    border: none;
  }
  //   .customer-card__left-part
  &__left-part {
    @media (max-width: $breakpoint-tablet) {
      order: 1;
    }
  }
  //   .customer-card__right-part
  &__right-part {
    @media (max-width: $breakpoint-tablet) {
      order: -1;
    }
  }
  // .customer-card__title
  &__title {
    margin-top: 30px;
    margin-bottom: 24px;
  }
  // .customer-card__right-part
  &__right-part {
    display: block;
    text-align: center;
  }

  // .customer-card__image
  &__image {
    border-radius: 50%;
    width: 380px;
    height: 380px;
    object-fit: cover;
    object-position: center;
  }
  //   .customer-card__name
  &__name {
    margin-top: 30px;
    margin-bottom: 6px;
  }
}
</style>
