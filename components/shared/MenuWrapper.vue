<template>
  <div class="menu-wrapper" @click.self="$emit('closeMenu')">
    <div class="menu-wrapper__inner">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
$b: '.menu-wrapper';

#{$b} {
  // .menu-wrapper__inner
  &__inner {
    position: fixed;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    max-width: 613px;
    padding: 40px;
    background-color: $color-warning-light;
    transition: all 0.3s linear;
  }
}
</style>