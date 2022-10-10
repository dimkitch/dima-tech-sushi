<template>
  <main class="about-page" v-if="pageData">
    <AboutCompany
      class="about-page__about-company"
      :aboutCompanyData="pageData.aboutCompany"
      v-if="pageData.aboutCompany"
    />

    <Purpose
      class="about-page__purpose"
      :purposeData="pageData.purpose"
      v-if="pageData.purpose"
    />

    <OurStandarts
      class="about-page__our-standarts"
      :standartData="pageData.ourStandarts"
      v-if="pageData.ourStandarts"
    />

    <OurBenefits
      class="about-page__our-benefits"
      :ourBenefitsData="pageData.ourBenefits"
      v-if="pageData.ourBenefits"
    />

    <QualityCertificates
      class="about-page__quality-certificates"
      :qualitiCertificateData="pageData.qualitiCertificate"
      v-if="pageData.qualitiCertificate"
    />

    <Blog
      class="about-page__blog"
      :blogData="pageData.blog"
      v-if="pageData.blog"
    />
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
import { mapActions, mapGetters } from "vuex";
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

  methods: {
    ...mapActions({ loadPage: "api/about/LOAD_PAGE" }),
  },

  computed: {
    ...mapGetters({ pageData: "api/about/PAGE_DATA" }),
  },

  async mounted() {
    await this.loadPage();
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
