<template>
  <main class="home-page">
    <!-- <div>MAIN PAGE</div> -->
    <!-- <div class="">
      <nuxt-link to="/news">ссылка к новостям по path</nuxt-link>
      <br />
      <nuxt-link :to="{ name: 'news' }">ссылка к новостям по name</nuxt-link>
      <br />
      <nuxt-link :to="{ name: 'news-id', params: { id: 123 } }"
        >ссылка к новостям по id</nuxt-link
      > -->
    <!-- </div> -->
    <ToyCatalog class="home-page__toy-catalog" />
    <AboutCompany class="home-page__about-company" />
    <OurProduct class="home-page__our-product" />
    <OurBenefits class="home-page__our-benefits" />
    <Discount />
    <CustomerFeedback class="home-page__customer-feedback" />
    <Blog class="home-page__blog" />
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
export default {
  name: "IndexPage",
  components: {
    ProductCard,
    AboutCompany,
    ToyCatalog,
    OurProduct,
    OurBenefits,
    Discount,
    CustomerFeedback,
    Blog,
  },
};
</script>
<style lang="scss">
.home-page {
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
