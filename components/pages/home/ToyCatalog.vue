<template>
  <div class="toy-catalog">
    <div class="container">
      <div class="toy-catalog__wrapper">
        <div class="toy-catalog__content">
          <h1 class="toy-catalog__title title-sm color-primary fw-bold tf-up">
            Лучшие игрушки для ваших детей
          </h1>
          <p class="toy-catalog__text text-xl color-dark-simple">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div class="toy-catalog__action">
            <CustomButton size="xsm" theme="accent"> Каталог </CustomButton>
          </div>
        </div>
        <div class="toy-catalog__slider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          sint expedita tempora minima cupiditate incidunt fugit? Nulla a
          repudiandae odio provident molestias vel exercitationem, repellat
          magni. Mollitia nobis sint repudiandae. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corrupti sint expedita tempora minima
          cupiditate incidunt fugit? Nulla a repudiandae odio provident
          molestias vel exercitationem, repellat magni. Mollitia nobis sint
          repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti sint expedita tempora minima cupiditate incidunt fugit? Nulla
          a repudiandae odio provident molestias vel exercitationem, repellat
          magni. Mollitia nobis sint repudiandae. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corrupti sint expedita tempora minima
          cupiditate incidunt fugit? Nulla a repudiandae odio provident
          molestias vel exercitationem, repellat magni. Mollitia nobis sint
          repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti sint expedita tempora minima cupiditate incidunt fugit? Nulla
          a repudiandae odio provident molestias vel exercitationem, repellat
          magni. Mollitia nobis sint repudiandae. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corrupti sint expedita tempora minima
          cupiditate incidunt fugit? Nulla a repudiandae odio provident
          molestias vel exercitationem, repellat magni. Mollitia nobis sint
          repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti sint expedita tempora minima cupiditate incidunt fugit? Nulla
          a repudiandae odio provident molestias vel exercitationem, repellat
          magni. Mollitia nobis sint repudiandae. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corrupti sint expedita tempora minima
          cupiditate incidunt fugit? Nulla a repudiandae odio provident
          molestias vel exercitationem, repellat magni. Mollitia nobis sint
          repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti sint expedita tempora minima cupiditate incidunt fugit? Nulla
          a repudiandae odio provident molestias vel exercitationem, repellat
          magni. Mollitia nobis sint repudiandae. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corrupti sint expedita tempora minima
          cupiditate incidunt fugit? Nulla a repudiandae odio provident
          molestias vel exercitationem, repellat magni. Mollitia nobis sint
          repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti sint expedita tempora minima cupiditate incidunt fugit? Nulla
          a repudiandae odio provident molestias vel exercitationem, repellat
          magni. Mollitia nobis sint repudiandae. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Corrupti sint expedita tempora minima
          cupiditate incidunt fugit? Nulla a repudiandae odio provident
          molestias vel exercitationem, repellat magni. Mollitia nobis sint
          repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corrupti sint expedita tempora minima cupiditate incidunt fugit? Nulla
          a repudiandae odio provident molestias vel exercitationem, repellat
          magni. Mollitia nobis sint repudiandae.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/common/controls/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.toy-catalog {
  // .toy-catalog__wrapper
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    border-bottom: 1px solid $color-primary;
    padding-bottom: 110px;
  }
  // .toy-catalog__content
  &__content {
  }
  //   .toy-catalog__title
  &__title {
    margin-bottom: 30px;
  }
  //   .toy-catalog__text
  &__text {
    margin-bottom: 42px;
  }
}
</style>
