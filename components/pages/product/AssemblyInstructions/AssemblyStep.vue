<template>
  <div class="assembly-step">
    <div class="assembly-step__inner">
      <h3 class="assembly-step__title title-nr fw-bold">
        <span class="assembly-step__shape"></span>{{ assemblyData.title }}
      </h3>
      <p class="assembly-step__comment">
        {{ assemblyData.description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    assemblyData: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.assembly-step {
  // .assembly-step__inner
  &__inner {
    padding-right: 40px;
  }
  // .assembly-step__shape
  &__shape {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: $color-primary;
    margin-right: 10px;
  }
  // .assembly-step__title
  &__title {
    margin-bottom: 15px;
  }
  // .assembly-step__comment
  &__comment {
  }
}
</style>
