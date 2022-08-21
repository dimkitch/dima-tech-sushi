<template>
  <main class="kit-page">
    <div class="container">
      <h1 class="kit-page__title">Кнопки:</h1>
      <div class="kit-page__content">
        <div class="kit-page__item">
          <CustomButton size="md" theme="accent">
            <!-- <p class="text-nr color-light fw-bold tf-up"> -->
            Смотреть весь каталог
            <!-- </p> -->
          </CustomButton>
        </div>
        <div class="kit-page__item">
          <CustomButton size="xsm" theme="accent"> Каталог </CustomButton>
        </div>
        <div class="kit-page__item">
          <CustomButton size="lg" theme="primary">
            Заказать на OZON
          </CustomButton>
        </div>
        <div class="kit-page__item">
          <CustomButton size="lg" theme="primary">
            Заказать на WB
          </CustomButton>
        </div>
        <div class="kit-page__item">
          <CustomButton size="round" theme="primary">
            <ArrowLeft />
          </CustomButton>
        </div>
        <div class="kit-page__item">
          <CustomButton size="round" theme="primary"
            ><ArrowRight />
          </CustomButton>
        </div>
        <div class="kit-page__item">
          <CustomButton size="xl" theme="accent">
            Применить фильтры
          </CustomButton>
        </div>
        <div class="kit-page__item">
          <CustomButton size="sm" theme="primary">
            Игрушки оптом и в розницу
          </CustomButton>
        </div>
        <div class="kit-page__item">
          <CustomButton size="sm" theme="danger">
            Игрушки оптом и в розницу
          </CustomButton>
        </div>
        <h2>
          -----------------------------------------------------------------------------------------------------------------------------
        </h2>
        <div class="kit-page__item">
          <CustomButton size="nr" theme="light"> Купить на OZON </CustomButton>
        </div>
        <!-- <ContactsBlock label="тедефон" title="3241231512312"
            ><TelIcon
          /></ContactsBlock> -->
        <h2>Dropdown:</h2>
        <div class="kit-page__item">
          <DropDown
            :listOptions="listOptions"
            placeholder="Поиск"
            v-model="exampleOption"
          />
        </div>
        <h2>Modals:</h2>
        <div class="kit-page__item">
          <ModalWrapper v-show="modalFirst" @close="modalFirst = false">
            <CustomForm />
          </ModalWrapper>
          <button @click="modalFirst = !modalFirst">
            <h2>Open Modal</h2>
          </button>
        </div>
        <h2>Inputs:</h2>
        <div class="kit-page__item">
          <!-- <CustomInput /> -->
        </div>
        <h2>Cards:</h2>
        <!-- <ProductCard /> -->
      </div>
    </div>
  </main>
</template>

<script>
import CustomForm from "@/components/shared/forms/CustomForm.vue";
import CustomButton from "@/components/common/controls/CustomButton.vue";
import DropDown from "@/components/common/inputs/DropDown.vue";
import ProductCard from "@/components/shared/cards/ProductCard.vue";
import ModalWrapper from "@/components/layouts/ModalWrapper.vue";
import CustomInput from "@/components/common/controls/CustomInput.vue";
import ArrowLeft from "@/components/common/icons/ArrowLeft.vue";
import ArrowRight from "@/components/common/icons/ArrowRight.vue";
export default {
  components: {
    CustomButton,
    CustomForm,
    ArrowLeft,
    ArrowRight,
    DropDown,
    ModalWrapper,
    CustomInput,
    ProductCard,
  },

  data() {
    return {
      modalFirst: false,
      listOptions: [
        { name: "1Наименование" },
        { name: "2Наименование" },
        { name: "3Наименование" },
        { name: "4Наименование" },
        { name: "5Наименование" },
        { name: "6Наименование" },
        { name: "7Наименование" },
        { name: "8Наименование" },
        { name: "9Наименование" },
        { name: "10Наименование" },
        { name: "11Наименование" },
        { name: "12Наименование" },
        { name: "13Наименование" },
        { name: "14Наименование" },
        { name: "15Наименование" },
        { name: "16Наименование" },
      ],
      exampleOption: "",
    };
  },
};
</script>
<style lang="scss">
.kit-page {
  // .kit-page__title
  &__title {
  }
  // .kit-page__content
  &__content {
  }
  // .kit-page__item
  &__item {
    margin-top: 10px;
  }
}
</style>
