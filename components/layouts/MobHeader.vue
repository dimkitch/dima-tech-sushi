<template>
  <div class="mob-header">
    <div class="mob-header__inner">
      <div class="mob-header__top">
        <nuxt-link class="mob-header__logo" :to="{ name: 'index' }">
          <img src="~@/assets/img/header-logo.png" />
        </nuxt-link>
        <CloseIcon class="mob-header__btn-close" @click="$emit('close')" />
      </div>
      <nav class="mob-header__nav">
        <ul class="mob-header__list">
          <li
            class="mob-header__item"
            v-for="(item, index) in navMenu"
            :key="`mob-header__item-${index}`"
          >
            <nuxt-link
              class="mob-header__link text-xmd color-light"
              :to="{ name: item.link }"
              >{{ item.name }}</nuxt-link
            >
          </li>
        </ul>
      </nav>

      <div class="mob-header__callback">
        <Callback
          class="mob-header__item-callback"
          callbackInfo="Телефон"
          callbackTel="310-437-2766"
        />
        <Callback
          class="mob-header__item-callback"
          callbackInfo="Почта"
          callbackTel="unreal@outlook.com"
        />
        <Callback
          class="mob-header__item-callback"
          callbackInfo="Адрес"
          callbackTel="706 Campfire Ave. Meriden"
        />
        <Callback
          class="mob-header__item-callback"
          callbackInfo="Для оптовых покупателей"
          callbackTel="310-437-2766"
        />
      </div>
    </div>
    <!-- <CustomInputSearch /> -->
  </div>
</template>
<script>
import HeaderLogoIcon from "@/components/common/icons/HeaderLogoIcon.vue";
import CloseIcon from "@/components/common/icons/CloseIcon.vue";
import Callback from "@/components/shared/Callback.vue";

import CustomInputSearch from "@/components/common/inputs/CustomInputSearch.vue";
export default {
  components: {
    HeaderLogoIcon,
    CloseIcon,
    Callback,
    CustomInputSearch,
  },

  data() {
    return {
      navMenu: [
        { name: "Каталог", link: "catalog" },
        { name: "О компании", link: "about" },
        { name: "Цикл производства", link: "manufacturingCycle" },
      ],
      mobIsActive: false,
    };
  },

  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) this.$emit("close");
    });
  },
};
</script>
<style lang="scss">
.mob-header {
  width: 100vw;
  height: 100vh;
  background-color: $color-dark-light;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  overflow-y: auto;

  // .mob-header__inner
  &__inner {
    padding-top: 52px;
    padding-right: 25px;
    padding-bottom: 83px;
    padding-left: 35px;
    display: flex;
    flex-direction: column;
  }

  // .mob-header__top
  &__top {
    display: flex;
    align-items: center;
  }

  //   .mob-header__logo
  &__logo {
    margin-left: auto;
    margin-right: auto;
  }

  //   .mob-header__btn-close
  &__btn-close {
    width: 36px;
    height: 36px;
    color: $color-light;
    transition: $transition-mod;
    cursor: pointer;
    &:hover {
      color: $color-primary;
    }
  }

  // .mob-header__nav
  &__nav {
    text-align: center;
    margin-top: 103px;
  }

  // .mob-header__item
  &__item {
    &:not(:last-child) {
      margin-bottom: 30px;
    }
  }

  // .mob-header__link
  &__link {
    transition: $transition-mod;
    cursor: pointer;
    &:hover {
      color: $color-primary;
    }
  }

  //   .mob-header__callback
  &__callback {
    margin-left: auto;
    margin-right: auto;
    margin-top: 140px;
  }

  // .mob-header__item-callback
  &__item-callback {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
