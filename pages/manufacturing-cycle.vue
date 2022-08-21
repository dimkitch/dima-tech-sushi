<template>
  <main class="manufacturing-сycle-page">
    <OurCyclesManufacturing
      class="manufacturing-сycle-page__our-cycles-manufacturing"
    />
    <OurBenefits class="manufacturing-сycle-page__our-benefits" />
    <QualityCertificates
      class="manufacturing-сycle-page__quality-certificates"
    />
    <Blog class="manufacturing-сycle-page__blog" />
  </main>
</template>
<script>
import OurCyclesManufacturing from "@/components/pages/ManufacturingCycle/OurCyclesManufacturing";
import OurBenefits from "@/components/shared/blocks/OurBenefits";
import QualityCertificates from "@/components/shared/blocks/QualityCertificates";
import Blog from "@/components/shared/blocks/Blog";

export default {
  components: {
    OurCyclesManufacturing,
    OurBenefits,
    QualityCertificates,
    Blog,
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
