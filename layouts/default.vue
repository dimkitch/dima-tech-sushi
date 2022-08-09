<template>
  <LayoutWrapper class="layout-default">
    <Header />
    <Nuxt />
    <Footer />
  </LayoutWrapper>
</template>

<script>
import Header from "@/components/layouts/Header.vue";
import LayoutWrapper from "@/components/layouts/LayoutWrapper.vue";
import Footer from "@/components/layouts/Footer.vue";

export default {
  components: { Header, LayoutWrapper, Footer },
};
</script>
