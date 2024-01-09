<template>
  <div class="basket-card">
    <div class="basket-card__inner">
      <div class="basket-card__preview">
        <img class="basket-card__image" :src="card.image" alt="">
      </div>
      <div class="basket-card__body">
        <div class="basket-card__title text-md tt-uppercase">
          <span v-html="card.title"></span>
          <HeartIcon class="basket-card__title-icon"/>
        </div>
        <div class="basket-card__description text-sm color-secondary-dark" v-html="card.description">
        </div>
        <div class="basket-card__weight text-sm color-secondary-dark">
          ({{ card.weight }} г)
        </div>
      </div>
      <div class="basket-card__action">
        <div class="basket-card__price"> 
          <span class="basket-card__caption text-sm">Цена</span> 
          <span class="text-md">{{ card.price }}</span> ₽
        </div>
        <Counter 
          class="basket-card__counter" 
          :count="card.quantity" 
          @addition="$emit('addition')"
          @decrease="$emit('decrease')"
        />
        <div class="basket-card__sum">
          <span class="basket-card__caption text-sm">Сумма</span> 
          <span class="text-md">{{ resultPrice }}</span> ₽
        </div>
      </div>
      <div class="basket-card__delete" @click="$emit('delete')" >
        <BasketIcon class="basket-card__delete-icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import Counter from '@/components/shared/Counter.vue'
import BasketIcon from '@/components/common/icons/BasketIcon.vue'
import HeartIcon from '@/components/common/icons/HeartIcon.vue'

export default {
  components: {
    Counter,
    BasketIcon,
    HeartIcon
  },

  props: {
    card: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    resultPrice() {
      return this.card.quantity * this.card.price
    }
  }
  
}
</script>

<style lang="scss">
$b: '.basket-card';

#{$b} {
  // .basket-card__inner
  &__inner {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: $color-secondary;
    padding: 15px 64px 15px 15px;
    border-radius: 8px;
  }

  // .basket-card__preview
  &__preview {
    aspect-ratio: 80 / 80;
    height: 80px;
    margin-right: 26px;
  }

  // .basket-card__image
  &__image {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  // .basket-card__title
  &__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 167px;

    // .basket-card__title-icon
    &-icon {
      width: 14px;
      height: 14px;
      margin-left: 20px;
    }
  }

  // .basket-card__description
  &__description {
    margin-bottom: 2px;
    max-width: 218px;
    margin-right: 35px;
  }

  // .basket-card__delete
  &__delete {
    position: absolute;
    right: 0;
    top: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-50%);
    width: 41px;
    height: 64px;
    border-radius: 200px 0px 0px 200px;
    color: $color-light;
    background-color: $color-dark-deep;

    // .basket-card__delete-icon
    &-icon {
      width: 15px;
      height: 15px;
    }
  }
  
  // .basket-card__action
  &__action {
    margin-left: auto;
  }

  // .basket-card__price
  &__price {
    margin-bottom: 12px;
  }

  // .basket-card__counter
  &__counter {
    margin-bottom: 12px;
  }
}
</style>