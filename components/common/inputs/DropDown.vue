<template>
  <div class="dropdown-block">
    <div class="dropdown-block__wrapper-field">
      <SearchIcon class="dropdown-block__search-icon"></SearchIcon>
      <input
        class="dropdown-block__field"
        @click="isHidden = !isHidden"
        :placeholder="placeholder"
        :value="value"
      />
    </div>
    <ul
      class="dropdown-block__list"
      :class="{
        'dropdown-block__list--is-hidden': isHidden,
      }"
    >
      <li
        class="dropdown-block__item"
        v-for="(option, index) in listOptions"
        :key="`dropdown-block__item-${index}`"
        @click="onSelectOption(option)"
      >
        {{ option.description }}
      </li>
    </ul>
  </div>
</template>
<script>
import SearchIcon from "@/components/common/icons/SearchIcon.vue";
export default {
  components: { SearchIcon },
  props: {
    listOptions: {
      type: Array,
      required: true,
    },
    placeholder: {
      type: String,
      default: "placeholder",
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      search: "",
      isHidden: true,
      currentOption: "Placeholder",
    };
  },
  methods: {
    onSelectOption(option) {
      this.currentOption = option.description;
      this.isHidden = true;

      this.$emit("input", option.description);
    },
    onCloseFromWindow(event) {
      if (
        !event.target.classList.contains("dropdown-block") &&
        !event.target.closest(".dropdown-block")
      ) {
        this.isHidden = true;
      }
    },
  },
  watch: {
    value(newValue, oldValue) {
      console.log("New Value:", newValue);
    },
    search(val) {
      console.log(val);
      this.$emit("search", val);
    },
  },
  mounted() {
    window.addEventListener("click", this.onCloseFromWindow);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.onCloseFromWindow);
  },
};
</script>
<style lang="scss">
.dropdown-block {
  position: relative;

  // .dropdown-block__field
  &__field {
    user-select: none;
    width: 100%;
    padding: 17px 17px 17px 48px;
    background-color: $color-secondary-simple;
    border-radius: 30px;
  }

  // .dropdown-block__list
  &__list {
    position: absolute;
    z-index: 5;
    top: 100%;
    max-height: 300px;
    width: 100%;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
    border: 1px solid black;
    border-top: none;
    background-color: $color-secondary-semple-light;
    transition: all 0.2s linear;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
    border-radius: 0px 0px 8px 8px;

    &::-webkit-scrollbar-button {
      background-image: none;
      background-repeat: no-repeat;
      width: 4px;
      height: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: $color-secondary-deep;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: $color-accent;
    }

    &::-webkit-resizer {
      background-image: none;
      background-repeat: no-repeat;
      width: 4px;
      height: 6px;
    }

    &::-webkit-scrollbar {
      width: 4px;
      height: 6px;
    }
    scrollbar-width: thin;

    // .dropdown-block__list--is-hidden
    &--is-hidden {
      max-height: 0;
      border-color: transparent;
    }
  }

  // .dropdown-block__item
  &__item {
    user-select: none;
    padding: 9px 0px 9px 16px;
    transition: $transition-mod;
    cursor: pointer;
    &:hover {
      background-color: $color-primary;
      color: $color-light;
    }
  }
  //   .dropdown-block__wrapper-field
  &__wrapper-field {
    position: relative;
  }
  //   .dropdown-block__search-icon
  &__search-icon {
    position: absolute;
    top: 50%;
    left: 23px;
    transform: translateY(-50%);
  }
}
</style>
