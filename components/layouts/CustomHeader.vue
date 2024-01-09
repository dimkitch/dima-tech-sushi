<template>
  <header 
    class="custom-header" 
    ref="headerNode"
    :class="{ 'custom-header--is-opened-menu': isOpenedMenu }"
  >
    <div class="container">
      <div class="custom-header__inner">
        <div 
          class="custom-header__burger" 
          :class="{ 'custom-header__burger--is-active': isOpenedMenu }"
          @click="toggleMenu" 
          ref="burgerBtn"
        >
          <span class="custom-header__burger-item"></span>
          <span class="custom-header__burger-item"></span>
          <span class="custom-header__burger-item"></span>
        </div>
        <div class="custom-header__logo">
          <div class="custom-header__logo-wrapper">
            <img class="custom-header__logo-img" src="@/assets/images/logo.png">
            <img class="custom-header__logo-img-mob" src="@/assets/images/mob-logo.png">
          </div>
        </div>
        <div class="custom-header__wrapper" @click.self="toggleMenu">
          <div class="custom-header__wrapper-inner">
            <nav class="custom-header__nav">
              <ul class="custom-header__nav-list">
                <li 
                  class="custom-header__nav-item color-light text-md" 
                  v-for="(item, index) in menu" 
                  :key="`custom-header__nav-item-${index}`"
                >
                  <a :href="item.url" v-html="item.name"></a>
                </li>
              </ul>
            </nav>
            <div class="custom-header__phone">
              <div class="custom-header__phone-wrapper color-light">
                <a class="custom-header__phone-link text-lg" href="tel:80000000000" target="_blank">
                <PhoneIcon class="custom-header__phone-icon" />
                  <span class="custom-header__phone-number">
                    {{ phone }}
                  </span>
                </a>
              </div>
            </div>
            <div class="custom-header__action">
                <div class="custom-header__action-item">
                  <CustomButton 
                    size="ll" 
                    theme="light"
                    @click="$emit('clickOnBasketBtn')"
                  >
                    <BagIcon class="custom-header__action-icon"/>
                  </CustomButton>
                </div>
                <div class="custom-header__action-item">
                  <CustomButton size="md" theme="light">
                    Войти
                  </CustomButton>
                </div>
            </div>
          </div>
        </div>
        <div class="custom-header__phone-mob">
          <a class="custom-header__phone-link text-lg color-light" href="tel:80000000000" target="_blank">
            <PhoneIcon class="custom-header__phone-icon" />
          </a>
        </div>
        <!-- <HeaderMob 
          :menu="menu" 
          :is-visible="isOpenedMenu"
          @close="toggleMenu"
          @clickOnBasketBtn="$emit('clickOnBasketBtn')"
        /> -->
      </div>
    </div>
  </header>
</template>

<script>
import PhoneIcon from '@/components/common/icons/PhoneIcon.vue';
import BagIcon from '@/components/common/icons/BagIcon.vue';
import CustomButton from '@/components/common/controls/CustomButton.vue'
import HeaderMob from '@/components/layouts/HeaderMob.vue'

export default {
  components: { 
    PhoneIcon,
    BagIcon, 
    CustomButton,
    HeaderMob
  },

  props: {
    menu: {
      type: Array,
      default: () => [
        {
          url: '/', 
          name: 'Меню'
        },
        {
          url: '/', 
          name: 'Доставка'
        },
        {
          url: '/', 
          name: 'Акции'
        },
        {
          url: '/', 
          name: 'Отзывы'
        },
        {
          url: '/', 
          name: 'Контакты'
        },
      ]
    },

    phone: {
      type: String,
      default: '+8800000000000'
    },

    theme: {
      type: String,
      default: 'default'
    },

    isStatic: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isOpenedMenu: false
    }
  },

  methods: {
    toggleMenu() {
      this.isOpenedMenu = !this.isOpenedMenu

      const delta = window.innerWidth - document.documentElement.clientWidth
      const method = this.isOpenedMenu ? 'add' : 'remove'

      document.body.classList[method]('scroll-lock')
      document.body.style.paddingRight = this.isOpenedMenu ? `${delta}px` : ''
    },

    setHeaderHeight() {
      const headerHeight = this.$refs.headerNode.getBoundingClientRect().height;

      document.documentElement.style.setProperty(
        '--header-height',
        `${headerHeight}px`
      )
    },
  },

  mounted() {
    this.$nextTick().then(() => {
      this.setHeaderHeight()
      window.addEventListener('resize', this.setHeaderHeight)
    })
  }
}
</script>

<style lang="scss">
$b: '.custom-header';

$logo-size: 132px;
$logo-size-md: 80px;
$header-height: var(--header-height);

