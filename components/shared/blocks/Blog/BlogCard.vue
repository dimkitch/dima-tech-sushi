<template>
  <div
    class="blog-card color-light"
    :style="`background-image: url(${blogData.image})`"
  >
    <div class="blog-card__inner">
      <h4 class="blog-card__title title-lg fw-bold">
        {{ blogData.title }}
      </h4>
      <div class="blog-card__info text-sm">
        {{ blogData.description }}
      </div>
      <button
        class="blog-card__link color-light"
        @click="$emit('showInModal', blogData)"
      >
        <span class="blog-card__elipse"></span> Читать полностью >
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    blogData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.blog-card {
  padding-top: 100px;
  padding-bottom: 25px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: grey;
  width: 100%;
  max-height: 540px;
  @media (max-width: $breakpoint-mob) {
    padding-top: 50px;
  }

  // .blog-card__inner
  &__inner {
    margin-left: 50px;
    margin-right: 170px;
    @media (max-width: $breakpoint-tablet-md) {
      margin-right: 100px;
      margin-left: 30px;
    }
    @media (max-width: $breakpoint-mob) {
      margin-right: 30px;
      margin-left: 30px;
    }
  }

  // .blog-card__title
  &__title {
    margin-bottom: 25px;
  }

  //   .blog-card__info
  &__info {
    margin-bottom: 112px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  // .blog-card__link
  &__link {
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: $transition-mod;
    &:hover {
      color: $color-primary;
    }
  }

  // .blog-card__elipse
  &__elipse {
    display: inline-block;
    background-color: $color-primary;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 50%;
  }
}
</style>
