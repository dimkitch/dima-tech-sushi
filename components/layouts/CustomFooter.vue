<template>
  <footer class="custom-footer">
    <div class="container">
      <div class="custom-footer__inner color-light title-xl">
        <div>Footer</div>
        <div>Footer</div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  $b: '.custom-footer';

  #{$b} {
    background-color: $color-primary;

    // .custom-footer__inner 
    &__inner {
      justify-content: space-between;
      display: flex;
      height: 90px;
      width: 100%;
    }
  }
</style>
