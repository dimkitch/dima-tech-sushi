<template>
  <LayoutWrapper class="layout-default">
    <CustomHeader @clickOnBasketBtn="setStateBasketVisible(true)"/>
    <Nuxt />
    <CustomFooter />
    <BasketWindow 
      :is-opened="bascketMenuIsOpened" 
      @closeBasket="setStateBasketVisible(false)"
    />
  </LayoutWrapper>
</template>

<script>
import CustomHeader from "@/components/layouts/CustomHeader.vue";
import LayoutWrapper from "@/components/layouts/LayoutWrapper.vue";
import CustomFooter from "@/components/layouts/CustomFooter.vue";
import BasketWindow from '@/components/shared/blocks/basket/BasketWindow.vue'

export default {
  components: { 
    CustomHeader, 
    LayoutWrapper, 
    CustomFooter,
    BasketWindow
  },

  data() {
    return {
      bascketMenuIsOpened: false
    }
  },

  methods: {
    setStateBasketVisible(state) {
      this.bascketMenuIsOpened = state
    }
  }
};
</script>

<style lang="scss">
$b: '.layout-default';

#{$b} {
  // .layout-default__menu-wrapper
  &__menu-wrapper {
    transform: translateX(-100%);
    position: fixed;
    left: 0;
    top: var(--header-height);
    width: 100%;
    height: 100%;
    background-color: rgba(60, 75, 97, 0.60);
    // .layout-default__menu-wrapper--is-active
    &--is-active {
      transform: translateX(0);
    }  
  }
  // .layout-default__basket
  &__basket {
    // position: fixed;
    // top: 0;
    // right: 0;
    // z-index: 1;
    // transform: translateX(100%);
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // height: 100vh;
    // max-width: 613px;
    // padding: 40px;
    // background-color: $color-warning-light;
    // transition: all 0.3s linear;

    &::after {
      position: absolute;
      display: block;
      background-color: red;
      top: var(--header-height);
      left: 0;
      width: 100%;
      height: 100%;
    }

    // .layout-default__basket--is-active
    &--is-active {
      display: block;
      transform: translateX(0);
    }
  }
}
</style>
