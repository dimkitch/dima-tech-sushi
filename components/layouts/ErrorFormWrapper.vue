<template>
  <div
    class="error-form-wrapper"
    :class="{'error-form-wrapper--is-visible': isVisible}"
    :style="errorFormStyle"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    
    maxHeight: {
      type: Number,
      default: 0
    }
  },

  computed: {
    errorFormStyle() {
      return this.maxHeight ? `max-height: ${this.maxHeight}px` : ''
    }
  }
}
</script>

<style lang="scss">

$b: '.error-form-wrapper';

#{$b} {
  display: block;
  font-size: 12px;
  line-height: 160%;
  color: red;
  overflow: hidden;
  transition: $transition-default;
  max-height: 0;

  &:not(#{$b}--is-visible) {
    margin: 0 !important;
  }

  &--is-visible {
    max-height: 50px;
    margin: 3px 0 0;
  }
}
</style>
