<template>
  <div class="toy-catalog">
    <div class="container">
      <div class="toy-catalog__inner">
        <div class="toy-catalog__content">
          <h1 class="toy-catalog__title title-sm color-primary fw-bold tf-up">
            {{ sliderList.title }}
          </h1>
          <p class="toy-catalog__description text-xl color-dark-simple">
            {{ sliderList.description }}
          </p>
          <div class="toy-catalog__action">
            <CustomButton size="xsm" theme="accent"> Каталог </CustomButton>
          </div>
        </div>

        <div class="toy-catalog__wrapper">
          <Slider class="toy-catalog__slider" :sliderList="sliderList" />
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
  // .toy-catalog__inner
  &__inner {
    display: grid;
    grid-template-columns: 655px 46%;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    border-bottom: 1px solid $color-primary;
    padding-bottom: 110px;
    @media (max-width: $breakpoint-desktop-md) {
      display: block;
    }
    @media (max-width: $breakpoint-mob) {
      padding: 0;
      border-bottom: none;
    }
  }

  //   .toy-catalog__content
  &__content {
    @media (max-width: $breakpoint-tablet) {
      margin: 50px;
    }
    @media (max-width: $breakpoint-mob) {
      margin: 0;
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

  //   .toy-catalog__description
  &__description {
    margin-bottom: 42px;
    @media (max-width: $breakpoint-mob) {
      margin-bottom: 30px;
    }
  }

  // .toy-catalog__action
  &__action {
    @media (max-width: $breakpoint-desktop-md) {
      margin-bottom: 42px;
    }
  }

  // .toy-catalog__wrapper
  &__wrapper {
    margin: 0 auto;
    width: 635px;
    height: 100%;
    overflow: hidden;
    @media (max-width: $breakpoint-tablet-md) {
      width: 450px;
    }
    @media (max-width: $breakpoint-mob) {
      width: 100%;
    }
  }

  // .toy-catalog__slider
  &__slider {
    border-radius: 50px;
  }
}
</style>
