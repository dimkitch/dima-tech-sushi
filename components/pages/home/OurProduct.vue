<template>
  <section class="our-product">
    <div class="container">
      <div class="our-product__header">
        <h2 class="our-product__title title-xl fw-heavy color-dark-deep tf-up">
          Наши товары
        </h2>
        <DropDown
          :listOptions="listOptions"
          placeholder="Поиск"
          v-model="exampleOption"
        />
        <CustomButton size="lg" theme="primary"> Найти </CustomButton>
        <FilterIcon />
      </div>
      <div class="our-product__body">
        <h3 class="our-product__tag-title">Популярные теги:</h3>

        <div class="our-product__tags">
          <!-- <PopularTag
            class="our-product__item"
            v-for="(tag, index) in popularTagList"
            :key="`our-product__${tag.id}`"
            :tagData="tag"
            :index="index"
          /> -->
          <PopularTags :tagData="popularTagList" @remove="removeTag" />
        </div>
        <div class="our-product__cards">
          <ProductCard
            v-for="card in cardList"
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
  data() {
    return {
      tagHidden: true,
      cardList: [
        {
          id: "11314231",
          name: "Наименование игрушки 1",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
        {
          id: "1131411",
          name: "Наименование игрушки 2",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
        {
          id: "1131412",
          name: "Наименование игрушки 3",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
        {
          id: "1131413",
          name: "Наименование игрушки 4",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
        {
          id: "1131414",
          name: "Наименование игрушки 5",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
        {
          id: "1131415",
          name: "Наименование игрушки 6",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
        {
          id: "1131416",
          name: "Наименование игрушки 7",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
        {
          id: "1131417",
          name: "Наименование игрушки 8",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
        {
          id: "1131418",
          name: "Наименование игрушки 9",
          info: "Sed ut perspiciatis unde omnis iste natus error sit voluptatemaccusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaeab.",
          image:
            "https://avatars.mds.yandex.net/i?id=c1cda5f38d7a09542627111367c639a8-5235392-images-thumbs&n=13&exp=1",
        },
      ],
      listOptions: [
        { name: "1Наименование" },
        { name: "2Наименование" },
        { name: "3Наименование" },
        { name: "4Наименование" },
        { name: "5Наименование" },
        { name: "6Наименование" },
        { name: "7Наименование" },
        { name: "8Наименование" },
        { name: "9Наименование" },
        { name: "10Наименование" },
        { name: "11Наименование" },
        { name: "12Наименование" },
        { name: "13Наименование" },
        { name: "14Наименование" },
        { name: "15Наименование" },
        { name: "16Наименование" },
      ],
      exampleOption: "",
      popularTagList: [
        { title: "Игрушки оптом и в розницу", id: 131415151515151 },
        { title: "Оптовый магазин игрушек ", id: 1314151513232515151 },
        { title: "Игрушки", id: 131415424151 },
        { title: "Недорогие игрушки", id: 1151515151 },
        { title: "Игрушки", id: 13141515151 },
        { title: "Магазин игрушек", id: 131151515151 },
        { title: "от 6 лет", id: 13151515151 },
      ],
    };
  },
  methods: {
    removeTag(index) {
      this.popularTagList.splice(index, 1);
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
  }
  // .our-product__title
  &__title {
    margin-right: 10px;
  }
  // .our-product__tag-title
  &__tag-title {
    margin-bottom: 20px;
  }
  // .our-product__tags
  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  // .our-product__cards
  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 15px 30px;
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
