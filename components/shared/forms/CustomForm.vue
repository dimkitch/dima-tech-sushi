<template>
  <div class="seller-form">
    <h3 class="seller-form__title title-nr color-primary fw-bold">
      Хотите получить скидку и гарантию?
    </h3>
    <p class="seller-form__subtitle text-nr">
      Оставьте свой номер телефона и получите скидку на
      <a class="seller-form__link">OZON</a> и
      <a class="seller-form__modal__link">год гарантии</a> на любую игрушку.
    </p>
    <form @submit.prevent="submitForm">
      <CustomInput class="seller-form__action" />
      <CustomButton size="lg" theme="primary">
        <p class="text-nr color-light fw-bold tf-up">Заказать на wb</p>
      </CustomButton>
      {{ userNumber }}
    </form>
  </div>
</template>
<script>
import CustomInput from "@/components/common/controls/CustomInput.vue";
import CustomButton from "@/components/common/controls/CustomButton.vue";
export default {
  components: {
    CustomInput,
    CustomButton,
  },

  data() {
    return {
      userNumber: "",
    };
  },
  methods: {
    submitForm() {
      console.log(this.userNumber);
    },
  },
};
</script>
<style lang="scss">
.seller-form {
  background-color: $color-light;
  padding: 36px 40px;
  border-radius: 8px;
  text-align: center;
  // .seller-form__subtitle
  &__subtitle {
    margin-top: 8px;
    margin-bottom: 24px;
    color: rgba(84, 89, 94, 0.6);
  }
  // .seller-form__link
  &__link {
    color: $color-primary;
  }
  // .seller-form__action
  &__action {
    margin-bottom: 16px;
  }
}
</style>
