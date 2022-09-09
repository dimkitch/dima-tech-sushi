<template>
  <article class="blog">
    <div class="container">
      <h2 class="blog__title title-sm fw-heavy tf-up color-dark-deep">
        {{ blogData.title }}
      </h2>
      <p class="blog__info text-xsm color-secondary-deep-dark">
        {{ blogData.description }}
      </p>
      <div class="blog__cards">
        <BlogCard
          v-for="card in blogData.blogCard"
          :key="`blog-card-${card.id}`"
          :blogData="card"
        />
      </div>
    </div>
  </article>
</template>
<script>
import BlogCard from "@/components/shared/blocks/Blog/BlogCard.vue";
export default {
  components: {
    BlogCard,
  },
  props: {
    blogData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.blog {
  // .blog__title
  &__title {
    margin-bottom: 20px;
  }
  // .blog__info
  &__info {
    max-width: 745px;
    margin-bottom: 31px;
  }
  // .blog__cards
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 25px;
    @media (max-width: $breakpoint-tablet) {
      grid-template-columns: 1fr;
      gap: 25px;
    }
  }
}
</style>
