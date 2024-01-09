<template>
  <div class="menu-list">
    <div class="menu-list__inner">
      <MenuCard 
        class="menu-list__item" 
        v-for="card in cards" 
        :key="`menu-list__item-${card.id}`" 
        :card="card" 
        @addToBasket="$emit('addToBasket', card)"
        @addition="$emit('addition', card)"
        @decrease="$emit('decrease', card)"
      />
    </div>
  </div>
</template>

<script>
import MenuCard from '@/components/pages/main/menu/MenuCard.vue'

export default {
  components: {
    MenuCard
  },

  props: {
     cards: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
$b: '.menu-list';

#{$b} {
  // .menu-list__inner
  &__inner {
    @include gridcols(4, 30px);

    @include low-desktop-lg {
      @include gridcols(3, 30px)
    }

    @include mobile {
      @include gridcols(1, 30px)
    }
  }

  // .menu-list__item
  &__item {
    display: flex;
  }
}
</style>>