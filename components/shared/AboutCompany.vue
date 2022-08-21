<template>
  <div class="about-company">
    <div class="container">
      <div class="about-company__wrapper">
        <div class="about-company__content">
          <h2
            class="about-company__title tf-up fw-heavy title-xl color-dark-deep"
          >
            {{ aboutCompanyData.title }}
          </h2>
          <p class="about-company__text text-xl color-secondary-deep-light">
            {{ aboutCompanyData.description }}
          </p>
          <div class="about-company__stat">
            <div
              class="about-company__stat-item"
              v-for="(item, index) in aboutCompanyData.features"
              :key="`about-company__stat-item-${index}`"
            >
              <span
                class="about-company__years title-xl fw-heavy color-accent"
                >{{ item.title }}</span
              >
              <span class="text-sm fw-600 tf-up">{{ item.description }}</span>
            </div>
            <!-- <div class="about-company__stat-item">
              <span
                class="about-company__years title-xl fw-heavy color-success-deep"
                >6+</span
              ><span class="text-sm fw-600 tf-up">лет работы</span>
            </div>
            <div class="about-company__stat-item">
              <span
                class="about-company__clients title-xl fw-heavy color-primary-light"
                >500+</span
              ><span class="text-sm fw-600 tf-up">ДОВОЛЬНЫХ КЛИЕНТОВ</span>
            </div> -->
          </div>
        </div>
        <img
          class="about-company__image"
          src="@/assets/img/Image Place Holder.png"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    aboutCompanyData: {
      type: Object,
    },
  },
};
</script>
<style lang="scss">
.about-company {
  // .about-company__wrapper
  &__wrapper {
    display: flex;
    align-items: center;
  }

  // .about-company__text
  &__text {
    min-height: 176px;
    margin-top: 20px;
  }

  // .about-company__stat
  &__stat {
    display: flex;
    justify-content: space-between;
  }

  //  .about-company__stat-item
  &__stat-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  // .about-company__image
  &__image {
    object-position: center;
    width: 100%;
    height: 100%;
  }
}
</style>
