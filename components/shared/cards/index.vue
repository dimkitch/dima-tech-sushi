<template>
  <section class="products">
    <div class="container">
      <div class="products__cards">
        <ProductCard
          v-for="card in cardList"
          :key="`product__card-${card.id}`"
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
};
</script>
