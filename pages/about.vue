<template>
  <main class="about-page">
    <AboutCompany class="about-page__about-company" />
    <Purpose class="about-page__purpose" />
    <OurStandarts class="about-page__our-standarts" />
    <OurBenefits class="about-page__our-benefits" />
    <QualityCertificates class="about-page__quality-certificates" />
    <Blog class="about-page__blog" />
  </main>
</template>
<script>
import AboutCompany from "@/components/shared/AboutCompany.vue";
import Purpose from "@/components/pages/about/Purpose.vue";
import OurStandarts from "@/components/shared/blocks/OurStandarts";
import QualitiStandart from "@/components/shared/blocks/OurStandarts/QualitiStandart.vue";
import OurBenefits from "@/components/shared/blocks/OurBenefits";
import QualityCertificates from "@/components/shared/blocks/QualityCertificates";
import Blog from "@/components/shared/blocks/Blog";
export default {
  components: {
    AboutCompany,
    Purpose,
    QualitiStandart,
    OurStandarts,
    OurBenefits,
    QualityCertificates,
    Blog,
  },
  data() {
    return {
      qualitiStandart: [
        {
          id: 12,
          title: "",
          subtitle: "",
        },
        {
          id: 12,
          title: "",
          subtitle: "",
        },
        {
          id: 12,
          title: "",
          subtitle: "",
        },
        {
          id: 12,
          title: "",
          subtitle: "",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.about-page {
  // .about-page__about-company
  &__about-company {
    margin-top: 94px;
    margin-bottom: 226px;
  }
  // .about-page__purpose
  &__purpose {
    margin-bottom: 150px;
  }
  // .about-page__our-standarts
  &__our-standarts {
    margin-bottom: 150px;
  }
  // .about-page__our-benefits
  &__our-benefits {
    margin-bottom: 150px;
  }
  // .about-page__quality-certificates
  &__quality-certificates {
    margin-bottom: 230px;
  }
  // .about-page__blog
  &__blog {
    margin-bottom: 80px;
  }
}
</style>
