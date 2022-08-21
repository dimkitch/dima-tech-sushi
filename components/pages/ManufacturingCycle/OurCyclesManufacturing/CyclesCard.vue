<template>
  <div class="cycle-card">
    <div class="cycle-card__info">
      <span class="cycle-card__numb text-xxl color-primary">
        {{ standartData.number }}
      </span>
      <div class="cycle-card__content">
        <h4 class="cycle-card__title title-xxl color-dark-simple fw-medium">
          {{ standartData.title }}
        </h4>
        <p class="cycle-card__subtitle text-xmd color-secondary-deep-light">
          {{ standartData.info }}
        </p>
      </div>
    </div>

    <img class="cycle-card__image" :src="standartData.img" alt="" />
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
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.cycle-card {
  display: grid;
  grid-template-columns: auto 790px;
  // .cycle-card__info
  &__info {
    display: flex;
    margin-right: 67px;
  }
  // .cycle-card__numb
  &__numb {
    margin-right: 15px;
    width: 65px;
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
  }
  // .cycle-card__image
  &__image {
    object-fit: none;
    object-position: center;
    height: 355px;
    width: 790px;
  }
}
</style>
