<template>
  <input
    class="custom-input text-nr fw-medium"
    type="tel"
    placeholder="Ваш номер телефона"
  />
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.custom-input {
  width: 100%;
  border: 1px solid $color-secondary-semple-dark;
  border-radius: 8px;
  padding: 14px 16px;
}
</style>
