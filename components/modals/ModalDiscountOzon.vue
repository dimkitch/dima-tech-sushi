<template>
  <ModalWrapper class="modal-discount-ozon" @close="$emit('close')" size="lg">
    <template #header>
      <img
        class="modal-discount-ozon__img"
        src="@/assets/img/discount-ozon.png"
        alt=""
      />
    </template>
    <DiscountOzon />
  </ModalWrapper>
</template>

<script>
import ModalWrapper from "@/components/layouts/ModalWrapper.vue";
import DiscountOzon from "@/components/shared/forms/DiscountOzon.vue";

export default {
  components: {
    ModalWrapper,
    DiscountOzon,
  },
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.modal-discount-ozon {
  // .modal-discount-ozon__img
  &__img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
