<template>
  <div class="about-product">
    <div class="container">
      <div class="about-product__inner">
        <div class="about-product__item about-product__item-description">
          <h4 class="about-product__title title-md">Описание товара</h4>
          <p class="about-product__info text-xmd">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less The point of
            using Lorem Ipsum is that it has a more-or-less
          </p>
        </div>
        <div class="about-product__item about-product__item-features">
          <h4 class="about-product__title title-md">Характеристики</h4>
          <ul class="about-product__list">
            <li class="about-product__option">Дерево</li>
            <li class="about-product__option">Для детей от 3-х лет</li>
            <li class="about-product__option">Лёгкая сложность сборки</li>
            <li class="about-product__option">163 детали</li>
            <li class="about-product__option">Для детей от 3-х лет</li>
            <li class="about-product__option">Дерево</li>
            <li class="about-product__option">Для детей от 3-х лет</li>
            <li class="about-product__option">163 детали</li>
          </ul>
        </div>
        <div class="about-product__item importer">
          <h4 class="about-product__title title-md">Импортер</h4>
          <p class="text-xmd">
            Импортер We offer Free Standard Shipping for all orders over $75 to
            the 50 states and the District of Columbia. The minimum order value
            must be $75 before taxes, shipping and handling. Shipping fees are
            non-refundable. Please allow up to 2 business days (excluding
            weekends, holidays, and sale days) to process your order. Processing
            Time + Shipping Time = Delivery Time
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.about-product {
  // .about-product__inner
  // .about-product__item
  &__item {
    &:not(:last-child) {
      border-bottom: 1px solid #c4c4c4;
      padding-bottom: 25px;
      margin-bottom: 25px;
    }
  }
  // .about-product__item-description
  &__item-description {
    width: 883px;
  }
  // .about-product__item-features
  &__item-features {
    width: 566px;
  }
  // .about-product__title
  // .about-product__info

  // .about-product__list
  &__option {
    flex-direction: column;
    display: flex;
    justify-content: space-between;
  }
}
</style>
