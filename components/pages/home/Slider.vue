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
      <CustomButton class="prev-btn" size="round" theme="primary">
        <ArrowLeft />
      </CustomButton>

      <CustomButton class="next-btn" size="round" theme="primary">
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
      // if (this.slideList.length <= 1 || (this.slider && !this.slider.destroyed)) return;
      const preOptions = {
        slidesPerView: 1,

        navigation: {
          // TODO: сделать через refs
          prevEl: `.prev-btn`,
          nextEl: `.next-btn`,
        },
        pagination: {
          el: this.$refs.slideShowPagination,
          bulletClass: "custom-pagination__bullet",
          bulletActiveClass: "custom-pagination__bullet--active",
        },
        // pagination: {
        //   el: `.pagination`,
        //   modifierClass: "classNames.PAGINATION_MODIFIER",
        //   bulletClass: "paginationClassNames.BULLET",
        //   bulletActiveClass: "paginationClassNames.BULLET_ACTIVE",
        // },
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

  &__item {
    height: auto;
  }

  &__image {
    object-position: left;
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
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
  }

  .custom-pagination {
    position: absolute;
    z-index: 1;
    width: 100%;
    bottom: 21px;
    left: 50%;
    display: flex;
    z-index: 11;
    transform: translateX(-50%);
    &__bullet {
      display: block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-right: 15px;
      background-color: $color-light;
      opacity: 1;
      z-index: 15;
      &--active {
        background-color: $color-primary;
        opacity: 1;
      }
    }
  }
}
</style>
