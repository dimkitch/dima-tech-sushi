<template>
  <section class="assembly-instructions">
    <div class="container">
      <div class="assembly-instructions__header">
        <h2 class="title-xl color-dark-deep tf-up fw-heavy">
          Инструкция по сборке
        </h2>
      </div>
      <div class="assembly-instructions__body">
        <img src="@/assets/img/instruction.png" alt="" />
      </div>
      <div class="assembly-instructions__footer">
        <AssemblyStep
          class="assembly-instructions__item"
          v-for="item in assemblyList"
          :key="item.id"
          :assemblyData="item"
        />
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
  data() {
    return {
      assemblyList: [
        {
          title: "Действие 1",
          info: "It is a long established fact that a reader will be distracted by the readable content",
          id: 8567,
        },
        {
          title: "Действие 2",
          info: "It is a long established fact that a reader will be distracted by the readable content",
          id: 1578,
        },
        {
          title: "Действие 3",
          info: "It is a long established fact that a reader will be distracted by the readable content",
          id: 145783,
        },
        {
          title: "Действие 4",
          info: "It is a long established fact that a reader will be distracted by the readable content",
          id: 3234535535,
        },
        {
          title: "Действие 5",
          info: "It is a long established fact that a reader will be distracted by the readable content",
          id: 14656899,
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.assembly-instructions {
  // .assembly-instructions__body
  &__body {
    display: flex;
    justify-content: center;
    background-image: url("~@/assets/img/logoinstr2.png");
    background-position: center;
  }
  //   .assembly-instructions__footer
  &__footer {
    display: flex;
  }
  //   .assembly-instructions__item
  &__item {
    &:not(:last-child) {
      border-right: 1px solid $color-primary;
    }
    &:not(:first-child) {
      padding-left: 42px;
    }
  }
}
</style>
