<template>
  <article class="quality-certificates">
    <div class="container">
      <h3 class="quality-certificates__title title-xl fw-heavy tf-up">
        {{ qualitiCertificateData.title }}
      </h3>
      <div class="quality-certificates__grid">
        <div
          class="quality-certificates__item"
          v-for="item in qualitiCertificateData.features"
          :key="`quality-certificates__${item.id}`"
        >
          <img class="quality-certificates__image" :src="`${item.image}`" />
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    qualitiCertificateData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.quality-certificates {
  // .quality-certificates__title
  &__title {
    margin-bottom: 30px;
  }
  // .quality-certificates__grid
  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    @media (max-width: $breakpoint-desktop-md) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  // .quality-certificates__item
  &__item {
    max-height: 420px;
    @media (max-width: $breakpoint-tablet-md) {
      height: 208px;
    }
  }
  // .quality-certificates__image
  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
    object-position: center;
    @media (max-width: $breakpoint-tablet-md) {
      object-fit: cover;
    }
    &:not(:last-child) {
      margin-right: 30px;
    }
  }
}
</style>
