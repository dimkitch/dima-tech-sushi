<template>
  <transition name="modal">
    <div class="modal__wrapper" @click.self="$emit('close')">
      <div class="modal__content">
        <!-- Header -->
        <div class="modal__header">
          <img src="@/assets/img/svg/1.png" alt="" />
          <span class="button__close" @click="$emit('close')">X</span>
          <!-- <CloseIcon @click="$emit('close')" /> -->
        </div>
        <!-- Body -->
        <div class="modal__body">
          <slot> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
// import CloseIcon from "@/components/common/icons/CloseIcon.vue";
import CustomButton from "@/components/common/controls/CustomButton.vue";
export default {
  components: {
    CustomButton,
    // CloseIcon,
  },
  data() {
    return {};
  },

  props: {
    title: {
      type: String,
      require: true,
    },
  },
  mounted() {
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) this.$emit("close");
    });
  },
  components: {},
  methods: {},
};
</script>

<style lang="scss">
// Animation
.modal-enter {
  opacity: 0;
}
.model-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-content,
.modal-leave-active,
.modal__content {
  transform: scale(1.2);
}
.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
  transition: opacity 0.3s ease;
  background-color: rgba(00, 00, 00, 0.48);
}
.modal__content {
  position: relative;
  text-align: center;
  max-width: 465px;
  padding: 36px 40px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
}
.modal__header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;
  span {
    font-size: 24px;
  }
  .button__close {
    position: relative;
    top: -30px;
    right: -10px;
    cursor: pointer;
  }
}
.modal__body {
  text-align: center;
}
</style>
