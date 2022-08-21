<template>
  <section class="our-standarts">
    <div class="container">
      <div class="our-standarts__header">
        <h3 class="our-standarts__title title-xl fw-heavy">
          Наши стандарты качества
        </h3>
      </div>
      <div class="our-standarts__body">
        <QualitiStandart
          v-for="(standart, index) in standartsList"
          :key="index"
          :standartData="standart"
        />
      </div>
    </div>
  </section>
</template>
<script>
import QualitiStandart from "@/components/shared/blocks/OurStandarts/QualitiStandart.vue";
export default {
  components: {
    QualitiStandart,
  },
  data() {
    return {
      standartsList: [
        {
          number: "1",
          title:
            "Advocacy and Legislative Representation for our Culture and Businesses",
          info: "Your membership of NHCA supports the representaton of hookah interests with legislative bodies, lawmakers, and regulators at the federal, state, and local levels. The hookah sector and culture needs a strong unified voice in defending our businesses. Membership not only supports efforts to protect your business but also gives you a voice at the table in shaping our policy priorities for the industry in the future.",
        },
        {
          number: "2",
          title: "Tools, Resources, and Education",
          info: "NHCA will support its members in reaching out to their political representatives. We will be there for your business whenever it is threatened at the federal, state or municipal level.Members will receive regular updates on pending legislation and regulations affecting hookah and hookah related products through state and federal news updates. Members will also be provided the most relevant news and insights for improving your business and informing the community.",
        },
        {
          number: "3",
          title: "Unifying Voice",
          info: "We need an ever-present organization that unites the segments of our sector to defend our culture and businesses. NHCA is uniting manufacturers, distributors, store owners, and lounges. Bringing together the industry will not only help defend the future of your business, but it will also help to grow it through new insights and connections.",
        },
        {
          number: "4",
          title: "Unifying Voice",
          info: "We need an ever-present organization that unites the segments of our sector to defend our culture and businesses. NHCA is uniting manufacturers, distributors, store owners, and lounges. Bringing together the industry will not only help defend the future of your business, but it will also help to grow it through new insights and connections.",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.our-standarts {
  // .our-standarts__header
  &__header {
    text-align: center;
    margin-bottom: 55px;
  }

  // .our-standarts__body
  &__body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px 15px;
  }
}
</style>
