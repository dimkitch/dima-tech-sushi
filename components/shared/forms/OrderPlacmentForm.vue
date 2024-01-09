<template>
  <form class="order-placment-form" @submit.prevent="onSubmit">
    <div class="order-placment-form__inner">
      <h2 class="order-placment-form__title title-ll">Оформление заказа</h2>
      <div class="order-placment-form__step">
        <div class="order-placment-form__step-title text-xxl-2">
          Способ доставки
        </div>
        <CustomRadio 
          v-for="radio in deliveryMethods"
          :key="`order-placment-form__radio-${radio.value}`"
          :input-value="radio.value"
          v-model="form.selectedOption" 
          name="dostavka" 
        >
          <span class="order-placment-form__radio-icon">
            <template name="icon">
              <component :is="radio.icon" />
            </template>
          </span>
          {{ radio.label }}
        </CustomRadio>
        <div class="order-placment-form__step-shape text-xxl-2 color-light">1</div>
      </div>
      <div class="order-placment-form__step">
        <div class="order-placment-form__step-title text-xxl-2">
          Данные для доставки
        </div>
        <div class="order-placment-form__field">
          <CustomInput 
            class="color-secondary-light"
            v-model.trim="form.firstName"
            :is-error="isRequiredErrorField('firstName') || isMinErrorField('firstName')"
          >       
            <template slot="icon">
              <PersonIcon class="order-placment-form__icon"/>
            </template> 
            Имя
          </CustomInput>
          <ErrorFormWrapper :is-visible="isRequiredErrorField('firstName') || isMinErrorField('firstName')">
            <div v-show="isRequiredErrorField('firstName')">Это обязательное поле</div>
            <div v-show="isMinErrorField('firstName')">Минимальное количество символов: {{ getMinForField('firstName') }}</div>
          </ErrorFormWrapper>
        </div>
        <div class="order-placment-form__field">
          <CustomInput 
            class="order-placment-form__input color-secondary-light"
            v-model.trim="form.phone"
          >
            <template slot="icon">
              <PhoneIcon class="order-placment-form__icon"/>
            </template> 
            Телефон
          </CustomInput>
          <ErrorFormWrapper :is-visible="isRequiredErrorField('phone') || isMinErrorField('phone')">
            <div v-show="isRequiredErrorField('phone')">Это обязательное поле</div>
            <div v-show="isMinErrorField('phone')">Минимальное количество символов: {{ getMinForField('phone') }}</div>
          </ErrorFormWrapper>
        </div>
        <div class="order-placment-form__field">
          <CustomInput 
            class="order-placment-form__input color-secondary-light"
            v-model.trim="form.additionalInformation"
          >
            <template slot="icon">
              <InformationIcon class="order-placment-form__icon"/>
            </template> 
            Дополнительная информация
          </CustomInput>
          <!-- <ErrorFormWrapper :is-visible="isMaxErrorField('additionalInformation')">
            <div v-show="isMaxErrorField('additionalInformation')">Максимальное количество символов: {{ getMinForField('additionalInformation') }}</div>
          </ErrorFormWrapper> -->
        </div>
        <div class="order-placment-form__step-shape text-xxl-2 color-light">2</div>
      </div>
      <div class="order-placment-form__action">
        <dir class="order-placment-form__action-items">
          <div class="order-placment-form__item text-lg fw-300">
            Cтоимость товаров 
            <span class="order-placment-form__item-sum fw-400">
              {{ price }} ₽
            </span>
          </div>
          <div class="order-placment-form__item text-lg fw-300">
            Итого к оплате 
            <span class="order-placment-form__item-sum fw-400"> 
              {{ resultPrice }} ₽
            </span>
          </div>
        </dir>
        <CustomButton 
          class="order-placment-form__btn"
          theme="primary-deep"
          size="md-4"
          type="submit"
        >
          Купить и оплатить
        </CustomButton>
        <div class="order-placment-form__caption">
          <a>Создавая заказ, вы соглашаетесь с политикой обработки персональных данных</a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, between } from 'vuelidate/lib/validators'

