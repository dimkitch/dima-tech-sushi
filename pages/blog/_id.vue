<template>
  <main class="blog-page" v-if="pageData">
    <BlogCard
      class="blog-page__blog"
      :blogData="pageData.blog"
      v-if="pageData.blog"
    />
  </main>
</template>
<script>
import BlogCard from "@/components/shared/blocks/Blog/BlogCard.vue";

import Blog from "@/components/shared/blocks/Blog";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { Blog, BlogCard },

  methods: {
    ...mapActions({ loadPage: "api/blog/LOAD_PAGE" }),
  },

  computed: {
    ...mapGetters({ pageData: "api/blog/PAGE_DATA" }),
  },

  async mounted() {
    console.log("this.$route:", this.$route.params.id);
    if (!this.$route.params.id) throw new Error(`this page dont have id`);
    await this.loadPage(this.$route.params.id);
  },
};
</script>
