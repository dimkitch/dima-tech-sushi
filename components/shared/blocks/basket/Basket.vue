<template>
  <div class="basket">
    <div class="basket__inner">
      <div class="basket__title-wrapper">
        <div class="basket__title-shape"></div>
        <h2 class="basket__title title-md tt-uppercase">Корзина</h2>
        <div class="basket__title-shape"></div>
      </div>
      <BasketList 
        class="basket__list"
        :basket-items="items"
        @addition="(card) => $emit('additionBasketItem', card)"
        @decrease="(card) => $emit('decreaseBasketItem', card)"
        @delete="(card) => $emit('deleteBasketItem', card)"
      />
      <div class="basket__action">
        <div class="basket__total-price text-xxl-2">
          Общая сумма
          {{ totalPrice }} ₽
        </div>
        <div class="basket__info text-md">
          Сумма заказа для доставки курьером должна составлять не менее 500 ₽
        </div>
        <div class="basket__buttons">
          <CustomButton 
            class="basket__btn text-lg" 
            size="md-3" 
            theme="light-shadow"
            @click="$emit('close')"
          >
            Вернуться к покупкам
          </CustomButton>
          <CustomButton 
            class="basket__btn text-lg" 
            size="md-3" 
            theme="light-shadow"
            @click="openForm"
          >
            Оформить заказ
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasketList from '@/components/shared/blocks/basket/BasketList.vue';
import CustomButton from '@/components/common/controls/CustomButton.vue'
import OrderPlacmentForm from '@/components/shared/forms/OrderPlacmentForm.vue'

export default {
  components: {
    BasketList,
    CustomButton,
    OrderPlacmentForm
  },
  
  props: {
    totalPrice: {
      type: Number,
      default: 0
    },

    items: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    openForm() {
      if(!this.items || !this.items.length) return
      this.$emit('show-form')
    }
  }
}
</script>

<style lang='scss'>
 $b: '.basket'; 

 #{$b} {
  // .basket__inner
  &__inner {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  // .basket__title-wrapper
  &__title-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    justify-content: center;
  }

  // .basket__title
  &__title {
    padding: 0 40px;

    // .basket__title-shape
    &-shape {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $color-dark-deep;
    }
  }

  // .basket__list
  &__list {
    margin-bottom: 30px;
  }

  // .basket__action
  &__action {
    margin-top: auto;
  }
  
  // .basket__info
  &__info {
    position: relative;
    max-width: 360px;
    padding-left: 16px;

    &::before {
      content: "*";
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  // .basket__total-price
  &__total-price {
    margin-bottom: 40px;
  }

  // .basket__buttons
  &__buttons {
    margin-top: 40px;
  }

  // .basket__btn
  &__btn {
    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  // .basket__order-placment-form
  &__order-placment-form {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 613px;
    padding: 40px;
    background-color: $color-warning-light;
    transition: all 0.3s linear;
  }
 }
// </style>