import CustomInput from '@/components/common/inputs/CustomInput.vue'
import PersonIcon from '@/components/common/icons/PersonIcon.vue'
import PhoneIcon from '@/components/common/icons/PhoneIcon.vue'
import InformationIcon from '@/components/common/icons/InformationIcon.vue'
import CustomRadio from '@/components/common/inputs/CustomRadio.vue'
import CarIcon from '@/components/common/icons/CarIcon.vue'
import BagIcon from '@/components/common/icons/BagIcon.vue'
import CustomButton from '@/components/common/controls/CustomButton.vue'
import ErrorFormWrapper from '@/components/layouts/ErrorFormWrapper.vue'

export default {
  mixins: [validationMixin],

  components: {
    CustomInput,
    PersonIcon,
    PhoneIcon,
    InformationIcon,
    CustomRadio,
    CarIcon,
    BagIcon,
    CustomButton,
    ErrorFormWrapper
  },

  props: {
    price: {
      type: Number,
      default: 0
    }
  },

  validations: {
    form: {
      firstName: {    
        required,
        minLength: minLength(4) 
      },

      phone: {
        required,
        minLength: minLength(10) 
      }
    }
  },

  data() {
    return {
      form: {
        selectedOption: '',
        firstName: '',
        phone: '',
        additionalInformation: ''
      },
      deliveryMethods: [
        {
          value: 'kurer',
          label: 'Курьер',
          icon: 'car-icon'
        },
        {
          value: 'selfDelivery',
          label: 'Самовывоз',
          icon: 'bag-icon'
        }
      ]
    } 
  },

  computed: {
    resultPrice() {
      return this.form.selectedOption === 'selfDelivery' 
        ? (this.price - (this.price * 0.1)) 
        : this.price
    }
  },

  methods: {
    onSubmit() {
      this.$v.$touch()

      if (this.$v.$invalid) return 

      this.$emit('send-form', this.form)
    },

    isRequiredErrorField(field) {
      return this.$v.form[field].$error && !this.$v.form[field].required
    },

    isEmailErrorField(field) {
      return this.$v.form[field].$error && !this.$v.form[field].email
    },

    isMinErrorField(field) {
      return this.$v.form[field].$error && !this.$v.form[field].min
    },

    isMaxErrorField(field) {
      return this.$v.form[field].$error && !this.$v.form[field].max
    },

    isCheckedErrorField(field) {
      return this.$v[field].$error && !this.$v[field].checked
    },

    getMinForField(field) {
      return this.$v.form[field].$params.minLength.min
    }
  }
}
</script>

<style lang="scss">
  $b: '.order-placment-form';

  #{$b} {
    // .order-placment-form__inner
    &__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    // .order-placment-form__radio-icon
    &__radio-icon {
      margin-right: 40px;
      width: 30px;
      height: 30px;
    }

    // .order-placment-form__title
    &__title {
      margin-bottom: 27px;
    }

    // .order-placment-form__step
    &__step {
      position: relative;
      display: flex;
      flex-direction: column;
      width: 100%;
      border-radius: 8px;
      background-color: $color-light;
      padding: 20px 32px 20px 62px;
      margin-bottom: 14px;

      // .order-placment-form__step-shape
      &-shape {
        position: absolute;
        top: 16px;
        left: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        padding: 5px 10px;
        background-color: $color-danger-deep;
        border-radius: 50%;
      }
    }
    
    // .order-placment-form__field
    &__field {
      &:not(:first-child) {
        margin-top: 40px;
      }
    }

    // .order-placment-form__icon
    &__icon {
      width: 100%;
      height: 100%;
    }

    // .order-placment-form__action
    &__action {
      padding: 16px 32px;
      background-color: $color-light;
      border-radius: 8px;
      
      // .order-placment-form__action-items
      &-items {
        padding: 0 32px 0 64px;
        margin-bottom: 20px;
      }
    } 

    // .order-placment-form__item
    &__item {
      position: relative;
      padding: 20px 0;
      @include gridcols(2, 5px);
    
      &:not(:last-child) {
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 1px;
          background-color: $color-secondary-light-2;  
        }
      }
    }

    // .order-placment-form__btn
    &__btn {
      width: 100%;
      margin-bottom: 20px;
    }
  }
</style>