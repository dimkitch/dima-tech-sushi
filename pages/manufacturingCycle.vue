<template>
  <main class="manufacturing-сycle-page">
    <OurCyclesManufacturing
      class="manufacturing-сycle-page__our-cycles-manufacturing"
      :ourCyclesManufacturingData="pageData.ourCyclesManufacturing"
      v-if="pageData.ourCyclesManufacturing"
    />

    <OurBenefits
      class="manufacturing-сycle-page__our-benefits"
      :ourBenefitsData="pageData.ourBenefits"
      v-if="pageData.ourBenefits"
    />

    <QualityCertificates
      class="manufacturing-сycle-page__quality-certificates"
      :qualitiCertificateData="pageData.qualitiCertificate"
      v-if="pageData.qualitiCertificate"
    />

    <Blog
      class="manufacturing-сycle-page__blog"
      :blogData="pageData.blog"
      v-if="pageData.blog"
    />
  </main>
</template>
<script>
import OurCyclesManufacturing from "@/components/pages/ManufacturingCycle/OurCyclesManufacturing";
import OurBenefits from "@/components/shared/blocks/OurBenefits";
import QualityCertificates from "@/components/shared/blocks/QualityCertificates";
import Blog from "@/components/shared/blocks/Blog";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    OurCyclesManufacturing,
    OurBenefits,
    QualityCertificates,
    Blog,
  },
  data() {
    return {
      pageData: {},
    };
  },
  methods: {
    ...mapActions({ loadPage: "api/manufacturingCycle/LOAD_PAGE" }),
  },

  async mounted() {
    this.pageData = await this.loadPage();
  },
};
</script>
<style lang="scss">
.manufacturing-сycle-page {
  //   .manufacturing-сycle-page__our-cycles-manufacturing
  &__our-cycles-manufacturing {
    margin-top: 50px;
    margin-bottom: 150px;
  }
  //   .manufacturing-сycle-page__our-benefits
  &__our-benefits {
    margin-bottom: 150px;
  }
  //   .manufacturing-сycle-page__quality-certificates
  &__quality-certificates {
    margin-bottom: 230px;
  }
  //   .manufacturing-сycle-page__blog
  &__blog {
    margin-bottom: 211px;
  }
}
</style>
