<template>
  <main class="home-page">
    <div class="container">
      <div>MAIN PAGE</div>
      <div class="">
        <nuxt-link to="/news">ссылка к новостям по path</nuxt-link>
        <br />
        <nuxt-link :to="{ name: 'news' }">ссылка к новостям по name</nuxt-link>
        <br />
        <nuxt-link :to="{ name: 'news-id', params: { id: 123 } }"
          >ссылка к новостям по id</nuxt-link
        >
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style lang="scss">
.container {
  max-width: 1460px;
  padding: 0 20px;
}
</style>
