<template>
  <header class="header">
    <div class="container">
      <div class="header__top">
        <nuxt-link :to="{ name: 'index' }">
          <HeaderLogoIcon class="header__logo"
        /></nuxt-link>
        <div class="header__callback">
          <div class="header__callback-asks">
            <TelIcon class="header__callback-ico" />
            <div>
              <p class="text-lg color-secondary-basalt-deep">
                Появились вопросы?
              </p>
              <p class="text-md color-primary fw-bold">310-437-2766</p>
            </div>
          </div>
          <div class="header__callback-buying">
            <TelIcon class="header__callback-ico" />
            <div>
              <p class="text-lg color-secondary-basalt-deep">
                Для оптовых покупателей
              </p>
              <p class="text-md color-primary fw-bold">310-437-2766</p>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
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
  </header>
</template>
<script>
import CustomInput from "@/components/common/controls/CustomInput.vue";
import TelIcon from "@/components/common/icons/TelIcon.vue";
import HeaderLogoIcon from "@/components/common/icons/HeaderLogoIcon.vue";
export default {
  components: { TelIcon, HeaderLogoIcon, CustomInput },
  data() {
    return {
      navMenu: [
        { name: "Каталог", link: "catalog" },
        { name: "О компании", link: "about" },
        { name: "Блог", link: "" },
        { name: "Товар", link: "product" },
        { name: "Цикл производства", link: "manufacturing-cycle" },
      ],
    };
  },
};
</script>
<style lang="scss">
.header {
  // .header__top
  &__top {
    display: flex;
    justify-content: space-between;
    height: 72px;
    align-items: center;
    border-bottom: 1px solid $color-secondary-light-deep;
  }

  //  .header__logo
  &__logo {
    width: 149px;
    height: 64px;
  }

  // .header__callback
  &__callback {
    display: flex;

    // .header__callback-ico
    &-ico {
      margin-right: 17px;
      width: 30px;
      height: 30px;
      color: $color-light;
    }

    // .header__callback-asks
    &-asks {
      display: flex;
      margin-right: 40px;
    }

    // .header__callback-buying
    &-buying {
      display: flex;
    }
  }

  .nav {
    display: flex;
    height: 72px;
    align-items: center;

    // .nav__list
    &__list {
      display: flex;
    }

    // .nav__item
    &__item {
      &:not(:last-child) {
        margin-right: 40px;
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
}
</style>
