<template>
  <article class="quality-certificates">
    <div class="container">
      <h3 class="quality-certificates__title title-xl fw-heavy tf-up">
        сертификаты качества
      </h3>
      <div class="quality-certificates__grid">
        <div
          class="quality-certificates__item"
          v-for="img in certificatesList"
          :key="`quality-certificates__${img.id}`"
        >
          <img
            class="quality-certificates__image"
            src="@/assets/img/certif.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      certificatesList: [
        {
          id: 141411511,
          img: "https://proto-x.net/upload/medialibrary/a1e/sertifikaty_2.jpg",
        },
        {
          id: 14141151121,
          img: "https://avatars.mds.yandex.net/i?id=409f7b7bbcdb087bbe429302016a2361-5559510-images-thumbs&ref=rim&n=33&w=107&h=150",
        },
        {
          id: 1414115131341,
          img: "https://images.ua.prom.st/3084433392_w640_h2048_35706074.jpg?fresh=1&PIMAGE_ID=3084433392",
        },
        {
          id: 1414115141411,
          img: "https://avatars.mds.yandex.net/i?id=832306361f11237f8e30c6756dabd2e6-4569287-images-thumbs&ref=rim&n=33&w=113&h=150",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.quality-certificates__title {
  margin-bottom: 30px;
}
.quality-certificates__grid {
  display: flex;
  justify-content: space-between;
}
.quality-certificates__image {
  width: 100%;
  &:not(:last-child) {
    margin-right: 30px;
  }
}
</style>
