<template>
  <div class="blog-card color-light">
    <div class="blog-card__inner">
      <h4 class="blog-card__title title-lg fw-bold">{{ blogData.title }}</h4>
      <div class="blog-card__info text-sm">
        <p>
          {{ blogData.firstParagraph }}
        </p>
        <p>
          {{ blogData.secondParagraph }}
        </p>
      </div>
      <a class="blog-card__link text-xmd fw-medium">
        <span class="blog-card__elipse"></span> Читать полностью ></a
      >
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
  background-color: black;
  padding-left: 50px;
  padding-right: 170px;
  padding-bottom: 20px;
  padding-top: 98px;
  background-image: url("~@/assets/img/blog.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // .blog-card__inner
  &__inner {
  }
  // .blog-card__title
  &__title {
    margin-bottom: 25px;
  }
  //   .blog-card__info
  &__info {
    margin-bottom: 112px;
    width: 562px;
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
    z-index: 4000;
    display: inline-block;
    background-color: $color-primary;
    width: 20px;
    height: 20px;
    margin-right: 5px;
    border-radius: 50%;
  }
}
</style>
