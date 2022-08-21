<template>
  <article class="similar-products">
    <div class="container">
      <div class="similar-products__header">
        <h3 class="similar-products__title title-xl fw-heavy tf-up">
          Похожие товары
        </h3>
        <div class="similar-products__action">
          <div class="similar-products__action-item">
            <CustomButton size="round" theme="primary"
              ><ArrowRight />
            </CustomButton>
          </div>
          <div class="similar-products__action-item">
            <CustomButton size="round" theme="primary"
              ><ArrowRight />
            </CustomButton>
          </div>
        </div>
      </div>
      <div class="similar-products__body">
        <ProductCard
          v-for="card in cardList"
          :key="`similar-products-${card.id}`"
          :cardData="card"
        />
      </div>
    </div>
  </article>
</template>
<script>
import CustomButton from "@/components/common/controls/CustomButton.vue";
import ArrowLeft from "@/components/common/icons/ArrowLeft.vue";
import ArrowRight from "@/components/common/icons/ArrowRight.vue";
import ProductCard from "@/components/shared/cards/ProductCard.vue";
export default {
  components: {
    CustomButton,
    ArrowLeft,
    ArrowRight,
    ProductCard,
  },
  data() {
    return {
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
      ],
    };
  },
};
</script>
<style lang="scss">
.similar-products {
  // .similar-products__header
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }
  // .similar-products__title
  // .similar-products__action
  &__action {
    display: flex;
  }
  // .similar-products__action-item
  &__action-item {
    &:not(:last-child) {
      margin-right: 25px;
    }
  }
  // .similar-products__body
  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
}
</style>
