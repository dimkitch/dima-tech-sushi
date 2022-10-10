<template>
  <div class="purpose">
    <div class="container">
      <div class="purpose__content">
        <div class="purpose__info">
          <h3 class="purpose__title title-xl fw-heavy">
            {{ purposeData.title }}
          </h3>
          <p class="purpose__text text-xsm color-secondary-deep-light">
            {{ purposeData.description }}
          </p>
        </div>
        <img class="purpose__image" :src="`${purposeData.image}`" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    purposeData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.purpose {
  margin-bottom: 150px;

  // .purpose__content
  &__content {
    display: flex;
    flex-wrap: wrap;
  }

  // .purpose__info
  &__info {
    width: 648px;
    margin-right: auto;
    @media (max-width: $breakpoint-desktop-md) {
      order: 1;
      width: 100%;
      margin-right: 0;
      margin-top: 30px;
    }
  }

  // .purpose__title
  &__title {
    text-align: center;
    margin-bottom: 50px;
  }

  // .purpose__image
  &__image {
    object-fit: cover;
    object-position: center;
    width: 632px;
    @media (max-width: $breakpoint-desktop-md) {
      order: -1;
      width: 100%;
    }
  }
}
</style>
