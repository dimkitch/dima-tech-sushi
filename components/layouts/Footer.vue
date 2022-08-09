<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__socials">
        <a class="footer__social-item" href="#">
          <FacebookIcon class="footer__social-icon" />
        </a>
        <a class="footer__social-item" href="#">
          <YoutubeIcon class="footer__social-icon" />
        </a>
        <a class="footer__social-item" href="#">
          <DribbbleIcon class="footer__social-icon" />
        </a>
        <a class="footer__social-item" href="#">
          <WatsappIcon class="footer__social-icon" />
        </a>
      </div>
      <div class="footer-callback">
        <div class="footer-callback-item">
          <CallCallingIcon class="footer-callback-icon" />
          <div class="footer-callback-content">
            <p class="color-secondary-basalt text-lg">Телефон</p>
            <p class="color-light text-md fw-medium">310-437-2766</p>
          </div>
        </div>
        <div class="footer-callback-item">
          <CallCallingIcon class="footer-callback-icon" />
          <div class="footer-callback-content">
            <p class="color-secondary-basalt text-lg">Почта</p>
            <p class="color-light text-md fw-medium">unreal@outlook.com</p>
          </div>
        </div>
        <div class="footer-callback-item">
          <CallCallingIcon class="footer-callback-icon" />
          <div class="footer-callback-content">
            <p class="color-secondary-basalt text-lg">Адрес</p>
            <p class="color-light text-md fw-medium">
              706 Campfire Ave. Meriden, CT 06450
            </p>
          </div>
        </div>
        <div class="footer-callback-item">
          <CallCallingIcon class="footer-callback-icon" />
          <div class="footer-callback-content">
            <p class="color-secondary-basalt text-lg">
              Для оптовых покупателей
            </p>
            <p class="color-light text-md fw-medium">310-437-2766</p>
          </div>
        </div>
      </div>
      <div class="footer-wrapper">
        <nav class="footer-nav">
          <ul class="footer-nav-list">
            <li class="footer-nav-item text-nr color-secondary-basalt">
              О компании
            </li>
            <li class="footer-nav-item text-nr color-secondary-basalt">
              Каталог
            </li>
            <li class="footer-nav-item text-nr color-secondary-basalt">
              Новости
            </li>
            <li class="footer-nav-item text-nr color-secondary-basalt">
              Цикл производтсва
            </li>
          </ul>
        </nav>
        <div class="copyright">
          <div class="text-nr color-secondary-basalt">
            © 2000-2022, Все права защищены
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import FacebookIcon from "@/components/common/icons/social/FacebookIcon.vue";
import YoutubeIcon from "@/components/common/icons/social/YoutubeIcon.vue";
import DribbbleIcon from "@/components/common/icons/social/DribbbleIcon.vue";
import WatsappIcon from "@/components/common/icons/social/WatsappIcon.vue";
import CallCallingIcon from "@/components/common/icons/CallCallingIcon.vue";
export default {
  components: {
    FacebookIcon,
    YoutubeIcon,
    DribbbleIcon,
    WatsappIcon,
    CallCallingIcon,
  },
};
</script>
<style lang="scss">
.footer {
  padding-top: 62px;
  padding-bottom: 57px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: $color-dark-light;

  // .footer__socials
  &__socials {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // .footer__social-item
  &__social-item {
    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  // .footer__social-icon
  &__social-icon {
    color: $color-secondary-semple-deep;
    cursor: pointer;
    transition: $transition-mod;
    &:hover {
      color: $color-primary;
    }
  }

  // .footer-callback
  &-callback {
    margin-top: 52px;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;
  }

  // .footer-callback-item
  &-callback-item {
    align-items: center;
    display: flex;
    &:not(:last-child) {
      margin-right: 72px;
    }
  }

  // .footer-callback-icon
  &-callback-icon {
    margin-right: 12px;
    color: $color-secondary-semple-deep;
    transition: $transition-mod;
    cursor: pointer;
    &:hover {
      color: $color-primary;
    }
  }

  // .footer-nav-list
  &-nav-list {
    display: flex;
  }

  // .footer-nav-item
  &-nav-item {
    &:not(:last-child) {
      margin-right: 40px;
    }
  }

  // .footer-wrapper
  &-wrapper {
    display: flex;
    justify-content: space-between;
  }
}
</style>
