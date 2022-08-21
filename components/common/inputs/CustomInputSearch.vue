<template>
  <div class="custom-input-search">
    <input
      class="custom-input-search__action"
      type="text"
      placeholder="Поиск"
    />
    <SearchIcon class="custom-input-search__icon" />
    <FilterIcon class="custom-input-search__icon-filter" />
  </div>
</template>
<script>
import SearchIcon from "@/components/common/icons/SearchIcon.vue";
import FilterIcon from "@/components/common/icons/FilterIcon.vue";
export default {
  components: {
    SearchIcon,
    FilterIcon,
  },
};
</script>
<style lang="scss">
.custom-input-search {
  position: relative;
  // .custom-input-search__action
  &__action {
    border-radius: 30px;
    background-color: $color-secondary-simple;
    padding: 18px 3px 10px 48px;
    width: 343px;
  }
  .custom-input-search__icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 24px;
  }
  // .custom-input-search__icon-filter
  &__icon-filter {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 367px;
  }
}
</style>
