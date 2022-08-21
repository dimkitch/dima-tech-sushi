<template>
  <div class="popular-tag">
    <div>
      {{ tagData.title }}
      <div @click="$emit('click')" class="popular-tag__close">X</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tagData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.popular-tag {
  padding: 10px 41px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: $color-simple-primary;
  &:hover {
    background-color: $color-danger;
  }
}
</style>
