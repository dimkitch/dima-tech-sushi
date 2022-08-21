<template>
  <div class="main-product">
    <div class="container">
      <div class="main-product__inner">
        <MainProductSlider />
        <ProductDescription />
      </div>
      <ProductAction />
      <AboutProduct />
    </div>
  </div>
</template>
<script>
import MainProductSlider from "@/components/pages/product/MainProduct/MainProductSlider.vue";
import ProductDescription from "@/components/pages/product/MainProduct/ProductDescription.vue";
import ProductAction from "@/components/pages/product/MainProduct/ProductAction.vue";
import AboutProduct from "@/components/pages/product/MainProduct/AboutProduct.vue";
export default {
  components: {
    MainProductSlider,
    ProductDescription,
    ProductAction,
    AboutProduct,
  },
};
</script>
<style lang="scss">
.main-product {
  // .main-product__inner
  &__inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 46px;
  }
}
</style>
