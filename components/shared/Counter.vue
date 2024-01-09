<template>
  <div 
    class="counter"    
    :class="`counter--theme-${theme}`"
  >
    <div class="counter__inner">
      <div class="counter__item" @click="decrease">
        <MinusIcon class="counter__btn" />
      </div>
      <div class="counter__result text-md color-dark-deep-3">
        {{ count }}
      </div>
      <div class="counter__item" @click="addition">
        <PlusIcon class="counter__btn" />
      </div>
    </div>
  </div>
</template>
<script>
import MinusIcon from '@/components/common/icons/MinusIcon.vue'
import PlusIcon from '@/components/common/icons/PlusIcon.vue'

export default {
  components: {
    MinusIcon,
    PlusIcon
  },

  props: {
    theme: {
      type: String,
      default: 'deep'
    },

    count: {
      type: Number,
      defaul: 0
    }
  },

  methods: {
    addition(){
      this.$emit('addition')
    },

    decrease(){
      if(this.count <= 0) {
        return
      } else {
        this.$emit('decrease')
      }
    }
  }
}

</script>

<style lang="scss">
$b: ".counter";

#{$b} {
  // .counter__inner
  &__inner {
    display: grid;
    @include gridcols(3, 7px);
    align-items: center;
    text-align: center;
  }

  // .counter__item
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    color: $color-light;
    background-color: $color-dark-deep;

    // .counter--theme-light
    #{$b}--theme-light & {
      color: $color-dark-deep;
      background-color: $color-light;
    }
  }

  // .counter__result
  &__result {
    min-width: 26px;
    text-align: center;

    // .counter--theme-light
    #{$b}--theme-light & {
      color: $color-light;
    }
  }
}
</style>