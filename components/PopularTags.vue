<template>
  <div class="popular-tags">
    <div class="popular-tags__inner">
      <div
        class="popular-tags__item"
        v-for="(tag, index) in tagData"
        :key="`popular-tags__${index}`"
      >
        {{ tag.title }}
        <div @click="removeTag(index)" class="popular-tags__close">X</div>
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

  methods: {
    removeTag(index) {
      console.log(`Tag id - ${index} removed`);
      this.$emit("remove", index);
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
    color: white;
    cursor: pointer;
    background-color: $color-simple-primary;
    &:hover {
      background-color: $color-danger;
    }
    margin-bottom: 10px;
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  //   .popular-tags__close
  &__close {
    margin-left: 10px;
  }
}
</style>
