<template>
  <div class="layout-wrapper">
    <slot />
  </div>
</template>

<style lang="scss">
.layout-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
