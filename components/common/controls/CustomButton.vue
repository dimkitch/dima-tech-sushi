<template>
  <div :class="`${size} ${theme}`">
    <button
      class="custom-btn"
      :class="`custom-btn--${size} custom-btn--${theme}`"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "md", // md || lg || rounded
    },
    theme: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style lang="scss">
.custom-btn {
  border-radius: 20px;
  cursor: pointer;
  transition: $transition-mod;
  // .custom-btn--md
  &--md {
    padding: 27px 28px;
  }

  // .custom-btn--lg
  &--lg {
    padding: 21px 28px;
  }
  // .custom-btn--round
  &--round {
    border-radius: 50px;
  }

  // .custom-btn--primary
  &--primary {
    background-color: $color-primary;
  }
}
</style>
