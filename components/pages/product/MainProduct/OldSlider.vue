<template>
  <div class="main-product-slider">
    <CustomButton
      class="main-product-slider__prev-btn"
      :class="{ 'main-product-slider__prev-btn--disabled': !canSlideToPrev }"
      size="round"
      theme="primary"
      @click="prevSlide()"
    >
      <ArrowLeft />
    </CustomButton>
    <CustomButton
      class="main-product-slider__next-btn"
      :class="{ 'main-product-slider__next-btn--disabled': !canSlideToNext }"
      size="round"
      theme="primary"
      @click="nextSlide()"
    >
      <ArrowRight />
    </CustomButton>
    <div class="main-product-slider__inner" ref="verticalSliderInner">
      <div class="main-product-slider__vertical-slider" ref="verticalSlider">
        <div
          class="main-product-slider__aside-img"
          v-for="(img, index) in sliderList"
          :key="`main-product-slider__aside-img-${index}`"
          :style="`transform: translateY(${getTranslateY}px)`"
        >
          <img class="main-product-slider__image" :src="img" alt="" />
        </div>
      </div>

      <div class="main-product-slider__prewiew">
        <img
          class="main-product-slider__img"
          :class="{
            'main-product-slider__img--is-visible':
              isVisiblePreviewIndex === index,
          }"
          v-for="(image, index) in sliderList"
          :key="`main-product-slider__img-${index}`"
          :src="image"
        />
        <!-- :style="`transform: translateY(${getTranslateY}px)`" -->
        <span class="main-product-slider__prewiew-zoom text-xnrt tf-up"
          ><ZoomIcon class="main-product-slider__icon" />приблизить</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/common/controls/CustomButton.vue";
import ArrowLeft from "@/components/common/icons/ArrowLeft.vue";
import ArrowRight from "@/components/common/icons/ArrowRight.vue";
import ZoomIcon from "@/components/common/icons/ZoomIcon.vue";
export default {
  components: {
    ZoomIcon,
    CustomButton,
    ArrowLeft,
    ArrowRight,
  },
  props: {
    sliderList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slider: null,
      sliderOptions: {
        translateY: 0,
        slidePerView: 4,
        sliderInnerHight: 0,
        currentLvl: 1,
      },
      isVisiblePreviewIndex: 1,
    };
  },
  computed: {
    maxLevel() {
      return Math.floor(
        this.sliderList.length / this.sliderOptions.slidePerView
      );
    },
    getTranslateY() {
      return this.sliderOptions.translateY;
    },
    canSlideToPrev() {
      return !!this.sliderOptions.translateY;
    },
    canSlideToNext() {
      return this.maxLevel > this.sliderOptions.currentLvl;
    },
  },
  methods: {
    prevSlide() {
      // console.log("Prev slide");
      // console.log(this.sliderOptions.translateY);
      if (!this.canSlideToPrev) return;
      let result =
        this.sliderOptions.translateY + this.sliderOptions.sliderInnerHight;

      --this.sliderOptions.currentLvl;
      this.sliderOptions.translateY = result;
    },

    nextSlide() {
      // console.log("Next slide");
      // console.log(this.sliderOptions.translateY);
      console.log("max", this.maxLevel);
      if (!this.canSlideToNext) return;
      let result =
        this.sliderOptions.translateY - this.sliderOptions.sliderInnerHight;

      ++this.sliderOptions.currentLvl;
      this.sliderOptions.translateY = result;
    },
  },

  mounted() {
    setTimeout(() => {
      console.log(
        "domRect",
        this.$refs.verticalSliderInner.getBoundingClientRect()
      );
      this.sliderOptions.sliderInnerHight =
        this.$refs.verticalSliderInner.getBoundingClientRect().height;
    });
  },
};
</script>
<style lang="scss">
.main-product-slider {
  height: 524px;

  // .main-product-slider__prev-btn--disabled
  // .main-product-slider__next-btn--disabled
  &__prev-btn--disabled,
  &__next-btn--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  // .main-product-slider__vertical-slider
  &__vertical-slider {
    // display: grid;
    grid-template-columns: 1fr;
    // gap: 25px;
    height: 524px;
    max-height: 524px;
    overflow: hidden;
  }
  // .main-product-slider__inner
  &__inner {
    display: grid;
    grid-template-columns: 115px 524px;
    gap: 17px;
    overflow: hidden;
  }
  // .main-product-slider__image
  &__image {
    width: 100%;
    // height: 110px;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  // .main-product-slider__aside-img
  &__aside-img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    height: calc(100% / 4);
    min-height: calc(100% / 4);
    transition: all 0.5s ease;
  }
  // .main-product-slider__prewiew
  &__prewiew {
    position: relative;
    width: 524px;
    height: 524px;
  }
  // .main-product-slider__img--is-visible
  &__img--is-visible {
    transform: translateY(0);
  }
  // .main-product-slider__img
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(100%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
