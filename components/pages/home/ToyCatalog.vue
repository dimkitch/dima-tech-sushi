<template>
  <div class="toy-catalog">
    <div class="container">
      <div class="toy-catalog__wrapper">
        <div class="toy-catalog__content">
          <h1 class="toy-catalog__title title-sm color-primary fw-bold tf-up">
            {{ sliderList.title }}
          </h1>
          <p class="toy-catalog__text text-xl color-dark-simple">
            {{ sliderList.description }}
          </p>
          <div class="toy-catalog__action">
            <CustomButton size="xsm" theme="accent"> Каталог </CustomButton>
          </div>
        </div>
        <div>
          <Slider :sliderList="sliderList" class="toy-catalog__slider" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/common/controls/CustomButton.vue";
import Slider from "@/components/pages/home/Slider.vue";

export default {
  components: {
    CustomButton,
    Slider,
  },
  props: {
    sliderList: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.toy-catalog {
  // .toy-catalog__wrapper
  &__wrapper {
    display: grid;
    grid-template-columns: 655px 635px;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    border-bottom: 1px solid $color-primary;
    padding-bottom: 110px;
    @media (max-width: $breakpoint-tablet) {
      display: block;
    }
    @media (max-width: $breakpoint-mob) {
      padding: 0;
      border-bottom: none;
    }
  }
  // .toy-catalog__content
  &__content {
    @media (max-width: $breakpoint-tablet) {
      margin: 50px;
    }
  }
  //   .toy-catalog__title
  &__title {
    margin-bottom: 30px;
    @media (max-width: $breakpoint-mob) {
      margin-bottom: 20px;
      font-size: 30px;
      line-height: 35px;
      letter-spacing: 0.07em;
    }
  }
  //   .toy-catalog__text
  &__text {
    margin-bottom: 42px;
    @media (max-width: $breakpoint-mob) {
      margin-bottom: 30px;
    }
  }
  // .toy-catalog__slider
  &__slider {
    border-radius: 50px;
    @media (max-width: $breakpoint-mob) {
      display: none;
    }
  }
}
</style>
