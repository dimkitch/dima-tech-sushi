<template>
  <main class="main-page" v-if="pageData">
    <Menu 
      :title="pageData.menuData.title" 
      :cards="pageData.menuData.cards" 
      :filters="pageData.menuData.filters" 
    />
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Menu from '@/components/pages/main/menu/Menu.vue';
import Counter from '@/components/shared/Counter.vue';
import Basket from '@/components/shared/blocks/basket/Basket.vue'
import OrderPlacmentForm from '@/components/shared/forms/OrderPlacmentForm.vue'

export default {
  components: {
    Menu,
    Counter,
    Basket,
    OrderPlacmentForm
  },

  props: {
    menuData: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    ...mapActions({ loadPage: "api/main/LOAD_PAGE" })
  },

  computed: {
    ...mapGetters({ pageData: "api/main/PAGE_DATA" })
  },

  async created() {
    await this.loadPage();
  },
};
</script>

<style lang="scss">
$b: '.main-page';

#{$b} {
}
</style>
