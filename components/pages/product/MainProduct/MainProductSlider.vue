<template>
  <div class="slider-product">
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
        <span class="prewiew-slider__zoom text-xnrt tf-up"
          ><ZoomIcon class="prewiew-slider__icon" />приблизить</span
        >
      </div>
    </div>

    <div class="slider-product__action">
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
      sliderSettings: {
        currentLvl: 1,

        sizes: {
          sliderInnerHight: 0,
          sliderInnerWidth: 0,
        },
        translate: 0,
        options: {
          slidePerView: 4,
          spaceBeetwen: 25,
          direction: "vertical",
          //horizont || vertical
        },

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
        this.sliderList.length / this.sliderSettings.options.slidePerView
      );
    },

    getTranslate() {
      return this.sliderSettings.translate;
    },

    canSlideToPrev() {
      return !!this.sliderSettings.translate;
    },

    canSlideToNext() {
      return this.maxLevel > this.sliderSettings.currentLvl;
    },

    sliderVerticalItemStyles() {
      const gapDirectionHelper =
        this.sliderSettings.options.direction === "horizont"
          ? "margin-right"
          : "margin-bottom";
      const translateDirectionHelper =
        this.sliderSettings.options.direction === "horizont"
          ? "translateX"
          : "translateY";

      const gapDirection = `${gapDirectionHelper}:${this.sliderSettings.options.spaceBeetwen}px;`;
      const translateDirection = `transform: ${translateDirectionHelper}(${this.getTranslate}px);`;

      const sizeParamsSlide =
        this.sliderSettings.options.direction === "horizont"
          ? `width:${this.slideWidth}px; min-width:${this.slideWidth}px;`
          : `height:${this.slideHight}px;`;

      return `${gapDirection} ${translateDirection} ${sizeParamsSlide}`;
    },

    sliderWrapperStyles() {
      const direction =
        this.sliderSettings.options.direction == "horizont"
          ? "display:flex"
          : "";

      return direction;
    },

    slideHight() {
      return (
        (this.sliderSettings.sizes.sliderInnerHight -
          this.sliderSettings.options.spaceBeetwen *
            (this.sliderSettings.options.slidePerView - 1)) /
        this.sliderSettings.options.slidePerView
      );
    },

    slideWidth() {
      return (
        (this.sliderSettings.sizes.sliderInnerWidth -
          this.sliderSettings.options.spaceBeetwen *
            (this.sliderSettings.options.slidePerView - 1)) /
        this.sliderSettings.options.slidePerView
      );
    },
  },
  methods: {
    createDefaultOptions() {
      const defaultOptionsObject = {
        breakpoint: "default",
        options: {},
      };
      for (const key in this.sliderSettings.options) {
        defaultOptionsObject.options[key] = this.sliderSettings.options[key];
      }
      this.sliderSettings.breakpoints.unshift(defaultOptionsObject);
    },
    breakpointsHelper() {
      let toBottom = false;

      this.sliderSettings.breakpoints.forEach((mediaParams) => {
        if (window.innerWidth <= mediaParams.breakpoint) {
          for (const option in mediaParams.options) {
            this.sliderSettings.options[option] = mediaParams.options[option];
          }
          toBottom = true;
        }
        if (toBottom) return;
        const defaultOptions = this.sliderSettings.breakpoints.find(
          (option) => option.breakpoint === "default"
        ).options;

        for (let option in defaultOptions) {
          this.sliderSettings.options[option] = defaultOptions[option];
        }
      });
    },

    prevSlide() {
      if (!this.canSlideToPrev) return;

      const sliderInnerSize =
        this.sliderSettings.direction === "vertical"
          ? this.sliderSettings.sizes.sliderInnerHight
          : this.sliderSettings.sizes.sliderInnerWidth;

      //Размер скролла
      let result =
        this.sliderSettings.translate +
        sliderInnerSize +
        this.sliderSettings.options.spaceBeetwen;

      //Уходим на уровень слайда назад
      --this.sliderSettings.currentLvl;

      this.sliderSettings.translate = result;
      //Установка индекса активной картинки превью
      this.isVisiblePreviewIndex--;
    },

    nextSlide() {
      if (!this.canSlideToNext) return;
      const sliderInnerSize =
        this.sliderSettings.direction === "vertical"
          ? this.sliderSettings.sizes.sliderInnerHight
          : this.sliderSettings.sizes.sliderInnerWidth;

      //Размер скролла
      let result =
        this.sliderSettings.translate -
        sliderInnerSize -
        this.sliderSettings.options.spaceBeetwen;

      //Добавляем уровень слайда
      ++this.sliderSettings.currentLvl;
      this.sliderSettings.translate = result;

      //Установка индекса активной картинки превью
      this.isVisiblePreviewIndex++;

      console.log("pi after", this.isVisiblePreviewIndex);
    },
    onMouseOver(index) {
      this.isVisiblePreviewIndex = index;
    },
    setSizeParamsSlider() {
      this.sliderSettings.sizes.sliderInnerHight =
        this.$refs.verticalSlider.getBoundingClientRect().height;
      this.sliderSettings.sizes.sliderInnerWidth =
        this.$refs.verticalSlider.getBoundingClientRect().width;
    },

    resetSlider() {
      this.sliderSettings.translate = 0;
      this.sliderSettings.currentLvl = 1;
      this.isVisiblePreviewIndex = 0;
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

    window.addEventListener("resize", this.resetSlider);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resetSlider);
  },
};
</script>
<style lang="scss">
.slider-product {
  // .slider-product__wrapper
  &__wrapper {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  // .slider-product__prev-btn--disabled
  // .slider-product__next-btn--disabled
  &__prev-btn--disabled,
  &__next-btn--disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  // .slider-product__prev-btn--disabled
  &__prev-btn--disabled {
    margin-right: 50px;
  }

  // .slider-product__inner
  &__inner {
    display: grid;
    grid-template-columns: 115px 524px;
    height: 524px;
    gap: 17px;
    overflow: hidden;
    @media (max-width: $breakpoint-tablet-md) {
      display: block;
      height: auto;
    }
  }
  // .slider-product__action
  &__action {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  // .slider-product__prev-btn
  &__prev-btn {
    margin-right: 50px;
  }
  // .slider-product__next-btn
  &__next-btn {
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
