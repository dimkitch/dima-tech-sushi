<template>
  <div class="main-product">
    <div class="container">
      <MobMainProductTitle class="main-product__title" />
      <div class="main-product__inner">
        <MainProductSlider
          :sliderList="productData.slider"
          v-if="productData && productData.slider"
          class="main-product__slider"
        />
        <ProductDescription class="main-product__product-description" />
      </div>
      <ProductAction class="main-product__action" />
      <AboutProduct />
    </div>
  </div>
</template>
<script>
import MobMainProductTitle from "@/components/pages/product/MainProduct/MobMainProductTitle.vue";
import MainProductSlider from "@/components/pages/product/MainProduct/MainProductSlider.vue";
import ProductDescription from "@/components/pages/product/MainProduct/ProductDescription.vue";
import ProductAction from "@/components/pages/product/MainProduct/ProductAction.vue";
import AboutProduct from "@/components/pages/product/MainProduct/AboutProduct.vue";
export default {
  components: {
    MobMainProductTitle,
    MainProductSlider,
    ProductDescription,
    ProductAction,
    AboutProduct,
  },
  props: {
    productData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.main-product {
  // .main-product__title
  &__title {
    display: none;
    @media (max-width: $breakpoint-desktop-md) {
      display: block;
    }
  }
  // .main-product__inner
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 46px;
    @media (max-width: $breakpoint-desktop-md) {
      display: block;
    }
  }
  // .main-product__slider
  &__slider {
    margin: 0 auto;
  }
  // .main-product__product-description
  &__product-description {
  }
  // .main-product__action
  &__action {
    margin-top: 60px;
  }
}
</style>
