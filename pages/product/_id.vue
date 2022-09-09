<template>
  <main class="product-page">
    <MainProduct
      class="product-page__full-product"
      :productData="pageData.product"
      v-if="pageData.product"
    />

    <AssemblyInstructions
      class="product-page__assembly-instructions"
      :assemblyInstructionsData="pageData.assemblyInstructions"
      v-if="pageData.assemblyInstructions"
    />
    <!-- <VideoGuide class="product-page__video-guide" /> -->

    <QualityCertificates
      class="product-page__quality-certificates"
      :qualitiCertificateData="pageData.qualitiCertificate"
      v-if="pageData.qualitiCertificate"
    />

    <SimilarProducts
      class="product-page__similar-products"
      :productsData="pageData.products"
      v-if="pageData.products"
    />

    <CustomerFeedback
      class="product-page__customer-feedback"
      :customerFeedbackData="pageData.customerFeedback"
      v-if="pageData.customerFeedback"
    />

    <OurBenefits
      class="product-page__our-benefits"
      :ourBenefitsData="pageData.ourBenefits"
      v-if="pageData.ourBenefits"
    />

    <Discount class="product-page__discount" />

    <Blog
      class="product-page__blog"
      :blogData="pageData.blog"
      v-if="pageData.blog"
    />
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
import { mapActions, mapGetters } from "vuex";

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
  data() {
    return {
      pageData: {},
    };
  },
  methods: {
    ...mapActions({ loadPage: "api/product/LOAD_PAGE" }),
  },

  async mounted() {
    console.log("this.$route:", this.$route.params.id);
    if (!this.$route.params.id) throw new Error(`this page dont have id`);
    this.pageData = await this.loadPage(this.$route.params.id);
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
