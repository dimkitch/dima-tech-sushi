<template>
  <article class="customer-feedback">
    <div class="container">
      <div class="customer-feedback__wrapper">
        <div class="customer-feedback__header">
          <h2 class="customer-feedback__title title-mdxl fw-medium">
            {{ customerFeedbackData.title }}
          </h2>
        </div>
        <div ref="swiperSlider">
          <div class="customer-feedback__body swiper-wrapper">
            <CustomerCard
              class="swiper-slide"
              v-for="card in customerFeedbackData.customerCard"
              :key="`customer-feedback--${card.id}`"
              :customerData="card"
            />
          </div>
          <div class="customer-feedback__footer custom-navigation">
            <CustomButton
              class="customer-feedback__actiom-item"
              ref="prevBtn"
              size="round"
              theme="primary"
              ><ArrowLeft />
            </CustomButton>
            <CustomButton
              class="customer-feedback__actiom-item"
              ref="nextBtn"
              size="round"
              theme="primary"
              ><ArrowRight />
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import CustomerCard from "@/components/shared/blocks/CustomerFeedback/CustomerCard.vue";
import CustomButton from "@/components/common/controls/CustomButton.vue";
import ArrowLeft from "@/components/common/icons/ArrowLeft.vue";
import ArrowRight from "@/components/common/icons/ArrowRight.vue";
import { Swiper, Autoplay, Navigation } from "swiper";
Swiper.use([Autoplay, Navigation]);

export default {
  components: {
    CustomerCard,
    CustomButton,
    ArrowLeft,
    ArrowRight,
  },
  props: {
    customerFeedbackData: {
      type: Object,
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
          prevEl: this.$refs.prevBtn.$el,
          nextEl: this.$refs.nextBtn.$el,
        },
      };

      this.slider = new Swiper(this.$refs.swiperSlider, preOptions);
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
.customer-feedback {
  background-color: $color-secondary;
  @media (max-width: $breakpoint-tablet) {
    background-color: inherit;
  }

  // .customer-feedback__wrapper
  &__wrapper {
    padding: 100px 0;
  }

  // .customer-feedback__header
  &__header {
    text-align: center;
  }

  // .customer-feedback__title
  &__title {
  }

  // .customer-feedback__body
  &__body {
    margin-top: 80px;
    margin-bottom: 70px;
  }

  // .customer-feedback__footer
  &__footer {
    text-align: center;
  }
  // .customer-feedback__actiom-item
  &__actiom-item {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
}
</style>
