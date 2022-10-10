<template>
  <div class="popular-tags">
    <div class="popular-tags__inner">
      <div
        class="popular-tags__item"
        v-for="(tag, index) in tagData"
        :key="`popular-tags__item-${index}`"
      >
        {{ tag.title }}
        <div class="popular-tags__action">X</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tagData: {
      type: Array,
    },
  },
};
</script>
<style lang="scss">
.popular-tags {
  // .popular-tags__inner
  &__inner {
    display: flex;
    flex-wrap: wrap;
  }

  //   .popular-tags__item
  &__item {
    display: flex;
    padding: 10px 41px;
    border-radius: 10px;
    color: $color-light;
    cursor: pointer;
    background-color: $color-simple-primary;
    margin-bottom: 10px;

    // .popular-tags__item:hover
    &:hover {
      background-color: $color-danger;
    }

    // .popular-tags__item:not(:last-child)
    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  //   .popular-tags__action
  &__action {
    margin-left: 10px;
  }
}
</style>
