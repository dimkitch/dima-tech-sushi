<template>
  <div class="customer-card">
    <div class="customer-card__wrapper">
      <div class="customer-card__inner">
        <div class="customer-card__left-part">
          <Quotes />
          <h4
            class="customer-card__title title-msxl fw-medium color-dark-basalt"
          >
            {{ customerData.title }}
          </h4>
          <p class="customer-card__subtitle text-md color-secondary-deep-dark">
            {{ customerData.description }}
          </p>
        </div>
        <div class="customer-card__right-part">
          <img class="customer-card__image" :src="customerData.author.image" />
          <p class="customer-card__name color-dark-basalt text-xsm fw-bold">
            {{ customerData.author.name }}
          </p>
          <p class="customer-card__city text-md color-light-dark">
            {{ customerData.author.location }}
          </p>
        </div>
      </div>
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
  // .customer-card__wrapper
  &__wrapper {
    width: 100%;
    background: $color-light;
    border: 2px solid $color-light-deep;
    box-shadow: 2px 8px 16px $color-primary-deep-light;
    border-radius: 5px;
    margin: 0 auto;
    @media (max-width: $breakpoint-desktop-md) {
      max-width: 1180px;
    }
    @media (max-width: $breakpoint-desktop-md) {
      box-shadow: none;
      border: none;
    }
  }
  // .customer-card__inner
  &__inner {
    display: flex;
    justify-content: space-between;
    margin: 70px 143px;
    @media (max-width: $breakpoint-desktop-md) {
      display: flex;
      flex-wrap: wrap;
      box-shadow: none;
      border: none;
      margin: 0;
    }
    @media (max-width: $breakpoint-tablet-md) {
      margin: 0;
    }
  }
  //   .customer-card__left-part
  &__left-part {
    margin-right: 54px;

    @media (max-width: $breakpoint-desktop-md) {
      order: 1;
      margin-right: 0;
    }
  }
  //   .customer-card__right-part
  &__right-part {
    @media (max-width: $breakpoint-desktop-md) {
      order: -1;
      margin: 0 auto;
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
    @media (max-width: $breakpoint-desktop-md) {
      margin-bottom: 11px;
    }
  }

  // .customer-card__image
  &__image {
    border-radius: 50%;
    width: 380px;
    height: 380px;
    object-fit: cover;
    object-position: center;
    @media (max-width: $breakpoint-desktop-md) {
      order: -1;
      margin: 0 auto;
    }
    @media (max-width: $breakpoint-tablet-md) {
      width: 200px;
      height: 200px;
    }
  }
  //   .customer-card__name
  &__name {
    margin-top: 30px;
    margin-bottom: 6px;
  }
}
</style>
