<template>
  <section class="our-product">
    <div class="container">
      <div class="our-product__header">
        <h2 class="our-product__title title-xl fw-heavy color-dark-deep tf-up">
          {{ ourProductData.title }}
        </h2>

        <div class="our-product__action">
          <DropDown
            :listOptions="ourProductData.listOptions"
            placeholder="Поиск"
            v-model="exampleOption"
          />
          <FilterIcon class="our-product__filter" />
        </div>
      </div>
      <div class="our-product__body">
        <h3 class="our-product__tag-title">{{ ourProductData.subtitle }}</h3>

        <div class="our-product__tags">
          <PopularTags :tagData="ourProductData.tags" @remove="removeTag" />
        </div>
        <div class="our-product__cards">
          <ProductCard
            v-for="card in ourProductData.cards"
            :key="`our-product__card-${card.id}`"
            :cardData="card"
          />
        </div>
      </div>
      <div class="our-product__footer">
        <CustomButton size="md" theme="accent">
          Смотреть весь каталог
        </CustomButton>
      </div>
    </div>
  </section>
</template>
<script>
import ProductCard from "@/components/shared/cards/ProductCard.vue";
import DropDown from "@/components/common/inputs/DropDown.vue";
import FilterIcon from "@/components/common/icons/FilterIcon.vue";
import PopularTag from "@/components/shared/PopularTag.vue";
import PopularTags from "@/components/PopularTags.vue";
import CustomButton from "@/components/common/controls/CustomButton.vue";

export default {
  components: {
    ProductCard,
    DropDown,
    FilterIcon,
    PopularTag,
    CustomButton,
    PopularTags,
  },
  props: {
    ourProductData: {
      type: Object,
    },
  },
  data() {
    return {
      tagHidden: true,
      exampleOption: "",
    };
  },
  methods: {
    removeTag(index) {
      // this.popularTagList.splice(index, 1);
    },
  },
  created() {
    return;
  },
  computed: {
    searchProduct(elem) {
      return console.log(this.exampleOption);
    },
  },
};
</script>
<style lang="scss">
.our-product {
  // .our-product__header
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    @media (max-width: $breakpoint-mob) {
      flex-direction: column;
    }
  }
  // .our-product__title
  &__title {
    margin-right: 10px;
  }
  // .our-product__action
  &__action {
    display: flex;
    align-items: center;
  }
  // .our-product__filter
  &__filter {
    margin-left: 24px;
  }
  // .our-product__tag-title
  &__tag-title {
    margin-bottom: 20px;
    @media (max-width: $breakpoint-mob) {
      display: none;
    }
  }
  // .our-product__tags
  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
    @media (max-width: $breakpoint-mob) {
      display: none;
      margin-bottom: 30px;
    }
  }
  // .our-product__cards
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px 30px;
    @media (max-width: $breakpoint-desktop-md) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: $breakpoint-tablet-md) {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }
  // .our-product__item
  &__item {
    margin-bottom: 10px;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  // .our-product__body
  &__body {
    margin-bottom: 50px;
  }
  // .our-product__footer
  &__footer {
    display: flex;
    justify-content: center;
  }
}
</style>
