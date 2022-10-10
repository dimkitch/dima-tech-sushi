<template>
  <div class="layout-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.layout-wrapper {
  padding-top: 144px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;
  @media (max-width: $breakpoint-mob) {
    padding-top: 77px;
  }
}
</style>
