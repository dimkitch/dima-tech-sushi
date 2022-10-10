<template>
  <section class="assembly-instructions">
    <div class="container">
      <div class="assembly-instructions__inner">
        <div class="assembly-instructions__header">
          <h2 class="title-xl color-dark-deep tf-up fw-heavy">
            {{ assemblyInstructionsData.title }}
          </h2>
        </div>
        <div class="assembly-instructions__body">
          <img
            class="assembly-instructions__image"
            src="@/assets/img/instruction.png"
          />
        </div>
        <div class="assembly-instructions__footer">
          <AssemblyStep
            class="assembly-instructions__item"
            v-for="item in assemblyInstructionsData.assemblyInstructionsStep"
            :key="item.id"
            :assemblyData="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import AssemblyStep from "@/components/pages/product/AssemblyInstructions/AssemblyStep.vue";
export default {
  components: {
    AssemblyStep,
  },
  props: {
    assemblyInstructionsData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.assembly-instructions {
  // .assembly-instructions__inner
  &__inner {
    background-image: url("~@/assets/img/logoinstr2.png");
    background-position: center;
    @media (max-width: $breakpoint-tablet) {
      background-image: none;
    }
  }
  // .assembly-instructions__body
  &__body {
    display: flex;
    justify-content: center;
  }
  // .assembly-instructions__image
  &__image {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  //   .assembly-instructions__footer
  &__footer {
    display: flex;
    @media (max-width: $breakpoint-tablet) {
      display: block;
    }
  }
  //   .assembly-instructions__item
  &__item {
    @media (max-width: $breakpoint-mob) {
      width: 196px;
    }
    &:not(:last-child) {
      border-right: 1px solid $color-primary;
      @media (max-width: $breakpoint-tablet) {
        border: none;
        margin-bottom: 40px;
      }
    }
    &:not(:first-child) {
      padding-left: 42px;
      @media (max-width: $breakpoint-tablet) {
        padding: 0;
      }
    }
  }
}
</style>
