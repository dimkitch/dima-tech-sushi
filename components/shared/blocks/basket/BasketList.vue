<template>
  <div class="basket-list">
    <BasketCard 
      v-for="card in basketItems" 
      :key='`basket-list__item-${card.id}`'
      class="basket-list__item"
      :card="card"
      @addition="$emit('addition', card)"
      @decrease="$emit('decrease', card)"
      @delete="$emit('delete', card)"
    />
  </div>
</template>

<script>
import BasketCard from '@/components/shared/blocks/basket/BasketCard.vue'

export default {
  components: {
    BasketCard
  },

  props: {
    basketItems: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
$b: '.basket-list';

#{$b} {
  // .basket-list__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}
</style>