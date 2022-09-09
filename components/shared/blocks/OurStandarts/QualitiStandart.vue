<template>
  <div class="quality-standart">
    <span class="quality-standart__numb text-xxl color-primary">
      {{ standartData.num }}
    </span>
    <div class="quality-standart__content">
      <h4 class="quality-standart__title title-xxl color-dark-simple fw-medium">
        {{ standartData.title }}
      </h4>
      <p class="quality-standart__subtitle text-xmd color-secondary-deep-light">
        {{ standartData.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    standartData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.quality-standart {
  display: flex;
  @media (max-width: $breakpoint-tablet-md) {
    flex-direction: column;
  }
  // .quality-standart__numb
  &__numb {
    margin-right: 15px;
    width: 65px;
    @media (max-width: $breakpoint-tablet-md) {
      margin: 0 auto;
    }
  }
  // .quality-standart__content
  &__content {
    @media (max-width: $breakpoint-mob) {
      width: 325px;
    }
  }

  // .quality-standart__title
  &__title {
    margin-bottom: 12px;
  }
  // .quality-standart__subtitle
  &__subtitle {
  }
}
</style>
