<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <HeaderLogoIcon class="header-logo" />
        <div class="header-callback">
          <div class="header-callback-asks">
            <CallCallingIcon class="header-callback-ico" />
            <div>
              <p class="text-lg color-secondary-basalt-deep">
                Появились вопросы?
              </p>
              <p class="text-md color-primary fw-bold">310-437-2766</p>
            </div>
          </div>
          <div class="header-callback-buying">
            <CallCallingIcon class="header-callback-ico" />
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
        <ul class="nav-list">
          <li class="nav-item">
            <a class="nav-link text-nr color-secondary-basalt-deep" href="#"
              >Каталог</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-nr color-secondary-basalt-deep" href="#"
              >О компании</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-nr color-secondary-basalt-deep" href="#"
              >Блог</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link text-nr color-secondary-basalt-deep" href="#"
              >Цикл производства</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import SearchInput from "@/components/common/controls/SearchInput.vue";

import CallCallingIcon from "@/components/common/icons/CallCallingIcon.vue";
import HeaderLogoIcon from "@/components/common/icons/HeaderLogoIcon.vue";
export default {
  components: { CallCallingIcon, HeaderLogoIcon, SearchInput },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.header {
  // .header-wrapper
  &-wrapper {
    display: flex;
    justify-content: space-between;
    height: 72px;
    align-items: center;
    border-bottom: 1px solid $color-secondary-light-deep;
  }
  //  .header-logo
  &-logo {
    width: 149px;
    height: 64px;
  }
  // .header-callback
  &-callback {
    display: flex;
    // .callback-ico
    &-ico {
      margin-right: 17px;
      width: 30px;
      height: 30px;
      color: $color-light;
    }
    // .callback-ask
    &-asks {
      display: flex;
      margin-right: 40px;
    }
    // .callback-buying
    &-buying {
      display: flex;
    }
  }

  .nav {
    display: flex;
    height: 72px;
    align-items: center;
    // .nav-list
    &-list {
      display: flex;
    }
    // .nav-item
    &-item {
      &:not(:last-child) {
        margin-right: 40px;
      }
    }
    // .nav-link
    &-link {
      transition: $transition-mod;
      &:hover {
        color: $color-primary;
      }
    }
  }
}
</style>
