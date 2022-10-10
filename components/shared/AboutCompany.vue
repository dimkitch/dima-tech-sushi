<template>
  <div class="about-company">
    <div class="container">
      <div class="about-company__wrapper">
        <div class="about-company__item">
          <div class="about-company__content">
            <h2
              class="about-company__title tf-up fw-heavy title-xl color-dark-deep"
            >
              {{ aboutCompanyData.title }}
            </h2>
            <p class="about-company__info text-xl color-secondary-deep-light">
              {{ aboutCompanyData.description }}
            </p>
            <div class="about-company__stat">
              <div
                class="about-company__stat-item"
                v-for="(item, index) in aboutCompanyData.features"
                :key="`about-company__stat-item-${index}`"
              >
                <span
                  class="about-company__count title-xl fw-heavy color-accent"
                  >{{ item.title }}</span
                >
                <span class="text-sm fw-600 tf-up">{{ item.description }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="about-company__item">
          <img
            class="about-company__image"
            src="@/assets/img/ImagePlaceHolder.png"
            alt=""
          />
        </div>
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
    @media (max-width: $breakpoint-desktop-md) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: $breakpoint-tablet) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  // .about-company__item
  &__item {
    @media (max-width: $breakpoint-tablet) {
      &:nth-child(1) {
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
      }
      &:nth-child(2) {
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 2;
      }
    }
  }
  // .about-company__title
  &__title {
    @media (max-width: $breakpoint-tablet) {
      font-size: 40px;
      line-height: 35px;
    }
    @media (max-width: $breakpoint-tablet-md) {
      font-size: 35px;
      line-height: 35px;
    }
    @media (max-width: $breakpoint-mob) {
      font-size: 30px;
      line-height: 35px;
    }
  }
  // .about-company__info
  &__info {
    min-height: 176px;
    margin-top: 20px;
    @media (max-width: $breakpoint-mob) {
      margin-bottom: 30px;
    }
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
    object-fit: cover;
    @media (max-width: $breakpoint-desktop-md) {
      width: 100%;
    }
  }
  // .about-company__count
  &__count {
    color: $color-accent;
    &:last-child {
      color: #54c28f;
    }
    &:nth-child(3n) {
      color: #00b5e3;
    }
    @media (max-width: $breakpoint-mob) {
      font-size: 30px;
      line-height: 45px;
    }
  }
}
</style>