#{$b} {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  min-height: 60px;
  background-color: $color-primary;

  // .custom-header__inner
  &__inner {
    position: relative;
    display: flex;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;

    @include tablet {
      padding: 0;
    }
  }

  // .class="custom-header__burger
  &__burger {
    position: relative;
    width: 24px;
    height: 24px;
    display: none;
    margin-right: 20px;
    cursor: pointer;

    @include tablet {
      display: block;
    }
    
    // .custom-header__burger-item
    &-item {
      position: absolute;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: $color-light;
      transition: $transition-default;

      &:nth-child(1) {
        top: 0; 

        #{$b}__burger--is-active & {
          transform: rotate(45deg) translate(8px, 8px);
        }
      }

      &:nth-child(2) {
       top: 50%;

        #{$b}__burger--is-active & {
          opacity: 0;
        }
      }

      &:nth-child(3) {
        bottom: 0; 

        #{$b}__burger--is-active & {
          transform: rotate(-45deg) translate(7px, -7px); 
        }
      }
    }
  }

  // .custom-header__logo
  &__logo {
    position: relative;
    width: $logo-size;
    margin-right: 60px;
    
    @include tablet {
      margin-right: auto;
      width: unset;
    }

    // .custom-header__logo-wrapper
    &-wrapper {
      position: absolute;
      top: 0;
      width: $logo-size;
      height: $logo-size;
      border-radius: 50%;
      background-color: $color-light;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(1px -1px 16px rgba(0, 0, 0, 0.06));
      transform: translateY(-55px);
      padding-top: 20px;

      @include tablet {
        position: unset;
        width: $logo-size-md;
        height: 52px;
        transform: unset;
        background-color: transparent;
        border-radius: unset;
        padding: unset;
        filter: unset;
      }
    }

    // .custom-header__logo-img
    &-img {
      object-fit: contain;
      width: 100%;
      height: 100%;

      @include tablet {
        display: none;
      }

      // .custom-header__logo-img-mob
      &-mob {
        display: none;
        object-fit: contain;
        width: 100%;

        @include tablet {
          display: block;
        }
      }
    }
  }

  // .custom-header__wrapper
  &__wrapper {
    display: flex;
    width: 100%;

    // .custom-header__wrapper-inner
    &-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      // .custom-header--is-opened-menu .custom-header__wrapper-inner
      #{$b}--is-opened-menu & {
        display: flex;
        flex-direction: column;
        align-items: unset;
        justify-content: unset;
        max-width: 375px;
        background-color: $color-primary;
        padding: 25px;
        overflow-x: hidden;
        overflow-y: auto;
        transition: $transition-default;
      }
    }

    // .custom-header--is-opened-menu
    #{$b}--is-opened-menu & {
      position: fixed;
      top: $header-height;
      left: 0;
      width: 100%;
      height: calc(100vh - $header-height + 1px);
      background-color: rgba($color-primary, 0.7);
      transition: $transition-default;
      z-index: 10;
    }
  }

  // .custom-header__main
  // &__main {
  //   padding: 31px 0 31px 0;
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   width: 100%;
  
  //   @include tablet-md {
  //     padding: unset;
  //     width: unset;
  //   }
  // }

  // .custom-header__nav
  &__nav {
    @include tablet {
      display: none;
      margin-bottom: 20px;
    }

    //.custom-header--is-opened-menu .custom-header__nav-list
    #{$b}--is-opened-menu & {
      display: flex;
    }
  
    // .custom-header__nav-list
    &-list {
      display: flex;
      align-items: center;

      @include mobile {
        width: 100%;
      }

      //.custom-header--is-opened-menu .custom-header__nav-list
      #{$b}--is-opened-menu & {
        flex-direction: column;
        align-items: unset;
      }
    }

    // .custom-header__nav-item
    &-item {
      position: relative;

      @include mobile {
        width: 100%;
        font-size: 20px;
      }

      &:not(:last-child) {
        padding-right: 32px;
        
        @include mobile {
          margin-bottom: 10px;  
        }
      }

      &::before {
        content: '';
        position: absolute;
        right: 16px;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        width: 3px;
        height: 3px;
        background-color: $color-light;

        @include mobile {
          right: 0;
        }
      }
    }
  }

  // .custom-header__phone
  &__phone {
    margin-left: auto;

    #{$b}--is-opened-menu & {
      display: none;
    }

    // .custom-header__phone-wrapper
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    // .custom-header__phone-link
    &-link {
      display: flex;
      align-items: center;
    }

    // .custom-header__phone-number
    &-number {
      @include tablet-md {
        display: none;
      }
    }

    // .custom-header__phone-icon
    &-icon {
      width: 24px;
      height: 24px;
      margin-right: 6px;
    }
  }

  // .custom-header__phone-mob
  &__phone-mob {
    #{$b}:not(#{$b}--is-opened-menu) & {
      display: none;
    }
  }

  // .custom-header__action
  &__action {
    display: flex;
    align-items: center;
    margin-left: auto;

    @include tablet-md {
      display: none;
    }

    // .custom-header--is-opened-menu .custom-header__action
    #{$b}--is-opened-menu & {
      display: flex;
      justify-content: space-between;
      margin-left: unset;
    }

    // .custom-header__action-item
    &-item {
      &:not(:last-child) {
        margin-right: 24px;
      }
    }

    // .custom-header__action-icon
    &-icon {
      width: 24px;
      height: 24px;  
    }
  }

  // .custom-header__basket
  &__basket {
    transform: translateX(100%);
    transition: all 0.3s linear;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 613px;
    padding: 40px;
    background-color: $color-warning-light;

    // .custom-header__basket--is-active
    &--is-active {
      display: block;
      transform: translateX(0);
    }
  }
}
</style>