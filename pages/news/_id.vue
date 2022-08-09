<template>
  <div class="news-page-detail">
    Детальная страница новости - {{ currentNewsId }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentNewsId: 0,
    };
  },
  created() {
    if (!process.client) return;
    this.currentNewsId = this.$route.params.id;
    console.log(this.$route);
  },
};
</script>
