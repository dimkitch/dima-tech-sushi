<template>
  <div class="product-action">
    <div class="product-action__inner">
      <div class="product-action__info">
        <div class="product-action__item">
          <h3 class="product-action__title title-msxl color-primary">3+</h3>
          <p class="product-action__subtitle">Возрастная группа</p>
        </div>
        <div class="product-action__item">
          <h3 class="product-action__title title-msxl color-primary">Дерево</h3>
          <p class="product-action__subtitle">Материал игрушки</p>
        </div>
        <div class="product-action__item">
          <h3 class="product-action__title title-msxl color-primary">Лёгкая</h3>
          <p class="product-action__subtitle">Сложность сборки</p>
        </div>
      </div>
      <CustomButton class="product-action__btn" size="md" theme="primary"
        >Заказать на ozon
      </CustomButton>
      <CustomButton class="product-action__btn" size="md" theme="primary"
        >Заказать на wb</CustomButton
      >
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/common/controls/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
};
</script>
<style lang="scss">
.product-action {
  margin-top: 30px;
  margin-bottom: 92px;
  // .product-action__inner
  &__inner {
    display: flex;
  }
  // .product-action__info
  &__info {
    display: flex;
  }
  //   .product-action__item
  &__item {
    padding: 0 50px;
    text-align: center;
    &:first-child {
      padding-left: 0;
    }
    &:not(:last-child) {
      border-right: 1px solid rgba(68, 117, 242, 0.74);
    }
    &:last-child {
      padding-right: 0;
      margin-right: 57px;
    }
  }
  // .product-action__btn
  &__btn {
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
