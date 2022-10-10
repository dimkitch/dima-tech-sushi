<template>
  <div class="callback">
    <TelIcon class="callback__icon" />
    <div class="callback__content">
      <p class="callback__info text-lg color-secondary-basalt-deep">
        {{ callbackInfo }}
      </p>
      <p class="callback__tel text-md color-primary fw-bold">
        {{ callbackTel }}
      </p>
    </div>
  </div>
</template>
<script>
import TelIcon from "@/components/common/icons/TelIcon.vue";

export default {
  components: {
    TelIcon,
  },
  props: {
    callbackInfo: {
      type: String,
      required: true,
    },
    callbackTel: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.callback {
  display: flex;
  align-items: center;
  // .callback__icon
  &__icon {
    margin-right: 17px;
    width: 30px;
    height: 30px;
    color: $color-light;
  }
  // .callback__info
  &__info {
    margin-bottom: 2px;
  }
}
</style>
