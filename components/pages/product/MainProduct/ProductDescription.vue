<template>
  <div class="product-description">
    <h1
      class="product-description__title title-lg tf-up fw-heavy color-primary"
    >
      Конструктор деревянный “название”
    </h1>
    <div class="product-description__info">
      <p class="product-description__text">
        Конструкторы из дерева — это прекрасная возможность для развития
        моторики пальцев и пространственного мышления. Ребенок составляет
        простейшие композиции, учится совмещать детали, выравнивать их,
        придавать всей конструкции устойчивость. Все это кажется таким простым и
        доступным для взрослого человека, но еще такое сложное для малыша,
        которые только познает мир.
      </p>
      <p class="product-description__text">
        Попробуйте решать с помощью фигур конструктора простейшие математические
        задачи: какой предмет крупнее, чем отличится геометрические формы? Все
        это важные шаги на пути к постепенному развитию малыша.
      </p>
    </div>
    <div class="product-description__links">
      <InstractionIcon class="product-description__icon" />
      <a
        class="product-description__link text-xmd fw-medium color-dark-simple"
        href=""
        >Инструкция по сборке</a
      >
    </div>
    <div class="product-description__delivery text-xmd fw-medium color-primary">
      <DeliveryIcon class="product-description__icon" /> Доставка товара по всей
      России в течение 5 дней
    </div>
  </div>
</template>
<script>
import InstractionIcon from "@/components/common/icons/InstractionIcon.vue";
import DeliveryIcon from "@/components/common/icons/DeliveryIcon.vue";

export default {
  components: {
    InstractionIcon,
    DeliveryIcon,
  },
};
</script>
<style lang="scss">
.product-description {
  // .product-description__title
  &__title {
    margin-bottom: 30px;
    @media (max-width: $breakpoint-desktop-md) {
      display: none;
    }
  }
  //   .product-description__info
  &__info {
    margin-bottom: 35px;
    @media (max-width: $breakpoint-mob) {
      display: none;
    }
  }
  // .product-description__text
  &__text {
    margin-bottom: 20px;
  }
  //   .product-description__links
  &__links {
    display: flex;
    align-items: center;
    margin-bottom: 47px;
  }
  // .product-description__link
  &__link {
    border-bottom: 1px solid black;
    letter-spacing: 0.07em;
  }
  //   .product-description__icon
  &__icon {
    margin-right: 11px;
  }
  // .product-description__delivery
  &__delivery {
    display: flex;
    align-items: center;
  }
}
</style>
