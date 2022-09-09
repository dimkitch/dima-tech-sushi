<template>
  <div class="slider-product">
    <CustomButton
      class="slider-product__prev-btn"
      :class="{ 'slider-product__prev-btn--disabled': !canSlideToPrev }"
      size="round"
      theme="primary"
      @click="prevSlide()"
    >
      <ArrowLeft />
    </CustomButton>
    <CustomButton
      class="slider-product__next-btn"
      :class="{ 'slider-product__next-btn--disabled': !canSlideToNext }"
      size="round"
      theme="primary"
      @click="nextSlide()"
    >
      <ArrowRight />
    </CustomButton>
    <pre
      >{{ slideHight }}
      {{ test }}
    </pre>
    <div class="slider-product__inner">
      <div class="vertical-slider" ref="verticalSlider">
        <div class="vertical-slider__wrapper" :style="sliderWrapperStyles">
          <div
            class="vertical-slider__item"
            v-for="(img, index) in sliderList"
            :key="`vertical-slider__item-${index}`"
            :style="sliderVerticalItemStyles"
            @mouseover="onMouseOver(index)"
          >
            <img class="vertical-slider__image" :src="img" alt="" />
          </div>
        </div>
      </div>

      <div class="prewiew-slider">
        <img
          class="prewiew-slider__image"
          :class="{
            'prewiew-slider__image--is-visible':
              isVisiblePreviewIndex === index,
          }"
          v-for="(image, index) in sliderList"
          :key="`prewiew-slider__image-${index}`"
          :src="image"
        />
        <!-- :style="`transform: translateY(${getTranslateY}px)`" -->
        <span class="prewiew-slider__zoom text-xnrt tf-up"
          ><ZoomIcon class="prewiew-slider__icon" />приблизить</span
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
        sliderInnerHight: 0,
        sliderInnerWidth: 0,
        translateY: 0,
        slidePerView: 4,
        currentLvl: 1,
        spaceBeetwen: 25,
        direction: "vertical",
        //horizont || vertical
        breakpoints: [
          {
            breakpoint: 767,
            options: {
              direction: "horizont",
            },
          },
          {
            breakpoint: 500,
            options: {
              spaceBeetwen: 10,
            },
          },
        ],
      },
      isVisiblePreviewIndex: 0,
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

    sliderVerticalItemStyles() {
      const gapDirectionHelper =
        this.sliderOptions.direction === "horizont"
          ? "margin-right"
          : "margin-bottom";
      const translateDirectionHelper =
        this.sliderOptions.direction === "horizont"
          ? "translateX"
          : "translateY";

      const gapDirection = `${gapDirectionHelper}:${this.sliderOptions.spaceBeetwen}px;`;
      const translateDirection = `transform: ${translateDirectionHelper}(${this.getTranslateY}px);`;

      const sizeParamsSlide =
        this.sliderOptions.direction === "horizont"
          ? `width:${this.slideWidth}px; min-width:${this.slideWidth}px;`
          : `height:${this.slideHight}px;`;

      return `${gapDirection} ${translateDirection} ${sizeParamsSlide}`;
    },

    sliderWrapperStyles() {
      const direction =
        this.sliderOptions.direction == "horizont" ? "display:flex" : "";

      return direction;
    },
    test() {
      return this.sliderOptions.sliderInnerHight;
    },

    slideHight() {
      console.log("this.sliderOptions.sliderInnerHight", this.test);
      console.log(
        "this.sliderOptions.spaceBeetwen",
        this.sliderOptions.spaceBeetwen
      );
      console.log(
        "this.sliderOptions.slidePerView",
        this.sliderOptions.slidePerView
      );

      return (
        (this.test -
          this.sliderOptions.spaceBeetwen *
            (this.sliderOptions.slidePerView - 1)) /
        this.sliderOptions.slidePerView
      );
    },

    slideWidth() {
      return (
        (this.sliderOptions.sliderInnerWidth -
          this.sliderOptions.spaceBeetwen *
            (this.sliderOptions.slidePerView - 1)) /
        this.sliderOptions.slidePerView
      );
    },
  },
  methods: {
    createDefaultOptions() {
      const defaultOptionsObject = {
        breakpoint: "default",
        options: {},
      };
      for (const key in this.sliderOptions) {
        if (key === "breakpoints") continue;
        defaultOptionsObject.options[key] = this.sliderOptions[key];
      }
      this.sliderOptions.breakpoints.unshift(defaultOptionsObject);
    },
    breakpointsHelper() {
      let toBottom = false;

      this.sliderOptions.breakpoints.forEach((mediaParams) => {
        if (window.innerWidth <= mediaParams.breakpoint) {
          for (const option in mediaParams.options) {
            this.sliderOptions[option] = mediaParams.options[option];
          }
          toBottom = true;
        }
        if (toBottom) return;
        const defaultOptions = this.sliderOptions.breakpoints.find(
          (option) => option.breakpoint === "default"
        ).options;

        for (let option in defaultOptions) {
          this.sliderOptions[option] = defaultOptions[option];
        }
      });
    },

    prevSlide() {
      if (!this.canSlideToPrev) return;

      //Высота скролла
      let result =
        this.sliderOptions.translateY +
        this.test +
        this.sliderOptions.spaceBeetwen;

      //Уходим на уровень слайда назад
      --this.sliderOptions.currentLvl;

      this.sliderOptions.translateY = result;
      //Установка индекса активной картинки превью
      this.isVisiblePreviewIndex -= this.sliderOptions.slidePerView;
    },

    nextSlide() {
      if (!this.canSlideToNext) return;

      //Высота скролла
      let result =
        this.sliderOptions.translateY -
        this.test -
        this.sliderOptions.spaceBeetwen;

      //Добавляем уровень слайда
      ++this.sliderOptions.currentLvl;
      this.sliderOptions.translateY = result;

      //Установка индекса активной картинки превью
      this.isVisiblePreviewIndex += this.sliderOptions.slidePerView;
    },
    onMouseOver(index) {
      this.isVisiblePreviewIndex = index;
    },
    setSizeParamsSlider() {
      console.log(
        "getBoundingClientRect",
        this.$refs.verticalSlider.getBoundingClientRect()
      );
      this.sliderOptions.sliderInnerHight =
        this.$refs.verticalSlider.getBoundingClientRect().height;
      this.sliderOptions.sliderInnerWidth =
        this.$refs.verticalSlider.getBoundingClientRect().width;
      console.log("Высота", this.sliderOptions.sliderInnerHight);
      console.log("Ширина", this.sliderOptions.sliderInnerWidth);
    },
  },

  mounted() {
    this.createDefaultOptions();
    setTimeout(() => {
      this.setSizeParamsSlider();
      window.addEventListener("resize", this.setSizeParamsSlider);
      window.addEventListener("resize", this.breakpointsHelper);

      this.breakpointsHelper();
    });
  },
};
</script>
<style lang="scss">
.slider-product {
  // .slider-product__prev-btn
  // .slider-product__next-btn
  &__prev-btn,
  &__next-btn {
    position: absolute;
    top: 180px;
  }

  // .slider-product__next-btn
  &__next-btn {
    left: 100px;
  }

  // .slider-product__prev-btn--disabled
  // .slider-product__next-btn--disabled
  &__prev-btn--disabled,
  &__next-btn--disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  // .slider-product__inner
  &__inner {
    display: grid;
    grid-template-columns: 115px 524px;
    height: 524px;
    gap: 17px;
    overflow: hidden;
    @media (max-width: $breakpoint-tablet-md) {
      grid-template-columns: 1fr;
      height: auto;
      display: block;
    }
  }
}
.vertical-slider {
  height: inherit;
  @media (max-width: $breakpoint-tablet-md) {
    order: 1;
  }

  // .vertical-slider__wrapper
  &__wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  // .vertical-slider__item
  &__item {
    width: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.5s ease;

    // .vertical-slider__item:not(:last-child)

    &:last-child {
      margin: 0 !important;
    }
  }

  // .vertical-slider__image
  &__image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}
.prewiew-slider {
  position: relative;
  width: 524px;
  height: 524px;
  overflow: hidden;

  @media (max-width: $breakpoint-tablet-md) {
    width: 100%;
    margin-top: 12px;
  }

  // .prewiew-slider__image
  &__image {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-100%);
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: all 0.6s ease;

    // .prewiew-slider__image--is-visible
    &--is-visible {
      transform: translateY(0);
    }
  }
  // .prewiew-slider__zoom
  &__zoom {
    position: absolute;
    bottom: 13px;
    right: 0;
    z-index: 50;
  }

  // .prewiew-slider__icon
  &__icon {
    margin-right: 8px;
  }
}
</style>
