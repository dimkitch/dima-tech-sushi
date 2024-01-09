<template>
  <div class="menu">
    <div class="container">
      <div class="menu__wrapper">
        <span class="menu__shape"></span>
        <h1 class="menu__title title-xl color-dark-deep tt-uppercase">
          {{ title }}
        </h1>
        <span class="menu__shape"></span>
      </div>
      <MenuFilter 
        class="menu__filter" 
        :filters="filters"
        v-model="selectedFilter"
      />
      <div class="menu__inner">
        <MenuList 
          :cards="filteredItems"
          @addToBasket="addToBasket"
          @addition="addition"
          @decrease="decrease"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions} from "vuex";

import MenuList from '@/components/pages/main/menu/MenuList.vue'
import MenuFilter from '@/components/pages/main/menu/MenuFilter.vue'

export default {
  components: {
    MenuList,
    MenuFilter
  },

  props: {
    title: {
      type: String,
      default: ''
    },
    
    cards: {
      type: Array,
      default: () => []
    },

    filters: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
     selectedFilter: null
    }
  },

  computed: {
    ...mapGetters({ basketItems: 'api/basket/GET_ITEMS' }),
    
    mappedItems() {
      return this.cards.map(card => {
        const basketItem = this.basketItems.find(item => item.id === card.id )
        const quantity = basketItem ? basketItem.quantity : 0

        return { ...card, quantity }
      })
    },

    filteredItems() {
      return this.selectedFilter
        ? this.mappedItems.filter(item => item.code === this.selectedFilter.code)
        : this.mappedItems
    },

    isExistFilters() {
      return this.filters.length > 0
    }
  },

  methods: {
    ...mapMutations({ setItem: 'api/basket/SET_ITEM' }),

    ...mapActions({
      addition: 'api/basket/ADDITION',
      decrease: 'api/basket/DECREASE',
    }),

    onSelect(data) {
      this.selectedFilter = data
    },

    addToBasket(card) {
      this.setItem(card)
    },
  }
}
</script>

<style lang="scss">
$b: '.menu';

#{$b} {
  // .menu__wrapper
  &__wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    justify-content: center;

    @include low-desktop-lg {
      margin-bottom: 30px;
    }
  }

  // .menu__shape
  &__shape {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: $color-dark-deep;
  }

  // .menu__title
  &__title {
    padding: 0 40px;
  }

  // .menu__filter
  &__filter {
    margin-bottom: 60px;

    @include low-desktop-lg {
      margin-bottom: 20px;
    }
  }
}
</style>