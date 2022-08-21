<template>
  <section class="products">
    <div class="container">
      <div class="products__cards">
        <ProductCard
          v-for="card in cardList"
          :key="`product__card-${card.id}`"
          :cardData="card"
        />
      </div>
    </div>
  </section>
</template>
<script>
import ProductCard from "@/components/shared/cards/ProductCard.vue";
export default {
  components: {
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
    };
  },
};
</script>
<style lang="scss">

