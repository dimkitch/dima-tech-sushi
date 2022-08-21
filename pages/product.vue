<template>
  <main class="product-page">
    <MainProduct class="product-page__full-product" />
    <AssemblyInstructions class="product-page__assembly-instructions" />
    <!-- <VideoGuide class="product-page__video-guide" /> -->
    <QualityCertificates class="product-page__quality-certificates" />
    <SimilarProducts class="product-page__similar-products" />
    <CustomerFeedback class="product-page__customer-feedback" />
    <OurBenefits class="product-page__our-benefits" />
    <Discount class="product-page__discount" />
    <Blog class="product-page__blog" />
  </main>
</template>
<script>
import MainProduct from "@/components/pages/product/MainProduct";

import AssemblyInstructions from "@/components/pages/product/AssemblyInstructions";
import VideoGuide from "@/components/pages/product/VideoGuide.vue";
import QualityCertificates from "@/components/shared/blocks/QualityCertificates";
import SimilarProducts from "@/components/pages/product/SimilarProducts.vue";
import CustomerFeedback from "@/components/shared/blocks/CustomerFeedback";
import OurBenefits from "@/components/shared/blocks/OurBenefits";
import Discount from "@/components/pages/home/Discount.vue";
import Blog from "@/components/shared/blocks/Blog";

export default {
  components: {
    MainProduct,
    AssemblyInstructions,
    VideoGuide,
    QualityCertificates,
    SimilarProducts,
    CustomerFeedback,
    OurBenefits,
    Discount,
    Blog,
  },
};
</script>
<style lang="scss">
.product-page {
  // .product-page__full-product
  &__full-product {
    margin-top: 118px;
    margin-bottom: 154px;
  }
  //   .product-page__assembly-instructions
  &__assembly-instructions {
    margin-bottom: 154px;
  }
  // .product-page__video-guide
  &__video-guide {
    margin-bottom: 100px;
  }
  // .product-page__quality-certificates
  &__quality-certificates {
    margin-bottom: 58px;
  }
  //   .product-page__similar-products
  &__similar-products {
    margin-bottom: 100px;
  }
  //   .product-page__customer-feedback
  &__customer-feedback {
    margin-bottom: 50px;
  }
  //   .product-page__our-benefits
  &__our-benefits {
    margin-bottom: 100px;
  }
  // .product-page__discount
  &__discount {
    margin-bottom: 80px;
  }
  // .product-page__blog
  &__blog {
    margin-bottom: 80px;
  }
}
</style>
