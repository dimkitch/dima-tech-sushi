<template>
  <section class="discount">
    <div class="container">
      <div class="discount__content">
        <div class="discount__info">
          <div class="discount__title title-sm fw-bold color-light">
            Получите <span class="color-primary">скидку</span> на
            <span class="color-primary">OZON</span>
            <br />
            <span class="color-primary text-xnr">40%</span>
          </div>
        </div>
        <div class="discount__form">
          <CustomForm />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import CustomForm from "@/components/shared/forms/CustomForm.vue";
export default {
  components: {
    CustomForm,
  },
};
</script>
<style lang="scss">
.discount {
  // .discount__content
  &__content {
    background-image: url(@/assets/img/discount.png);
    object-fit: cover;
    object-position: center;
    padding: 140px 84px;
    display: flex;
  }
  // .discount__info
  &__info {
    margin-right: 209px;
  }
}
</style>
