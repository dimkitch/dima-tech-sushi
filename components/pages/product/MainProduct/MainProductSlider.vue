<template>
  <div class="main-product-slider">
    <div class="main-product-slider__inner">
      <div class="main-product-slider__aside-img">
        <img src="@/assets/img/miniImage.png" alt="" />
        <img src="@/assets/img/miniImage.png" alt="" />
        <img src="@/assets/img/miniImage.png" alt="" />
        <img src="@/assets/img/miniImage.png" alt="" />
      </div>
      <div class="main-product-slider__prewiew">
        <img
          class="main-product-slider__img"
          src="@/assets/img/preewiewImage.png"
        />
        <span class="main-product-slider__prewiew-zoom text-xnrt tf-up"
          ><ZoomIcon class="main-product-slider__icon" />приблизить</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import ZoomIcon from "@/components/common/icons/ZoomIcon.vue";
export default {
  components: {
    ZoomIcon,
  },
};
</script>
<style lang="scss">
.main-product-slider {
  // .main-product-slider__inner
  &__inner {
    display: grid;
    grid-template-columns: 115px 524px;
    gap: 17px;
  }
  // .main-product-slider__aside-img
  &__aside-img {
    display: grid;
    grid-template-columns: 1fr;
    gap: 25px;
  }
  // .main-product-slider__prewiew
  &__prewiew {
    position: relative;
  }
  // .main-product-slider__prewiew-zoom
  &__prewiew-zoom {
    position: absolute;
    bottom: 13px;
    right: 0;
  }
  // .main-product-slider__icon
  &__icon {
    margin-right: 8px;
  }
}
</style>
