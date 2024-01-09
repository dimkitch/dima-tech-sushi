<template>
  <div 
    class="menu-card"
    :class="[
      { 'menu-card--is-active': isActive }
    ]"
  >
    <div class="menu-card__inner">
      <div class="menu-card__header">
        <div class="menu-card__preview">
          <img class="menu-card__img" :src="card.image">
        </div>
        <div 
          class="menu-card__header-wrapper"
          @click="changeColor" 
          :class="{ 'menu-card__header-wrapper--is-active': heartActive }"
        >
          <HeartIcon 
            class="menu-card__header-icon"
          />
        </div>
      </div>
      <div class="menu-card__body">
        <div class="menu-card__body-header">
          <h3 class="menu-card__title tt-uppercase text-xl">
            {{ card.title }}
          </h3>
          <div class="menu-card__weight color-secondary-deep"> 
            {{ card.weight }} г
          </div>
        </div>
        <div class="menu-card__body-footer">
          <p class="menu-card__description color-secondary-deep text-ll">
            {{ card.description }}
          </p>
        </div>
      </div>
      <div class="menu-card__footer">
        <div class="menu-card__price text-xl">
          {{ card.price }} ₽
        </div>
        <CustomButton 
          v-if="!card.quantity"
          class="menu-card__btn"
          size="md-2" 
          theme="deep"
          @click="clickBtnOnCard"
        >
          В корзину
        </CustomButton>
        <Counter 
          v-else
          class="menu-card__counter" 
          theme="light"
          :count="card.quantity"
          @addition="addition"
          @decrease="decrease"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from '@/components/common/controls/CustomButton.vue'
import HeartIcon from '@/components/common/icons/HeartIcon.vue'
import Counter from '@/components/shared/Counter.vue'

export default {
  components: {
    CustomButton,
    HeartIcon,
    Counter
  },

  props: {
    card: {
      type: Object,
      default: () => ({})    
    }
  },

  data() {
    return {
      heartActive: false
    }
  },

  computed: {
    isActive() {
      return this.card.quantity > 0 
    },
  },

  methods: {
    clickBtnOnCard() {
      this.$emit('addToBasket');
    },

    changeColor() {
      this.heartActive = !this.heartActive
    },

    addition() {
      this.$emit('addition');
    },

    decrease() {
      this.$emit('decrease');
    }
  }
}
</script>

<style lang="scss">
$b: '.menu-card';

#{$b} {
  // .menu-card__inner
  &__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    background-color: $color-secondary;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);

    // .menu-card--is-active .menu-card__inner
    #{$b}--is-active & {
      background-color: $color-dark;
    }
  }

  // .menu-card__header
  &__header {
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    
    // .menu-card__header-wrapper
    &-wrapper {
      // .menu-card__header-wrapper--is-active
      &--is-active {
        color: $color-danger;
      }
    }

    // .menu-card__header-icon
    &-icon {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer ;

      // .menu-card--is-active .menu-card__header-icon
      #{$b}--is-active & {
        color: $color-danger;
      }
    }
  }

  // .menu-card__preview
  &__preview {
    aspect-ratio: 130 / 130;
    height: 130px;
  }

  // .menu-card__img
  &__img {
    width: 100%;
    height: 100%;
  }

  // .menu-card__body
  &__body {
    margin-bottom: 44px;

    // .menu-card__body-header
    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
    }
  }

  // .menu-card__title 
  &__title {
    // .menu-card--is-active .menu-card__title
    #{$b}--is-active & {
      color: $color-light;
    }
  }

  // .menu-card__weight
  &__weight {
    // .menu-card--is-active .menu-card__weight
    #{$b}--is-active & {
      color: $color-light;
    }
  }

  // .menu-card__description
  &__description {
    // .menu-card--is-active .menu-card__title
    #{$b}--is-active & {
      color: $color-light;
    }
  }

  // .menu-card__footer
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
  }

  // .menu-card__price
  &__price {
    // .menu-card--is-active .menu-card__price
    #{$b}--is-active & {
      color: $color-light;
    }
  }

  // .menu-card__btn
  &__btn {
    display: block;

    // .menu-card--is-active .menu-card__btn
    #{$b}--is-active & {
      display: none;
      color: $color-light;
    }
  }

  // .menu-card__counter
  &__counter {
    display: none;
    
    // .menu-card--is-active .menu-card__counter
    #{$b}--is-active & {
      display: block;
      color: $color-light;
    }
  }
}
</style>