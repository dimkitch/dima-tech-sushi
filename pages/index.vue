<template>
  <main class="home-page" v-if="pageData">
    <ToyCatalog
      class="home-page__toy-catalog"
      :sliderList="pageData.sliderList"
      v-if="pageData.sliderList"
    />

    <OurProduct
      class="home-page__our-product"
      :ourProductData="pageData.products"
      v-if="pageData.products"
      @showDiscountProduct="showDiscountProduct"
    />

    <ModalDiscountOzon
      v-if="productIdForDiscount"
      :productId="productIdForDiscount"
      @close="productIdForDiscount = null"
    />

    <OurBenefits
      class="home-page__our-benefits"
      :ourBenefitsData="pageData.ourBenefits"
      v-if="pageData.ourBenefits"
    />

    <Discount class="home-page__discount" />

    <CustomerFeedback
      class="home-page__customer-feedback"
      :customerFeedbackData="pageData.customerFeedback"
      v-if="pageData.customerFeedback"
    />

    <Blog
      class="home-page__blog"
      :blogData="pageData.blog"
      v-if="pageData.blog"
      @showBlogInModal="showBlogInModal"
    />

    <BlogModal
      v-if="blogCardInModalCurrent"
      @close="currentBlogDataForModal = null"
      :blogData="blogCardInModalCurrent"
    />
  </main>
</template>

<script>
import ToyCatalog from "@/components/pages/home/ToyCatalog.vue";
import AboutCompany from "@/components/shared/AboutCompany.vue";
import ProductCard from "@/components/shared/cards/ProductCard.vue";
import OurProduct from "@/components/pages/home/OurProduct.vue";
import OurBenefits from "@/components/shared/blocks/OurBenefits/index.vue";
import Discount from "@/components/pages/home/Discount.vue";
import CustomerFeedback from "@/components/shared/blocks/CustomerFeedback";
import Blog from "@/components/shared/blocks/Blog";
import Slider from "@/components/pages/home/Slider.vue";
import BlogModal from "@/components/modals/BlogModal.vue";
import DiscountOzon from "@/components/shared/forms/DiscountOzon.vue";
import ModalWrapper from "@/components/layouts/ModalWrapper.vue";
import ModalDiscountOzon from "@/components/modals/ModalDiscountOzon.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
    AboutCompany,
    ToyCatalog,
    OurProduct,
    OurBenefits,
    Discount,
    CustomerFeedback,
    Blog,
    Slider,
    BlogModal,
    DiscountOzon,
    ModalWrapper,
    ModalDiscountOzon,
  },

  data() {
    return {
      currentBlogDataForModal: null,
      productIdForDiscount: null,
    };
  },

  methods: {
    ...mapActions({ loadPage: "api/home/LOAD_PAGE" }),
    showBlogInModal(data) {
      this.currentBlogDataForModal = data;
    },

    showDiscountProduct(productId) {
      this.productIdForDiscount = productId;
    },
  },

  computed: {
    ...mapGetters({ pageData: "api/home/PAGE_DATA" }),
    blogCardInModalCurrent() {
      return this.currentBlogDataForModal;
    },
  },

  async mounted() {
    await this.loadPage();
  },
};
</script>
<style lang="scss">
.home-page {
  margin-top: 144px;
  @media (max-width: $breakpoint-desktop-md) {
    margin-top: 72px;
  }
  @media (max-width: $breakpoint-tablet-md) {
    margin-top: 36px;
  }

  // .home-page__toy-catalog
  &__toy-catalog {
    margin-bottom: 84px;
  }

  // .home-page__about-company
  &__about-company {
    margin-bottom: 143px;
  }

  // .home-page__our-product
  &__our-product {
    margin-bottom: 100px;
  }

  // .home-page__our-benefits
  &__our-benefits {
    margin-bottom: 100px;
  }

  // .home-page__discount
  &__discount {
    margin-bottom: 100px;
    @media (max-width: $breakpoint-tablet-md) {
      margin-bottom: 44px;
    }
  }

  // .home-page__customer-feedback
  &__customer-feedback {
    margin-bottom: 80px;
  }

  // .home-page__blog
  &__blog {
    margin-bottom: 100px;
  }
}
</style>
