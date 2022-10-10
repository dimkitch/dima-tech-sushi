<template>
  <div class="discount-ozon" :class="discountOzonClasses">
    <h3 class="discount-ozon__title title-nr color-primary fw-bold">
      Хотите получить скидку и гарантию?
    </h3>
    <p class="discount-ozon__subtitle text-nr">
      Оставьте свой номер телефона и получите скидку на
      <a class="discount-ozon__link">OZON</a> и
      <a class="discount-ozon__modal__link">год гарантии</a> на любую игрушку.
    </p>
    <form @submit.prevent="submitForm">
      <CustomInput class="discount-ozon__action" />
      <CustomButton size="lg" theme="primary">
        <p class="text-nr color-light">Получить скидку!</p>
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

  props: {
    boxShadow: {
      type: String,
    },
    padding: {
      type: String,
    },
    size: {
      type: String,
    },
  },

  data() {
    return {
      userNumber: "",
    };
  },
  computed: {
    discountOzonClasses() {
      const prefix = "discount-ozon--";

      const classes = [];

      if (this.boxShadow) {
        classes.push(prefix + this.boxShadow);
      }
      if (this.padding) {
        classes.push(prefix + this.padding);
      }
      if (this.size) {
        classes.push(prefix + this.size);
      }

      return classes;
    },
  },

  methods: {
    submitForm() {
      console.log(this.userNumber);
    },
  },
};
</script>
<style lang="scss">
.discount-ozon {
  background-color: $color-light;
  border-radius: 8px;
  text-align: center;

  // .discount-ozon__subtitle
  &__subtitle {
    margin-top: 8px;
    margin-bottom: 24px;
    color: rgba(84, 89, 94, 0.6);
  }

  // .discount-ozon__link
  &__link {
    color: $color-primary;
  }

  // .discount-ozon__action
  &__action {
    margin-bottom: 16px;
  }

  // -------------------Helpers-------------------

  // .discount-ozon--deep
  &--deep {
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
      0px 20px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #dee2e6;
  }

  // .discount-ozon--padding-xl
  &--padding-xl {
    padding: 36px 40px;
  }

  // .discount-ozon--xl
  &--xl {
    max-width: 465px;
    @media (max-width: $breakpoint-tablet) {
      max-width: 100%;
      width: 100vw;
    }
  }
}
</style>
