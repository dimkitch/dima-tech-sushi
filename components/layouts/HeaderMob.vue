<template>
  <div class="header-mob" :class="{ 'header-mob--is-visible': isVisible }">
    <div class="header-mob__inner">
      <nav class="header-mob__nav">
        <ul class="header-mob__nav-list">
          <li 
            class="header-mob__nav-item color-light text-md" 
            v-for="(item, index) in menu" 
            :key="`header-mob__nav-item-${index}`"
          >
            <a :href="item.url" v-html="item.name"></a>
          </li>
        </ul>
      </nav>
      <div class="header-mob__action">
        <div class="header-mob__action-item">
          <CustomButton 
            size="ll" 
            theme="light"
            @click="$emit('clickOnBasketBtn')"
          >
            <BagIcon class="header-mob__action-icon"/>
          </CustomButton>
        </div>
        <div class="header-mob__action-item">
          <CustomButton size="md" theme="light">
            Войти
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/common/controls/CustomButton.vue'
import BagIcon from '@/components/common/icons/BagIcon.vue'

export default {
  components: {
    CustomButton,
    BagIcon
  },

  props: {
    menu: {
      type: Array,
      default: () => []
    },

    isVisible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
$b: '.header-mob';
$header-height: var(--header-height);

#{$b} {
  position: fixed;
  top: $header-height;
  left: 0;
  width: 100%;
  height: calc(100vh - $header-height + 1px);
  background-color: rgba($color-primary, 0.7);
  transition: $transition-default;
  z-index: 10;

  &:not(#{$b}--is-visible) {
    background-color: transparent;
    pointer-events: none;
    touch-action: none;
  }
  
  // .header-mob__inner
  &__inner {
    width: 100%;
    max-width: 375px;
    height: 100%;
    max-height: 100%;
    background-color: $color-primary;
    padding: 25px;
    overflow-x: hidden;
    overflow-y: auto;
    transition: $transition-default;

    #{$b}:not(#{$b}--is-visible) & {
      transform: translateX(-100%);
    }
  }

  // .header-mob__nav
  &__nav {
    margin-bottom: 40px;
  }

  // .header-mob__action
  &__action {
    display: flex;
    justify-content: space-between;
  }
}
</style>