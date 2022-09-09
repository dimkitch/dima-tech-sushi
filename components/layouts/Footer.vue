<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
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

        <div class="footer__callback">
          <div class="footer__callback-item">
            <CallCallingIcon class="footer__callback-icon" />
            <div class="footer__callback-content">
              <p class="color-secondary-basalt text-lg">Телефон</p>
              <p class="color-light text-md fw-medium">310-437-2766</p>
            </div>
          </div>
          <div class="footer__callback-item">
            <CallCallingIcon class="footer__callback-icon" />
            <div class="footer__callback-content">
              <p class="color-secondary-basalt text-lg">Почта</p>
              <p class="color-light text-md fw-medium">unreal@outlook.com</p>
            </div>
          </div>
          <div class="footer__callback-item">
            <CallCallingIcon class="footer__callback-icon" />
            <div class="footer__callback-content">
              <p class="color-secondary-basalt text-lg">Адрес</p>
              <p class="color-light text-md fw-medium">
                706 Campfire Ave. Meriden
              </p>
            </div>
          </div>
          <div class="footer__callback-item">
            <CallCallingIcon class="footer__callback-icon" />
            <div class="footer__callback-content">
              <p class="color-secondary-basalt text-lg">
                Для оптовых покупателей
              </p>
              <p class="color-light text-md fw-medium">310-437-2766</p>
            </div>
          </div>
        </div>

        <nav class="footer__nav">
          <ul class="footer__nav-list">
            <li class="footer__nav-item text-nr color-secondary-basalt">
              О компании
            </li>
            <li class="footer__nav-item text-nr color-secondary-basalt">
              Каталог
            </li>
            <li class="footer__nav-item text-nr color-secondary-basalt">
              Новости
            </li>
            <li class="footer__nav-item text-nr color-secondary-basalt">
              Цикл производтсва
            </li>
          </ul>
        </nav>
        <div class="footer__copyright">
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
  background-color: $color-dark-light;
  // .footer__content
  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  // .footer__socials
  &__socials {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    @media (max-width: $breakpoint-tablet) {
      order: -1;
    }
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

  // .footer__callback
  &__callback {
    width: 100%;
    margin-top: 52px;
    margin-bottom: 40px;
    display: flex;
    @media (max-width: $breakpoint-tablet) {
      order: 2;
      flex-wrap: wrap;
    }
  }

  // .footer__callback-item
  &__callback-item {
    align-items: center;
    display: flex;
    width: 260px;
    &:not(:last-child) {
      margin-right: 71px;
      @media (max-width: $breakpoint-tablet) {
        margin-bottom: 20px;
      }
    }
  }

  // .footer__callback-icon
  &__callback-icon {
    margin-right: 12px;
    color: $color-secondary-semple-deep;
    transition: $transition-mod;
    cursor: pointer;
    &:hover {
      color: $color-primary;
    }
  }

  // .footer__nav-list
  &__nav-list {
    display: flex;
    @media (max-width: $breakpoint-tablet) {
      order: 1;
      flex-direction: column;
      margin-top: 40px;
      width: 100%;
    }
  }

  // .footer__nav-item
  &__nav-item {
    &:not(:last-child) {
      margin-right: 40px;
      @media (max-width: $breakpoint-tablet) {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
    &:last-child {
      @media (max-width: $breakpoint-mob) {
        margin-bottom: 0;
      }
    }
  }

  // .footer__copyright
  &__copyright {
    margin-left: auto;
    @media (max-width: $breakpoint-tablet) {
      order: 3;
      margin: 0;
    }
  }
}
</style>
