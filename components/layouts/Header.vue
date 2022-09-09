<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <MobHeader
          @close="hiddenMenu()"
          class="header__mob-header"
          :class="{
            'header__mob--active': mobIsActive,
          }"
        />
        <div class="header__top" :class="{ 'header__top--scroll': scroll }">
          <nuxt-link :to="{ name: 'index' }">
            <img
              class="header__logo"
              src="~@/assets/img/header-logo.png"
              alt=""
          /></nuxt-link>
          <div class="header__callback">
            <Callback
              class="header__ask-callback"
              callbackInfo="Появились вопросы?"
              callbackTel="310-437-2766"
            />
            <Callback
              class="header__ask-buying"
              callbackInfo="Для оптовых покупателей"
              callbackTel="310-437-2766"
            />
          </div>
        </div>
        <div class="header__bottom">
          <CustomInputSearch class="header__search" />
          <div class="header__burger">
            <button class="burger-menu" @click="showMenu()">
              <span class="burger-menu__item"></span>
              <span class="burger-menu__item"></span>
              <span class="burger-menu__item"></span>
            </button>
          </div>
        </div>
        <nav class="header__nav nav">
          <ul class="nav__list">
            <li
              v-for="(item, index) in navMenu"
              :key="`nav__item-${index}`"
              class="nav__item"
            >
              <nuxt-link
                class="nav__link text-nr color-secondary-basalt-deep"
                :to="{ name: item.link }"
                >{{ item.name }}</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
import MobHeader from "@/components/layouts/MobHeader.vue";
import Callback from "@/components/shared/Callback.vue";
import CustomInputSearch from "@/components/common/inputs/CustomInputSearch.vue";
import CustomInput from "@/components/common/controls/CustomInput.vue";

export default {
  components: {
    MobHeader,
    Callback,
    CustomInputSearch,
    CustomInput,
  },

  data() {
    return {
      navMenu: [
        { name: "Каталог", link: "catalog" },
        { name: "О компании", link: "about" },
        { name: "Блог", link: "" },
        { name: "Цикл производства", link: "manufacturingCycle" },
      ],
      mobIsActive: false,
      scroll: false,
      scrollPosition: 0,
    };
  },

  methods: {
    scrolling() {
      if (window.scrollY > 100) return (this.scroll = true);
      else if (window.scrollY < 100) return (this.scroll = false);
    },
    onScroll(event) {
      let container = event.target;
      this.scrollPosition = container.scrollTop;
      console.log(event);
    },

    showMenu() {
      this.mobIsActive = true;
      document.body.style.overflow = "hidden";
    },
    hiddenMenu() {
      this.mobIsActive = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 144px;
  background-color: $color-watermark;
  backdrop-filter: blur(12px);
  box-shadow: 0px 6px 20px 1px rgba(34, 60, 80, 0.15);
  @media (max-width: $breakpoint-mob) {
    height: 77px;
  }

  // .header__inner
  &__inner {
    @media (max-width: $breakpoint-tablet) {
      display: flex;
      flex-direction: column;
    }
  }

  // .header__mob-header
  &__mob-header {
    transition: $transition-mod-longer;
    transform: translateX(100%);
    pointer-events: unset;
    touch-action: unset;
    opacity: 0;
  }

  // .header__mob--active
  &__mob--active {
    transition: $transition-mod;
    transform: translateX(0);
    pointer-events: unset;
    touch-action: unset;
    opacity: 1;
  }

  // .header__item
  &__item {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }

  // .header__top
  &__top {
    display: flex;
    justify-content: space-between;
    height: 72px;
    align-items: center;
    border-bottom: 1px solid $color-secondary-light-deep;
    // .header__top--scroll
    &--scroll {
      background-color: red;
    }
    @media (max-width: $breakpoint-tablet) {
      border: none;
      justify-content: center;
    }
    @media (max-width: $breakpoint-mob) {
      display: none;
    }
  }

  //  .header__logo
  &__logo {
    width: 149px;
    height: 64px;
    @media (max-width: $breakpoint-mob) {
      display: none;
    }
  }

  // .header__callback
  &__callback {
    display: grid;
    grid-template-columns: auto auto;
    gap: 41px;
    @media (max-width: $breakpoint-tablet) {
      display: none;
    }
  }

  // .header__bottom
  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $breakpoint-mob) {
      margin-top: 15px;
    }
  }

  // .header__search
  &__search {
    display: none;
    @media (max-width: $breakpoint-tablet) {
      display: block;
    }
  }

  // .header__burger
  &__burger {
    display: none;
    @media (max-width: $breakpoint-tablet) {
      display: flex;
    }
  }

  // .header__nav
  &__nav {
    margin-top: 27px;
  }
}

.nav {
  display: flex;
  align-items: center;
  @media (max-width: $breakpoint-tablet) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: $color-dark-light;
    z-index: 50;
    overflow-y: auto;
    transition: $transition-mod;
    display: flex;
    flex-direction: column;
    transform: translateX(100vw);
    pointer-events: none;
    touch-action: none;
    opacity: 0;
    margin-top: 0;
  }
  // .nav__list
  &__list {
    display: flex;
    @media (max-width: $breakpoint-tablet) {
      padding-right: 50px;
      margin-left: auto;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  // .nav__item
  &__item {
    &:not(:last-child) {
      margin-right: 40px;
      @media (max-width: $breakpoint-tablet) {
        margin-right: 0;
        margin-bottom: 30px;
      }
    }
  }

  // .nav__link
  &__link {
    transition: $transition-mod;
    &:hover {
      color: $color-primary;
    }
  }
}

.burger-menu {
  width: 40px;
  height: 40px;
  padding: 10px 5px;
  display: block;
  cursor: pointer;

  //   .burger-menu__item
  &__item {
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 30px;
    background-color: #757575;
    transition: all 0.3s ease;

    //   .burger-menu__item:not(:last-child)
    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }
}
</style>
