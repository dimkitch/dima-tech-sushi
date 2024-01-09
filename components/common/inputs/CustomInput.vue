<template>
  <div
    class="custom-input"
    :class="[
      { 'custom-input--active': isMoved, 'custom-input--is-error': isError },
      `custom-input--size-${size}`
    ]"
  >
    <div class="custom-input__wrapper">
      <input
        class="custom-input__input text-2md"
        :class="{ 'ff-archivo': isNumeric }"
        :type="type"
        :value="value"
        @focus="movePlaceholder"
        @blur="unsetMove"
        @input="onInput"
      />
      <div class="custom-input__placeholder text-2sm">
        <slot></slot>
      </div>
      <div class="custom-input__icon">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },

    size: {
      type: String,
      default: 'default'
    },

    value: {
      type: [String, Number],
      default: ''
    },

    isError: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isMoved: false
    }
  },

  computed: {
    isNumeric() {
      return ['number', 'tel'].includes(this.type)
    }
  },

  methods: {
    movePlaceholder() {
      this.isMoved = true
    },

    unsetMove(e) {
      this.isMoved = Boolean(e.target.value)
    },

    onInput(e) {
      if (e.target && e.target instanceof HTMLInputElement) {
        this.$emit('input', e.target.value)
      }
    }
  }
}
</script>

<style lang="scss">
$b: '.custom-input';

#{$b} {
  // .custom-input__wrapper
  &__wrapper {
    position: relative;
    padding: 6px 6px 6px 45px;
    border-bottom: 1px solid #D9D9D9;

    // .custom-input--size-md .custom-input__wrapper
    #{$b}--size-md & {
      border-radius: 12px;
      padding: 16px;
    }

    // .custom-input--size-md .custom-input__wrapper
    #{$b}--is-error & {
      border-color: red;
    }
  }

  // .custom-input__input
  &__input {
    width: 100%;
  }

  // .custom-input__placeholder
  &__placeholder {
    position: absolute;
    top: 50%;
    left: 46px;
    transform: translateY(-50%);
    padding: 0 4px;
    user-select: none;
    pointer-events: none;
    touch-action: none;
    transition: $transition-default;
    
    // .custom-input--active .custom-input__placeholder
    #{$b}--active & {
      top: 0;
      color: $color-secondary-deep;
    }
  }

  // .custom-input__icon
  &__icon {
    position: absolute;
    left: 6px;
    top: 50%;
    width: 18px;
    height: 18px;
    transform: translateY(-50%);
  }
}
</style>
