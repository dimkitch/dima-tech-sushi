<template>
  <div class="cycle-card">
    <div class="cycle-card__info">
      <span class="cycle-card__numb text-xxl color-primary">
        {{ standartData.num }}
      </span>
      <div class="cycle-card__content">
        <h4 class="cycle-card__title title-xxl color-dark-simple fw-medium">
          {{ standartData.title }}
        </h4>
        <p class="cycle-card__subtitle text-xmd color-secondary-deep-light">
          {{ standartData.description }}
        </p>
      </div>
    </div>

    <img class="cycle-card__image" :src="standartData.image" />
  </div>
</template>
<script>
import QualitiStandart from "@/components/shared/blocks/OurStandarts/QualitiStandart.vue";
export default {
  components: {
    QualitiStandart,
  },
  props: {
    standartData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.cycle-card {
  display: grid;
  grid-template-columns: 418px 790px;
  gap: 25px;
  @media (max-width: $breakpoint-desktop-md) {
    grid-template-columns: 1fr;
    gap: 0;
  }
  // .cycle-card__info
  &__info {
    display: flex;

    @media (max-width: $breakpoint-desktop-md) {
      flex-direction: column;
    }
  }
  // .cycle-card__numb
  &__numb {
    margin-right: 15px;
    width: 65px;
    @media (max-width: $breakpoint-desktop-md) {
      margin: 0 auto;
    }
  }
  // .cycle-card__content
  &__content {
  }

  // .cycle-card__title
  &__title {
    margin-bottom: 12px;
  }
  // .cycle-card__subtitle
  &__subtitle {
    @media (max-width: $breakpoint-desktop-md) {
      margin-bottom: 20px;
    }
  }
  // .cycle-card__image
  &__image {
    object-fit: cover;
    object-position: center;
    width: 100%;
  }
}
</style>
