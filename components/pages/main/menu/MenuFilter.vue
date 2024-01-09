<template>
  <div class="menu-filter">
    <div class="menu-filter__inner">
      <CustomButton 
        v-for="item in filters"
        :key="`menu-filter__item-${item.id}`"
        class="menu-filter__item text-xxl tt-uppercase"
        :is-active="isExistValue && value.code === item.code"
        size="lg"
        theme="warning-without-outline"
        @click="$emit('input', item)"
      >
        {{ item.name }}
      </CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/common/controls/CustomButton.vue'

export default {
  components: {
    CustomButton
  },

  props: {
    filters: {
      type: Array,
      default: () => []
    },

    value: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    isExistValue() {
      return this.value && Object.keys(this.value).length > 0   
    }
  }
}
</script>

<style lang="scss">
$b: '.menu-filter';

#{$b} {
  // .menu-filter__inner
  &__inner {
    display: flex;
    
    @include tablet-md {
      flex-wrap: wrap;
    }
  }
}
</style>