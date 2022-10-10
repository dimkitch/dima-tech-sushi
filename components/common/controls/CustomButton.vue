<template>
  <button
    class="custom-btn"
    :class="`custom-btn--${size} custom-btn--${theme}`"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
    },
    rounded: {
      type: String,
    },
    theme: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="scss">
// xl,lg,md,nr,sm,xsm
.custom-btn {
  font-size: 15px;
  line-height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  transition: $transition-mod;
  @media (max-width: $breakpoint-mob) {
    width: 100%;
  }
  // .custom-btn--xl
  &--xl {
    padding: 9px 48px;
  }
  // .custom-btn--lg
  &--lg {
    padding: 21px 28px;
    letter-spacing: 0.1em;
  }
  // .custom-btn--md
  &--md {
    padding: 28px 27px;
    letter-spacing: 0.1em;
    border: 2px solid $color-accent;
  }
  // .custom-btn--nr
  &--nr {
    padding: 13px 23px;
    border-radius: 25px;
    width: 100%;
    @media (max-width: $breakpoint-tablet-md) {
      padding: 10px 14px;
    }
  }
  // .custom-btn--sm
  &--sm {
    padding: 10px 41px;
    border-radius: 10px;
  }
  // .custom-btn--xsm
  &--xsm {
    padding: 28px 58px;
    font-weight: 700;
    line-height: 18px;
    border: 2px solid $color-accent;
    @media (max-width: $breakpoint-tablet-md) {
      padding: 14px 28px;
    }
    &:hover {
      background-color: $color-light;
      color: $color-accent;
    }
  }

  // .custom-btn--round
  &--round {
    width: 66px;
    height: 66px;
    border-radius: 50%;
  }

  //Стили кнопок--------------------------------------------

  // .custom-btn--primary
  &--primary {
    background-color: $color-primary;
    color: $color-light;
    font-weight: 500;
  }
  // .custom-btn--accent
  &--accent {
    color: $color-light;
    background-color: $color-accent;
    text-transform: uppercase;
    font-weight: 700;
    // .custom-btn--accent:hover
    &:hover {
      color: $color-accent;
      background-color: $color-light;
      font-weight: 700;
    }
  }
  // .custom-btn--light
  &--light {
    background-color: $color-light;
    color: $color-primary;
  }
  // .custom-btn--danger
  &--danger {
    background-color: $color-danger;
    color: $color-light;
    font-weight: 400;
  } // .custom-btn--simple-primary
  &--simple-primary {
    background-color: $color-simple-primary;
    color: $color-light;
    font-weight: 400;
    &:hover {
      background-color: $color-danger;
    }
  }
}
</style>
