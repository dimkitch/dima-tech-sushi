<template>
  <div>
    <div class="news">all news</div>
    <div class="">
      <ClarityIcon class="color-danger" /> Инструкция по сборке
    </div>
  </div>
</template>

<script>
import ClarityIcon from "@/components/common/icons/ClarityIcon.vue";
export default {
  components: { ClarityIcon },
};
</script>

<style lang="scss">
.color-danger {
  color: red;
}
</style>
