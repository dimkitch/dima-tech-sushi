<template>
  <article class="blog">
    <div class="container">
      <h2 class="blog__title title-sm fw-heavy tf-up color-dark-deep">БЛОГ</h2>
      <p class="blog__info text-xsm color-secondary-deep-dark">
        Massa commodo leo amet in feugiat non, commodo. Augue senectus felis,
        suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, in
        duis tortor, iaculis mi magna urna nullam.
      </p>
      <div class="blog__cards">
        <BlogCard
          :blogData="card"
          v-for="card in blogList"
          :key="`blog-card-${card.id}`"
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
  data() {
    return {
      blogList: [
        {
          title: "Заголовок новости 1",
          firstParagraph:
            " Massa commodo leo amet in feugiat non, commodo. Augue senectus felis,suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, induis tortor, iaculis mi magna urna nullam.",
          secondParagraph:
            "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis,suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, induis tortor, iaculis mi magna urna nullam.",
          id: 1425323156,
        },
        {
          title: "Заголовок новости 2",
          firstParagraph:
            "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis,suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, induis tortor, iaculis mi magna urna nullam.",
          secondParagraph:
            "Massa commodo leo amet in feugiat non, commodo. Augue senectus felis,suspendisse amet suscipit vestibulum lobortis ornare sed. Pharetra, induis tortor, iaculis mi magna urna nullam.",
          id: 14255326,
        },
      ],
    };
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
  }
}
</style>
