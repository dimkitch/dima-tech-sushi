<template>
  <transition name="modal">
    <div
      class="modal__wrapper"
      :class="`modal__wrapper--${size} `"
      @click.self="$emit('close')"
    >
      <div class="modal__content" :class="`modal__content--${size} `">
        <CloseIcon
          class="modal__close-btn"
          :class="`modal__close-btn--${size} `"
          @click="$emit('close')"
        />

        <div class="modal__body" :class="`modal__body--${size} `">
          <div v-if="isExsistHeader" class="modal__header">
            <slot name="header" />
          </div>
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import CloseIcon from "@/components/common/icons/CloseIcon.vue";
export default {
  components: { CloseIcon },

  props: {
    size: {
      type: String,
      required: true,
    },
  },

  computed: {
    isExsistHeader() {
      return Boolean(this.$slots) && Boolean(this.$slots.header?.length);
    },
  },

  methods: {},

  mounted() {
    console.log(this.$slots);
    document.body.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) this.$emit("close");
    });
    document.body.style.overflow = "hidden";
  },

  beforeDestroy() {
    document.body.style.overflow = "";
  },
};
</script>

<style lang="scss">
.modal {
  // .modal__wrapper
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: rgba(00, 00, 00, 0.48);
    overflow: auto;
  }

  // .modal__content
  &__content {
    position: relative;
    background-color: #fff;
    z-index: 999;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12),
      0px 20px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #dcdfe6;

    // .modal__content--xl
    &--xl {
      margin: auto 0;
      max-width: 782px;
      border: none;
      border-radius: 50px;
      @media (max-width: $breakpoint-mob) {
        border-radius: 20px;
      }
    }
    // .modal__content--lg
    &--lg {
      text-align: center;
      max-width: 465px;
      border-radius: 8px;
      padding: 36px 40px;

      @media (max-width: $breakpoint-mob) {
        max-width: 328px;
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 0;
        padding-bottom: 20px;
      }
    }
  }

  // .modal__header
  &__header {
    margin-bottom: 36px;
  }

  // .modal__close-btn
  &__close-btn {
    width: 24px;
    height: 24px;
    position: absolute;
    cursor: pointer;
    z-index: 2000;
    color: blue;
    // .modal__header--xl
    &--xl {
      top: 17px;
      right: 50px;
      color: $color-dark-simple-basalt;
    }

    // .modal__header--xl
    &--lg {
      top: 10px;
      right: 10px;
    }
  }

  // .modal__body
  &__body {
    text-align: center;
    // .modal__body--xl
    &--xl {
      text-align: left;
    }

    // .modal__body--xl
    &--lg {
    }
  }
}
</style>
