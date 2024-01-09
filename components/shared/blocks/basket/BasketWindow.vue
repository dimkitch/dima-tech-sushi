<template>
  <div class="basket-window" 
    :class="{'basket-window--is-opened': isOpened}"
    @click.self="$emit('closeBasket')"
  >
    <div class="basket-window__inner">
      <Basket 
        v-if="step === 1" 
        :total-price="totalPrice"
        :items="basketItems"
        class="basket-window__basket" 
        @close="$emit('closeBasket')"
        @show-form="setState(stepState.form)"
        @additionBasketItem="addition"
        @decreaseBasketItem="decrease"
        @deleteBasketItem="deleteItem"
      />
      <OrderPlacmentForm 
        v-if="step === 2" 
        class="basket-window__form" 
        :price="totalPrice"
        @send-form="sendForm"
      />
      <div v-if="step === 'success' && orderId" class="text-xl">
        Заказ оформлен, номер заказа: 
        <span class="fw-700">
          {{ orderId }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import lockPageScroll from '@/helpers/lockPageScroll.js'

import Basket from '@/components/shared/blocks/basket/Basket.vue'
import OrderPlacmentForm from '@/components/shared/forms/OrderPlacmentForm.vue'


export default {
  components: {
    Basket,
    OrderPlacmentForm
  },
  
  props: {
    isOpened: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      stepState: {
        basket: 1,
        form: 2,
        success: 'success'
      },
      step: 1,
      orderId: 0,
    }
  },

  computed: {
    ...mapGetters({ basketItems: 'api/basket/GET_ITEMS' }),
    
    totalPrice() {
      return this.basketItems.reduce((total, item) => total + (item.price * item.quantity), 0)
    }
  },

  methods: {
    ...mapMutations({ deleteItem: 'api/basket/DELETE_ITEM' }),

    ...mapActions({
      addition: 'api/basket/ADDITION',
      decrease: 'api/basket/DECREASE',
      createOffer: 'api/basket/CREATE_OFFER'
    }),

    async sendForm(form) {
      const id = await this.createOffer(form) 
        if(id) {
          this.orderId = id
          this.setState(this.stepState.success)
        }
    },

    setState(state) {
      this.step = state
    }
  },

  watch: {
    isOpened(state) {
      lockPageScroll(state)
    }
  }
}
</script>

<style lang="scss">
$b: '.basket-window';

#{$b} {
  transform: translateX(-100%);
  position: fixed;
  right: 0;
  top: var(--header-height);
  width: 100%;
  height: calc(100% - var(--header-height));
  background-color: rgba(60, 75, 97, 0.60);

  // .basket-window--is-opened
  &--is-opened {
    transform: translateX(0);
  } 

  // .basket-window__inner
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-width: 613px;
    padding: 40px;
    margin-left: auto;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: $color-warning-light;
    transition: $transition-default;
    @include removeScrollBar()
  }

  // .basket-window__basket
  &__basket {
    height: 100%;
  }

  // .basket-window__form
  &__form {
    height: 100%;
  }
}
</style>