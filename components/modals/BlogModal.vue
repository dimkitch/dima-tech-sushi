<template>
  <ModalWrapper class="blog-modal" @close="$emit('close')" size="xl">
    <div
      class="blog-modal__header"
      :style="`background-image: url(${blogData.image})`"
    >
      <h2 class="title-lg color-light">{{ blogData.title }}</h2>
    </div>
    <div class="blog-modal__body">
      {{ blogData.description }}
    </div>
  </ModalWrapper>
</template>
<script>
import ModalWrapper from "@/components/layouts/ModalWrapper.vue";
export default {
  components: {
    ModalWrapper,
  },
  props: {
    blogData: {
      type: Object,
    },
  },

  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) this.$emit("close");
    });
  },
};
</script>

<style lang="scss">
.blog-modal {
  // .blog-modal__header
  &__header {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: $color-secondary-basalt;
    padding: 93px 50px;
    border-radius: 50px;
    @media (max-width: $breakpoint-mob) {
      padding: 93px 22px;
      border-radius: 20px;
    }
  }

  // .blog-modal__body
  &__body {
    margin-top: 20px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
    overflow-y: auto;
    @media (max-width: $breakpoint-mob) {
      margin-bottom: 50px;
      margin-left: 22px;
      margin-right: 22px;
    }
  }
}
</style>
