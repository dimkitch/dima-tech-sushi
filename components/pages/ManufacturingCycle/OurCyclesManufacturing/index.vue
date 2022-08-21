<template>
  <div class="our-cycles-manufacturing">
    <div class="container">
      <div class="our-cycles-manufacturing__header">
        <h3 class="our-cycles-manufacturing__title title-xl fw-heavy">
          ЦИКЛ ПРОИЗВОДСТВА НАШИХ ИГРУШЕК
        </h3>
        <p
          class="our-cycles-manufacturing__subtitle text-xmd color-secondary-deep-light"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </p>
      </div>
      <div class="our-cycles-manufacturing__body">
        <CyclesCard
          class="our-cycles-manufacturing__cycles-card"
          v-for="card in standartsList"
          :key="`cycle-card-${card.number}`"
          :standartData="card"
        />
      </div>
    </div>
  </div>
</template>
<script>
import CyclesCard from "@/components/pages/ManufacturingCycle/OurCyclesManufacturing/CyclesCard.vue";

export default {
  components: { CyclesCard },
  data() {
    return {
      standartsList: [
        {
          number: "1",
          title:
            "Advocacy and Legislative Representation for our Culture and Businesses",
          info: "Your membership of NHCA supports the representaton of hookah interests with legislative bodies, lawmakers, and regulators at the federal, state, and local levels. The hookah sector and culture needs a strong unified voice in defending our businesses. Membership not only supports efforts to protect your business but also gives you a voice at the table in shaping our policy priorities for the industry in the future.",
          img: "https://yandex-images.clstorage.net/5STK4u119/765866flPQQj/ZNdT8bfFJ1To8T2Cex_Wnank5oc1cbn3PEn89STQawXb3XOoNwLVcIEntYf0AugY8Po-BLdZnd-1JVLmcfnABjDiJ7W2oSeFDADdw6-Ox5gZ1Jb3pfSYYsl5CfUVtX7R23hSPCfSxrMTUKeRVuSvr_cNr9GX-b3eYeFGoOI5F_ImpAPwoCRlNw1BrDOqXpeqS1Znoed0aSZ4PA2gQJcvIY3LY0xDlSQywEKnQfZnDiz3ra0wFjnOzxYxJsJjLnUj9PeC8-Hkh5XtsT1Aut_mOEql1fFmt2slCx6uUbHHntF--oIfcqTFABMixZHlZb__1r3NEVYJHp5HgtezoeyEwNfkcZMiJ8eGznGMAwkdFcvbpMVCp8Q5dbrfvENQd6zD3WmjXYNU9OIDkaWilEWvn8XdHJP3OM6thoJVc8H95uFkFuKwQdTH5p6BLTAa3ddr-mXHYIUFOOR73-_SgxXPcE9pMV8RFpXisZOXUbRW_B1G_1yyB5u9HXeT5SHBT1dRV0cik-E2tCZ9kM9gSyyUGEumxmFFlUmW6ezvwuOUX1CO-hCuYxW2QjPg5zOmds9ul-2dEKZ4jo50Y8dicV11oOYH0LDgRsW0TNJNcIsvR5mphcdD9rbbNOiurMNTZh0CLZrTb1E3t6LToTbSBmS8fNQdrIElSy3ORfN3QTCdhEJ0pVHwYVTn1z-CjPGZDcfKK7TGQ2b2G3XI3OzxoSROU9xYcK2zNVfiwFCl8FRl781FjVywJFqsLxVyBNNinVcRx0Vwk6M3lmTsc-zhuA31OGvHFWEHlcm2W66PkEPlX0C82sPtcZWH83IiVZMllZwvJPwuIpYbrZ_FkzdTcK30IaU386Lz5FQGjXJegTjNV_hbZkfy93cLdbrMvXFihG7Ar4iTXmLWR9AyQlXQJIatj-QNnJFlKH69REIWw9EMN2FlF3FAwVWXdF8CD3PL3yRpyBQFQKUna4fqzu-DU",
        },
        {
          number: "2",
          title: "Tools, Resources, and Education",
          info: "NHCA will support its members in reaching out to their political representatives. We will be there for your business whenever it is threatened at the federal, state or municipal level.Members will receive regular updates on pending legislation and regulations affecting hookah and hookah related products through state and federal news updates. Members will also be provided the most relevant news and insights for improving your business and informing the community.",
          img: "https://serebrokubachi.ru/wp-content/uploads/serebryanye-chasy-4-11-1.jpg",
        },
        {
          number: "3",
          title: "Unifying Voice",
          info: "We need an ever-present organization that unites the segments of our sector to defend our culture and businesses. NHCA is uniting manufacturers, distributors, store owners, and lounges. Bringing together the industry will not only help defend the future of your business, but it will also help to grow it through new insights and connections.",
          img: "https://serebrokubachi.ru/wp-content/uploads/serebryanye-chasy-4-11-1.jpg",
        },
        {
          number: "4",
          title: "Unifying Voice",
          info: "We need an ever-present organization that unites the segments of our sector to defend our culture and businesses. NHCA is uniting manufacturers, distributors, store owners, and lounges. Bringing together the industry will not only help defend the future of your business, but it will also help to grow it through new insights and connections.",
          img: "https://serebrokubachi.ru/wp-content/uploads/serebryanye-chasy-4-11-1.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.our-cycles-manufacturing {
  // .our-cycles-manufacturing__header
  &__header {
    margin-bottom: 80px;
  }
  //    .our-cycles-manufacturing__title
  &__title {
    margin-bottom: 30px;
  }
  // .our-cycles-manufacturing__cycles-card
  &__cycles-card {
    &:not(:last-child) {
      margin-bottom: 70px;
    }
  }
}
</style>
