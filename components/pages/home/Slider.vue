<template>
  <div class="slide-show">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide slide-show__item"
        v-for="slide in sliderList.gallery"
        :key="`slide-${slide.id}`"
      >
        <img :src="slide.image" class="slide-show__image" />
      </div>
    </div>

    <div class="custom-pagination" ref="slideShowPagination"></div>

    <div class="custom-navigation" v-show="slider">
      <CustomButton class="prev-btn" size="round" theme="primary" ref="prevBtn">
        <ArrowLeft />
      </CustomButton>

      <CustomButton class="next-btn" size="round" theme="primary" ref="nextBtn">
        <ArrowRight />
      </CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/common/controls/CustomButton.vue";
import ArrowLeft from "@/components/common/icons/ArrowLeft.vue";
import ArrowRight from "@/components/common/icons/ArrowRight.vue";
import { Swiper, Autoplay, Navigation, Pagination } from "swiper";

Swiper.use([Autoplay, Navigation, Pagination]);

export default {
  components: {
    CustomButton,
    ArrowLeft,
    ArrowRight,
  },
  props: {
    sliderList: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      slider: null,
    };
  },
  methods: {
    initSlider() {
      const preOptions = {
        slidesPerView: 1,

        navigation: {
          // TODO: сделать через refs
          prevEl: this.$refs.prevBtn.$el,
          nextEl: this.$refs.nextBtn.$el,
        },

        pagination: {
          el: this.$refs.slideShowPagination,
          bulletClass: "custom-pagination__bullet",
          bulletActiveClass: "custom-pagination__bullet--active",
        },
      };

      this.slider = new Swiper(this.$el, preOptions);
    },
  },

  mounted() {
    if (!process.client) return;
    setTimeout(this.initSlider);
  },

  beforeDestroy() {
    if (this.slider && !this.slider.destroyed) {
      this.slider.destroy();
      this.slider = null;
    }
  },
};
</script>

<style lang="scss">
.slide-show {
  position: relative;
  overflow: hidden;

  // .slide-show__item
  &__item {
    height: 548px;
  }

  // .slide-show__image
  &__image {
    object-position: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .custom-navigation {
    position: absolute;
    z-index: 1;
    padding: 12px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
  }

  .custom-pagination {
    position: absolute;
    z-index: 1;
    max-width: 110px;
    bottom: 21px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 11;

    // .custom-pagination__bullet
    &__bullet {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 10px;
      background-color: $color-light;
      opacity: 1;
      z-index: 15;

      // .custom-pagination--activ
      &--active {
        background-color: $color-primary;
        opacity: 1;
      }
    }
  }
}
.swiper-button-disabled {
  opacity: 0.7;
  pointer-events: none;
}
</style>
