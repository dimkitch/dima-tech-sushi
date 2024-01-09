<template>
  <div class="layout-wrapper">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.layout-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: calc(var(--header-height) + 30px);
  min-height: 100vh;
  overflow: hidden;
}
</style>