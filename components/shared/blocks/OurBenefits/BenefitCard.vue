<template>
  <article class="benefit-card">
    <div class="benefit-card__content color-light">
      <h3 class="benefit-card__title title-xsm fw-heavy">
        {{ benefitData.title }}
      </h3>
      <p class="benefit-card__info text-xsm">
        {{ benefitData.description }}
      </p>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    benefitData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.benefit-card {
  min-height: 296px;
  border-radius: 20px;
  @media (max-width: $breakpoint-mob) {
    min-height: 208px;
  }
  // .benefit-card__content
  &__content {
    padding: 30px;
    @media (max-width: $breakpoint-mob) {
      padding: 20px;
    }
  }

  // .benefit-card__title
  &__title {
    margin-bottom: 61px;
    @media (max-width: $breakpoint-mob) {
      margin-bottom: 30px;
    }
  }
}
</style>
