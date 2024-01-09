<template>
  <component
    :is="getTag"
    class="custom-button"
    :class="[
      { 'custom-button--is-active': isActive },
      `custom-button--${size}`,
      `custom-button--${theme}`
    ]"
    :href="href"
    :type="type"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="custom-button__content">
      <slot></slot>
    </span>
  </component>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'xl'
    },

    theme: {
      type: String,
      default: 'deep'
    },

    href: {
      type: String,
      default: ''
    },

    tag: {
      type: String,
      default: 'button'
    },

    isActive: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: ''
    }
  },

  computed: {
    getTag() {
      return this.href ? 'a' : this.tag
    }
  }
}
</script>

<style lang="scss">
$b: '.custom-button';

#{$b} {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: $transition-default;
  white-space: nowrap;

  // .custom-button--lg
  &--lg {
    padding: 16px 32px;
    border-radius: 100px;

    @include mobile {
      padding: 12px 18px;
    }
  }

  // .custom-button--md
  &--md {
    padding: 12px 30px;
    border-radius: 30px;
  }

  // .custom-button--md-2
  &--md-2 {
    padding: 8px 21px;
    border-radius: 8px;
  }

  // .custom-button--md-3
  &--md-3 {
    padding: 19px 22px;
    border-radius: 8px;
  }

    // .custom-button--md-4
  &--md-4 {
    padding: 14px 32px;
    border-radius: 4px;
  }

  // .custom-button--ll
  &--ll {
    padding: 8px;
    border-radius: 50%;
  }

  // .custom-button--light
  &--light {
    color: $color-dark-deep-2;
    background-color: $color-light;
    border: 2px solid transparent;

    @include hover {
      background-color: $color-dark-deep-2;
      color: $color-light;
    }
  }

  // .custom-button--light-shadow
  &--light-shadow {
    color: $color-dark;
    background-color: $color-light;
    border: 1px solid $color-secondary;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);

    @include hover {
      background-color: $color-dark-deep-2;
      color: $color-light;
    }
  }

    // .custom-button--deep
  &--deep {
    color: $color-light;
    background-color: $color-dark-deep;
    border: 2px solid transparent;

    @include hover {
      background-color:  $color-light;
      color: $color-dark-deep;
      border-color: $color-dark-deep;
    }
  }

  // .custom-button--warning-without-outline
  &--warning-without-outline {
    color: $color-warning;
    background-color: $color-light;

    // .custom-button--warning-without-outline.custom-button--is-active
    &#{$b}--is-active {
      color: $color-light;
      background-color: $color-dark-deep;
    }
  }
 
  // .custom-button--primary-deep
  &--primary-deep {
    color: $color-light;
    background-color: $color-primary-deep;
    border: 1px solid transparent;

    @include hover {
      background-color:  $color-light;
      color: $color-primary-deep;
      border-color: $color-primary-deep;
    }
  }
}
</style>
