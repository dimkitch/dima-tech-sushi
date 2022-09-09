<template>
  <section class="catalog">
    <div class="container">
      <div class="catalog__header">
        <h2 class="catalog__title title-xl fw-heavy color-dark-deep tf-up">
          {{ catalogProductsData.title }}
        </h2>
      </div>
      <div class="catalog__body">
        <h3 class="catalog__tag-title color-primary">
          {{ catalogProductsData.subtitle }}
        </h3>

        <div class="catalog__tags">
          <PopularTags
            :tagData="catalogProductsData.tags"
            @remove="removeTag"
          />
        </div>
        <div class="catalog__cards">
          <ProductCard
            v-for="card in catalogProductsData.cards"
            :key="`catalog__card-${card.id}`"
            :cardData="card"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ProductCard from "@/components/shared/cards/ProductCard.vue";
import PopularTags from "@/components/PopularTags.vue";

export default {
  components: {
    ProductCard,
    PopularTags,
  },
  props: {
    catalogProductsData: {
      type: Object,
    },
  },
  data() {
    return {
      tagHidden: true,
    };
  },
  methods: {
    removeTag(index) {
      // this.popularTagList.splice(index, 1);
    },
  },
};
</script>
<style lang="scss">
.catalog {
  // .catalog__header
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  // .catalog__title
  &__title {
    margin-right: 10px;
  }

  // .catalog__tag-title
  &__tag-title {
    margin-bottom: 20px;
  }

  // .catalog__tags
  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  // .catalog__cards
  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px 30px;
    @media (max-width: $breakpoint-desktop-md) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: $breakpoint-tablet) {
      grid-template-columns: auto;
      margin: 0 auto;
      gap: 15px;
    }
  }

  // .catalog__item
  &__item {
    margin-bottom: 10px;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  // .catalog__body
  &__body {
    margin-bottom: 50px;
  }
}
</style>
