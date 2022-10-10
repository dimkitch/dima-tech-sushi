<template>
  <main class="catalog-page" v-if="pageData">
    <Catalog
      class="catalog-page__catalog"
      :catalogProductsData="pageData.catalogProducts"
      v-if="pageData.catalogProducts"
    />
    <Discount class="catalog-page__discount" />
  </main>
</template>
<script>
import Catalog from "@/components/pages/catalog";
import Discount from "@/components/pages/home/Discount.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Discount,
    Catalog,
  },

  methods: {
    ...mapActions({ loadPage: "api/catalog/LOAD_PAGE" }),
  },

  computed: {
    ...mapGetters({ pageData: "api/catalog/PAGE_DATA" }),
  },

  async mounted() {
    await this.loadPage();
  },
};
</script>
<style lang="scss">
.catalog-page {
  margin-top: 42px;
}
</style>
