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
          <ModalWrapper v-if="modalFirst" @close="modalFirst = false" size="lg">
            <template #header
              ><img src="@/assets/img/discount-ozon.png" alt=""
            /></template>
            <DiscountOzon />
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
import DiscountOzon from "@/components/shared/forms/DiscountOzon.vue";
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
    DiscountOzon,
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
        { description: "1Наименование" },
        { description: "2Наименование" },
        { description: "3Наименование" },
        { description: "4Наименование" },
        { description: "5Наименование" },
        { description: "6Наименование" },
        { description: "7Наименование" },
        { description: "8Наименование" },
        { description: "9Наименование" },
        { description: "10Наименование" },
        { description: "11Наименование" },
        { description: "12Наименование" },
        { description: "13Наименование" },
        { description: "14Наименование" },
        { description: "15Наименование" },
        { description: "16Наименование" },
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
